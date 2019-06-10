import React from 'react';
import '../App.css'




const ShelterCove = ({cove}) => {
  return (
    <div>
      <center><h1>Shelter Cove</h1></center>
      {cove.map((coveHit, index) => (
        <div className="card" key={index}>
          <div className="card-body">
            <h5 className="card-title">{coveHit.localTimestamp}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{coveHit.fadedRating}</h6>
            <p className="card-text">{coveHit.solidRating}</p>
          </div>
        </div>
      ))}
    </div>
  )
};
export default ShelterCove;
