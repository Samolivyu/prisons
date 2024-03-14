import React, {Component} from 'react';
import './visitor.css';
import  VisitorComponent from './visitorComponent.js';

 
class Visitors extends Component{

    render(){

        const visitors = [ 
            { id: 1, visitor_name: 'John Doe', inmateVisited: "Munene Mwenda", entry_time:'11:34 02/11/2004', exit_time:'14:34 02/11/2004' },
            { id: 2, visitor_name: 'John Doe', inmateVisited: "Munene Mwenda", entry_time:'11:34 02/11/2004', exit_time:'14:34 02/11/2004' },
            { id: 3, visitor_name: 'John Doe', inmateVisited: "Munene Mwenda", entry_time:'11:34 02/11/2004', exit_time:'14:34 02/11/2004' },
            { id: 4, visitor_name: 'John Doe', inmateVisited: "Munene Mwenda", entry_time:'11:34 02/11/2004', exit_time:'14:34 02/11/2004' }
        ];    

        return (
            <div className='visitors-body'>
                <div className='page-title'>
                    <h1>Visitors</h1>
                </div>

                <div className='visitor_components_container'>
                    {visitors.map((visitor, index) => (
                                        <VisitorComponent
                                        key={index}
                                        {...visitor}
                                        />

                    ))}
                </div>
            </div>
        );
    }
};

export default Visitors;