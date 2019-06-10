import React from 'react';
import '../App.css'




const PuertoEscondido = ({puerto}) => {
  return (
    <div>
      <center><h1>Puerto Escondido</h1></center>
      {puerto.map((puertoHit, index) => (
        <div className="card" key={index}>
          <div className="card-body">
            <h5 className="card-title">{puertoHit.localTimestamp}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{puertoHit.fadedRating}</h6>
            <p className="card-text">{puertoHit.solidRating}</p>
          </div>
        </div>
      ))}
    </div>
  )
};
export default PuertoEscondido;
