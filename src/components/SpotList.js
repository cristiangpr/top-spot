import React, { Component } from 'react';
import '../App.css'
class SpotList extends Component {
  constructor(props){
    super(props);

this.state = {
    spots: [],
    newSpotName: " "
  };

  this.spotsRef = this.props.firebase.database().ref('spots');

}

  componentDidMount() {
    this.spotsRef.on('child_added', snapshot => {
      const spot = snapshot.val();
       spot.key = snapshot.key;
    this.setState({ spots: this.state.spots.concat( spot ) });
    });
  }



  handleSubmit(e){
    e.preventDefault();
    this.spotsRef.push({
    name: this.state.newSpotName});
     e.target.reset();

  }
    handleChange(e) {
    this.setState({ newSpotName: e.target.value })

  }



  render() {
        console.log(this.state.spots.length);
        return (
            <div className='spots'>
                <div className='spot-list'>
                <form onSubmit= {(e) => this.handleSubmit(e)}
                onChange= {(e) => this.handleChange(e)}>
                  <label>

                    <input type="text" name={this.state.newSpotName} />
                 </label>
                 <input type="submit" value="New Spot" className="btn btn-secondary"/>
               </form>

                    {
                        this.state.spots.map((spot, index) => {
                          return ( <div className="spot-info" key={index} onClick={() => this.props.action(spot)} >{spot.name}</div>)
                        })
                    }
                </div>


            </div>
        );
    }
  }
export default SpotList;
