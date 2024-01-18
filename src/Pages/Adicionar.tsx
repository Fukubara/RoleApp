import { Link, useParams } from 'react-router-dom'
import { getParticipantes } from "../CRUD.ts"

import '../App.css'
import { useEffect, useState } from 'react'

function Adicionar() {
  let { id } = useParams()
  const [data, setData] = useState([])

  useEffect(() => {
    getParticipantes(parseInt(id!)).then(dados => setData(dados.nomes))
  }, [])
 
  return (
    <div className="card">
      <div className="container d-flex-column mb-2">
        Obrigado por participar. Aqui está a lista de confirmados:
        <ul className="list-group">
          {
            data?.map((ele)=> (
              
                <li className="list-group-item">{ele}</li>
              
            ))
          }
        </ul>
      </div>
      <div>
        <span>Deseja adicionar mais alguém? </span>
        <Link to={`/Participar/${id}`}>Adicionar</Link>
      </div>
    </div>
  )
}

export default Adicionar
