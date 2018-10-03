import React, { Component } from 'react';
import './App.css';
import AppLayout from '../components/app-layout';
import SelectHora from '../components/select-hora';
import Contador from '../components/contador'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TypeValor: 'minutos',
      inputNumero:'',
      diasConvertidos: '',
      horasConvertidos:'',
      minutosConvertidos: '',
      segundosConvertidos: '',
      dias:'',
      horas:'',
      minutos:'',
      segundos:'',
      fechacontrol:''
    };
  }

  InputhandleChange = event => {
    this.setState({
      inputNumero: event.target.value
    })
  }
  SelectHandleChange= event => {
    this.setState({TypeValor: event.target.value});
  }

  SelectHandleSubmit = event => {
    event.preventDefault();
    let numero = this.state.inputNumero
    let tipo = this.state.TypeValor;
    let diasConvertidos,minutosConvertidos,segundosConvertidos,horasConvertidos
    if (tipo === 'minutos') {
      console.log('minutos elegidos')
      diasConvertidos = Math.floor((this.state.inputNumero / 60)/ 24)
      horasConvertidos = Math.floor(diasConvertidos * 24)
      segundosConvertidos = Math.floor(horasConvertidos * 3600)
      minutosConvertidos = this.state.inputNumero
      let fechacontrol = new Date()
      let horaact = fechacontrol.getMinutes()
      fechacontrol.setMinutes(minutosConvertidos)
      
       this.setState({
        diasConvertidos,
        horasConvertidos,
        minutosConvertidos,
        segundosConvertidos,
        fechacontrol
      })
    }
    if (tipo === 'horas') {
      console.log('horas elegidas')
      diasConvertidos = Math.floor(this.state.inputNumero / 24)
      horasConvertidos = this.state.inputNumero
      minutosConvertidos = Math.floor(diasConvertidos * 1440)
      segundosConvertidos = Math.floor(minutosConvertidos * 60)

      let fechacontrol = new Date()
      fechacontrol.setHours(horasConvertidos)

       this.setState({
        diasConvertidos,
        horasConvertidos,
        minutosConvertidos,
        segundosConvertidos,
        fechacontrol
      })

    }
    
   

    this.contador()
    
  }
 getRemainingTime = deadline => {
    let now = new Date(),
        remainTime = (new Date(deadline) - now + 1000) / 1000,
        remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
        remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
        remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
        remainDays = Math.floor(remainTime / (3600 * 24));
  
    return {
      remainSeconds,
      remainMinutes,
      remainHours,
      remainDays,
      remainTime
    }
  };
  
  contador = valor =>{
    const timerUpdate = setInterval( () => {

      let t = this.getRemainingTime(this.state.fechacontrol)
      console.log(this.state.fechacontrol)
      this.setState({
       dias: t
      })
      if( t.remainTime <= 1) {
        //clearInterval(timerUpdate);
      }
  
    }, 1000)
  }
  
  render() {
    return (
      <AppLayout>
        <SelectHora
            datos={this.state.TypeValor}
            valueNumero={this.state.inputNumero}
            SelectHandleSubmit={this.SelectHandleSubmit}
            SelectHandleChange={this.SelectHandleChange}
            InputhandleChange={this.InputhandleChange}
        />
        <Contador 
          dias={this.state.dias}
          horas={this.state.horas}
          minutos={this.state.minutos}
          segundos={this.state.segundos}
        />

      </AppLayout>
    );
  }
}

export default App;
