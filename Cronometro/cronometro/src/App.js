import React, { Component } from "react";
import './style.css'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numero: 0
    };
    this.vai = this.vai.bind(this);
    this.limpar = this.limpar.bind(this);
  }
  vai() {

    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
    } else {
      this.timer = setInterval(() => {
        let state = this.state;
        state.numero += 0.1;
        this.setState(state)
      }, 100)
    }
  }
  limpar() {

  }
  render() {
    return (
      <div className="container">
        <img src={require('./Assets/cronometro.png')} className="img" alt="" />
        <a className="timer">{this.state.numero.toFixed(1)}</a>
        <div className="areaBtn">
          <a className="botao" onClick={this.vai}>VAI</a>
          <a className="botao" onClick={this.limpar}>LIMPAR</a>
        </div>
      </div>
    );
  }
}

export default App;
