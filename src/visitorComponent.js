import React, { Component } from "react";
import "./visitorComponentStyles.css";



export default class visitorComponent extends Component {
    constructor(props){
        super(props);

        this.state = {
            visitorName: this.visitorName,
            inmateName: this.inmateName
        };
    }

    render() {
        return (
        <div className="visitor-container">

            <div className="visitor_name">
                <p>Name: {visitorName}</p>
            </div>

            <div className="inmateVisited">
                <p>For: {inmateName}</p>
            </div>

            <div className="entry_time">
                <p>Entry time: </p>
            </div>

            <div className="exit_time">
                <p>Exit time: </p>
            </div>
        </div>
        );
    }
}
