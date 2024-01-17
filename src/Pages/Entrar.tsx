import { useState } from 'react'
import { Link } from 'react-router-dom'

import '../App.css'

function Entrar() {
  const [stateValue, setStateValue] = useState("")
  const handleValue = (e: any) => setStateValue(e.target.value)
  return (
    <>
      <div className="container d-flex-column mb-2">
        <h3 className="mb-3">Digite o Código do Role:</h3>
        <div className='input-group'>
          <input 
            type="number" 
            className="form-control" 
            id='code' 
            name='code' 
            value={stateValue}
            onChange={handleValue}
            />
          <Link className="btn btn-outline-primary" to={`Participar/${stateValue}`}>Entrar</Link>
        </div>
      </div>
    </>
  )
}

export default Entrar
