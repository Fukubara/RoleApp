import { useState } from 'react'
import { useParams, redirect } from 'react-router-dom'
import { addParticipante } from "../CRUD.ts"

import '../App.css'

function Participar() {
  let { id } = useParams()
  const [name, setName] = useState("")

  const handleinputname = (e: any) => setName(e.target.value)
  const salvar = () => {
    addParticipante(parseInt(id!), name)
    redirect(`/Adicionar/${id}`)
  }

  return (
    <>
      <div className="container d-flex-column mb-2">
        <h3 className="mb-3">Role selecionado: {id}</h3>
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
