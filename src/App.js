import React, { Component } from 'react';

import './App.css';
import * as firebase from "firebase";
import ScoreList from './components/ScoreList';
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
  class App extends Component {
    constructor(props){
      super(props);

  this.setActiveSpot = this.setActiveSpot.bind(this);


      this.state = {
        activeSpot: " ",

      }
    }


    setActiveSpot(spot) {
          this.setState({ activeSpot: spot });
          console.log(this.state.activeSpot);
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
   <h2>Top Spot</h2>
      </header>
      <main>
        <section className="container">
      <section className="row" id="selling-ponts">

        <div className="col-md-6">
          <h2 className="point-title">My Spots</h2>
          <ul className="point-description">
          <h1> {this.state.activeSpot.name}</h1>
         <SpotList firebase = {firebase} action = {this.setActiveSpot} />
          <ScoreList firebase = {firebase} value = {this.state.activeSpot.key}/>
          </ul>
        </div>
        <div className="col-md-6">
          <h2 className="point-title">Select Date</h2>


          <input type="date" id="start" name="trip-start"

           min="2019-01-01" max= "2019-05-26"/>
        </div>
      </section>
    </section>
      </main>
    </div>
  );
}
}
export default App;
