import { useParams } from 'react-router-dom'
import { getParticipantes } from "../CRUD.ts"

import '../App.css'
import { useEffect, useState } from 'react'

function Adicionar() {
  let { id } = useParams()
  const [data, setData] = useState([])

  useEffect(() => {
    getParticipantes(20).then(dados => setData(dados.nomes))
  }, [])
 
  return (
    <>
      <div className="container d-flex-column mb-2">
        Obrigado por participar. Aqui está a lista de confirmados:
        {
          data?.map((ele, i)=> (
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
