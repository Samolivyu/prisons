import React from "react";
import "./visitorComponentStyles.css";


const visitorComponent = () => {


    return (
        <div className="visitor-container">

            <div className="visitor_name">
                <p>Name: {{visitorName}}</p>
            </div>

            <div className="inmateVisited">
                <p>For: {{inmateName}}</p>
            </div>

            <div className="entry_time">
                <p>Entry time: </p>
            </div>

            <div className="exit_time">
                <p>Exit time: </p>
            </div>
        </div>
    );
};

export default visitorComponent;

