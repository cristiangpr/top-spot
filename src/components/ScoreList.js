import React, { Component } from 'react';
import "../App.css";


class ScoreList extends Component {
  constructor(props){
    super(props);

  this.scoresRef = this.props.firebase.database().ref('scores');


this.state = {
    scores: [],
    newScore: " "
  };
}
  componentDidMount() {
         this.scoresRef.on('child_added', snapshot => {
             const score = snapshot.val();

             score.key = snapshot.key;
             this.setState({ scores: this.state.scores.concat( score ) })
           });
}

handleSubmit(e){
  console.log(this.props);
  e.preventDefault();

  var newScore = {

    content: this.state.newScore,
    spotId: this.props.value,
    timeStamp: this.props.firebase.database.ServerValue.TIMESTAMP,
  }
  console.log(newScore);
  this.scoresRef.push(newScore);
  e.target.reset();
}
  handleChange(e) {
  this.setState({ newScore: e.target.value })
}


render() {

      return (
          <div className='scores'>
              <div className='score-list'>
                  {this.state.scores.filter((item) => item.spotId === this.props.value)
                    .map((score, index) => {
                        console.log(score);

                        return ( <div className="score-text light bg-light" key={index}><p>{score.content}</p></div>)
                      })
                  }
              </div>
                  <form onSubmit= {(e) => this.handleSubmit(e)}
                  onChange= {(e) => this.handleChange(e)}>
                    <label>
                      Score:
                      <input type="text" content={this.state.newScore} />
                   </label>
                  <span> <input type="submit" value="Submit" className="btn btn-success"/> </span>
                 </form>

          </div>
      );
  }
}
export default ScoreList;
