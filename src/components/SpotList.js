import React from 'react';
import '../App.css'




const SpotList = ({hits}) => {
  return (
    <div>
      <center><h1>Spot List</h1></center>
      {hits.map((hit, index) => (
        <div className="card" key={index}>
          <div className="card-body">
            <h5 className="card-title">{hit.localTimestamp}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{hit.fadedRating}</h6>
            <p className="card-text">{hit.solidRating}</p>
          </div>
        </div>
      ))}
    </div>
  )
};
export default SpotList;
