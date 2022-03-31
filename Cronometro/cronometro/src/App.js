import React, { Component } from "react";
import './style.css'
class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      numero: 0
    }
  }

  render() {
    return (
      <div className="container">
        <img src={require('./Assets/cronometro.png')} className="img" alt="" />
        <a className="timer">{this.state.numero.toFixed()}</a>
        <div className="areaBtn">
          <a className="botao">VAI</a>
          <a className="botao">LIMPAR</a>
        </div>
      </div>
    );
  }
}

export default App;
