import React from 'react'

function SelectHora(props) {
  return (
    <form onSubmit={props.SelectHandleSubmit}>
       <label>
           <input className="input" type="number" value={props.valueNumero} onChange={props.InputhandleChange} />
      </label>
      <label>
        <select value={props.datos} onChange={props.SelectHandleChange}>
          <option value="horas">Horas</option>
          <option value="minutos">Minutos</option>
        </select>
      </label>
      <input  className="boton"type="submit" value="Submit" />
    </form>
  );
}

export default SelectHora
