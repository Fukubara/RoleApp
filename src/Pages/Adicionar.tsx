import { useParams } from 'react-router-dom'
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
    <>
      <div className="container d-flex-column mb-2">
        Obrigado por participar. Aqui está a lista de confirmados:
        {
          data?.map((ele)=> (
            <ul>
              {ele}
            </ul>
          ))
        }
      </div>
    </>
  )
}

export default Adicionar
