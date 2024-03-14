import React, { Component } from "react";
import "./visitorComponentStyles.css";



export default class VisitorComponent extends Component {
    // constructor(props){
    //     super(props);

    //     this.state = {
    //         visitorName: this.visitorName,
    //         inmateVisited: this.inmateVisited,
    //         entry_time: this.entry_time,
    //         exit_time: this.exit_time
    //     };
    // }

    render() {
        console.log(this.props)
        const { visitorName, inmateVisited, entry_time, exit_time} = this.props;
        return (
        
        <div className="visitor-container">

            <div className="visitor_name">
                <p>Name: {visitorName}</p>
            </div>

            <div className="inmateVisited">
                <p>For: {inmateVisited}</p>
            </div>

            <div className="entry_time">
                <p>Entry time: {entry_time}</p>
            </div>

            <div className="exit_time">
                <p>Exit time: {exit_time}</p>
            </div>
        </div>
        );
    }
}
