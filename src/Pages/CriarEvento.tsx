import { Link } from 'react-router-dom'
import { criarEvento } from "../CRUD.ts"

import '../App.css'
import { useState } from 'react'

function CriarEvento() {
  const [nome, setNome] = useState()
  const [data, setData] = useState()
  const [descricao, setDescricao] = useState()
  const [local, setLocal] = useState()
  const [endereco, setEndereco] = useState()
  const [valor, setValor] = useState()

  const handleNome = (e: any) => setNome(e.target.value)
  const handleData = (e: any) => setData(e.target.value)
  const handleDescricao = (e: any) => setDescricao(e.target.value)
  const handleLocal = (e: any) => setLocal(e.target.value)
  const handleEndereco = (e: any) => setEndereco(e.target.value)
  const handleValor = (e: any) => setValor(e.target.value)

  function submitForm() {
    criarEvento(nome!, data!, descricao!, local!, endereco!, valor!)
  }

  return (
    <div className="card">
      <h3>Novo Evento</h3>
      <div className="row">
        <div className="col form-floating m-2">
          <input className="form-control" type="text" id="nomeInput" placeholder='Titulo...' onChange={handleNome}/>
          <label htmlFor="nomeInput">Nome: </label>
        </div>
        <div className="col input-group m-2">
          <span className="input-group-text text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
            </svg>
          </span>
          <input type="datetime-local" className="form-control"  onChange={handleData}/>
        </div>
      </div>
      
      <div className="form-floating m-2">
        <input type="text" className="form-control" id='descricaoInput' placeholder="Descrição..." onChange={handleDescricao}/>
        <label htmlFor="descricaoInput">Descrição: </label>
      </div>
      <div className="form-floating m-2">
        <input type="text" className="form-control" id='localInput' placeholder="Local..." onChange={handleLocal}/>
        <label htmlFor="localInput">Local: </label>
      </div>
      <div className="form-floating m-2">
        <input type="text" className="form-control" id='enderecoInput' placeholder="Endereço..." onChange={handleEndereco}/>
        <label htmlFor="enderecoInput">Endereço: </label>
      </div>
      <div className="form-floating m-2">
        <input type="text" className="form-control" id='valorInput' placeholder="Valor..." onChange={handleValor}/>
        <label htmlFor="valorInput">Valor: </label>
      </div>
      <button className="btn btn-primary mb-1" onClick={submitForm}>Adicionar</button>
      <Link className="btn btn-danger" to="/">Cancelar</Link>
    </div>
  )
}

export default CriarEvento
