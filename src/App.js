import React, { Component } from 'react';

import './App.css';
import * as firebase from "firebase";

import SpotList from './components/SpotList';

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

  const API = 'http://magicseaweed.com/api/1b935398cd052b4a0924781efa0cec35/forecast/?spot_id=4083'



  class App extends Component {
    constructor(props){
      super(props);




      this.state = {
          hits: [],

        };


      }

        componentDidMount() {
          fetch(API)
           .then(response => response.json())
           .then(data => this.setState({ hits: data }));
           console.log(this.state);
       }


  render(){
  return (
    <div className="App">
      <header className="App-header">
   <h2>Top Spot</h2>
      </header>
      <main>

         <SpotList hits={this.state.hits} />


      </main>
    </div>
  );
}
}
export default App;
