import React from 'react'

function Contador(props) {
  return(
    <div className="contador">
      <h1 className="dia">{(props.dias.remainDays < 0 )? "" : props.dias.remainDays}</h1>
      <h1 className="hora">{(props.dias.remainHours < 0 ) ? "" : props.dias.remainHours}</h1>
      <h1 className="minutos">{props.dias.remainMinutes}</h1>
      <h1 className="segundos">{props.dias.remainSeconds}</h1>
    </div>
  )
}

export default Contador