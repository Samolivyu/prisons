import React, { Component } from "react";
import './inmateComponentStyle.css';


export default class inmateComponent extends Component{
  constructor(props){
    super(props);

    this.state = {
      inmateName: this.inmateName,
      inmate_id: this.inmate_id
    };
  }

  render() {
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