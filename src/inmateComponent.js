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
          <Popup trigger=
          {<button>View</button>}
          modal nested>
            {
              close => (
                <div className="modal">
                  <div className="content">
                    <div className="prisoner-popup-image-container">

                    </div>
                    <div className="prisoner-popup-info-container">

                    </div>
                  </div>
                  <div>
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