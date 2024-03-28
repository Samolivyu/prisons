import React, { Component } from "react";
import './inmateComponentStyle.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


export default class InmateComponent extends Component{
  // constructor(props){
  //   super(props);
  // }

  render() {
    console.log(this.props);
    const { inmateName, inmate_id, inmate_bloodType, inmate_height, number_of_tatoos, birth_marks, hearing_impairments, visual_impairments, } = this.props;

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
        <div>
          <Popup trigger=
            {<div className="view_more_button"><button>View</button></div>}
            position="right center"
            arrow={true}
            offsetX={-190}
            offsetY={-90}
            closeOnDocumentClick>
              {
                close => (
                  <div className="modal">
                    <div className="content">
                      <div className="prisoner-popup-image-container">
                      </div>
                      <div className="prisoner-popup-info-container">
                        <p>Inmate blood-type: {inmate_bloodType}</p>
                        <p>Inmate height: {inmate_height}</p>
                        <p>Inmate tatoos: {number_of_tatoos}</p>
                        <p>Birth Marks (Y/N): {birth_marks}</p>
                        <p>Hearing Impairments: {hearing_impairments}</p>
                        <p>Visual Impairments: {visual_impairments}</p>
                      </div>
                    </div>
                    <div className="close-popup-button">
                      <button onClick={() => close()}>
                        Close View
                      </button>
                    </div>
                  </div>
                )
              }
          </Popup>
        </div>
      </div>

    ); 
  }

}

// export default inmateComponent;