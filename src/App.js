import React, { Component } from 'react';

import './App.css';
import * as firebase from "firebase";

import ShelterCove from './components/ShelterCove';
import PuertoEscondido from './components/PuertoEscondido';
var firebaseConfig = {
    apiKey: "AIzaSyBx3pFZsZcFV_8_iyUnlNr_sjLp7MBxKmY",
    authDomain: "top-spot-11f99.firebaseapp.com",
    databaseURL: "https://top-spot-11f99.firebaseio.com",
    projectId: "top-spot-11f99",
    storageBucket: "top-spot-11f99.appspot.com",
    messagingSenderId: "606012835980",
    appId: "1:606012835980:web:760011634c0f5c95"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const cove_API = 'http://magicseaweed.com/api/1b935398cd052b4a0924781efa0cec35/forecast/?spot_id=4083';
  const puerto_API = 'http://magicseaweed.com/api/1b935398cd052b4a0924781efa0cec35/forecast/?spot_id=340';



  class App extends Component {
    constructor(props){
      super(props);




      this.state = {
          cove: [],
          puerto: []

        };


      }

        componentDidMount() {
          fetch(cove_API)
           .then(response => response.json())
           .then(data => this.setState({ cove: data }));

           fetch(puerto_API)
            .then(response => response.json())
            .then(data => this.setState({ puerto: data }));
        console.log(this.state);
       }


  render(){
  return (
    <div className="App">
      <header className="App-header">
   <h2>Top Spot</h2>
      </header>
      <main>
         <div className ="container">
          <div className ="row">
           <div className ="col-sm-6">
            <ShelterCove cove={this.state.cove} />
           </div>
           <div className ="col-sm-6">
            <PuertoEscondido puerto={this.state.puerto} />
           </div>
           </div>
        </div>
      </main>
    </div>
  );
}
}
export default App;
