import React, {Component} from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      token: 'Carregando...',
      nome: ''
    };

    
    let firebaseConfig = {
      apiKey: "AIzaSyAhi1340qyYP00TUXwziMnpjFBf95dut4U",
      authDomain: "reactapp-d53e9.firebaseapp.com",
      databaseURL: "https://reactapp-d53e9-default-rtdb.firebaseio.com",
      projectId: "reactapp-d53e9",
      storageBucket: "reactapp-d53e9.appspot.com",
      messagingSenderId: "950335267512",
      appId: "1:950335267512:web:b7c4321a600b934fdaca4d",
      measurementId: "G-F45BZDLB5T"
    };

    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
  }
  render(){
    const {token} = this.state;
    return(
      <div>
        <h1>Token: {token}</h1>
      </div>
    )
  }
}