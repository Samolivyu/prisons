import React, { Component } from "react";
import './inmateComponentStyle.css';


export default class InmateComponent extends Component{
  // constructor(props){
  //   super(props);
  // }

  render() {
    console.log(this.props);
    const { inmateName, inmate_id} = this.props;

    return(
      <div className="inmate-container">
        <div className="inmate-name">
            <p>Inmate Name:</p>
            <p>{inmateName}</p>
        </div>
        <div>
            <p>Inmate Id:</p>
            <p>{inmate_id}</p>
        </div>
        <div className="view-more-button">
            <button>View</button>
        </div>
      </div>

    ); 
  }

}

// export default inmateComponent;