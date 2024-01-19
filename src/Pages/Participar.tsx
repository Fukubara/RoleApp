import { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { addParticipante, getPropriedadesEvento } from "../CRUD.ts"
import { PropriedadesEvento } from "../interfaces.ts"

import '../App.css'

function Participar() {
  let { id } = useParams()
  const location = useLocation()
  const baseurl = location.pathname.split("/", 1)
  const [name, setName] = useState("")
  const [propriedades, setPropriedades] = useState({} as PropriedadesEvento)

  const handleinputname = (e: any) => setName(e.target.value)
  const salvar = () => {
    addParticipante(parseInt(id!), name)
    window.location.href = baseurl + "/Adicionar/" + id
  }
  const fixerData = (data: PropriedadesEvento) => {
    let temp = data.data.split("T")
    let tempdata = temp[0].split("-")
    data.data = `${tempdata[2]}/${tempdata[1]}/${tempdata[0]} ${temp[1]}`
    return data
  }

  useEffect(() => {
    getPropriedadesEvento(id!).then(dados => fixerData(dados)).then(dados => setPropriedades(dados))
  }, [])

  return (
    <>
      <div className="container d-flex-column mb-2">
        <h3 className="mb-3">Role selecionado: {id}</h3>
        <div className="d-flex flex-column justify-content-start mb-3">
          <div className="w-fit"><strong>Nome: </strong>{propriedades.nome}<br/></div>
          <div className="w-fit"><strong>Local: </strong>{propriedades.local}<br/></div>
          <div className="w-fit"><strong>Endereço: </strong>{propriedades.endereco}<br/></div>
          <div className="w-fit"><strong>Data: </strong>{propriedades.data}<br/></div>
          <div className="w-fit"><strong>Descrição: </strong>{propriedades.descricao}<br/></div>
          <div className="w-fit"><strong>Valor: </strong>{propriedades.valor}<br/></div>
        </div>
        <div className="input-group mb-3">
          <span className='input-group-text'>Nome Completo</span>
          <input type="text" name="nome" id="nome" className="form-control" required onChange={handleinputname} />
        </div>
        <button className="btn btn-primary" onClick={salvar}>Confirmar</button>
      </div>
    </>
  )
}

export default Participar
