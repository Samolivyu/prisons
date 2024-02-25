import React, {Component} from 'react';
import './visitor.css';
import  VisitorComponent from './visitorComponent.js';

 const visitors = [ 
        { id: 1, visitor_name: 'John Doe', inmateVisited: "Munene Mwenda", entry_time:'11:34 02/11/2004', exit_time:'14:34 02/11/2004' },
        { id: 2, visitor_name: 'John Doe', inmateVisited: "Munene Mwenda", entry_time:'11:34 02/11/2004', exit_time:'14:34 02/11/2004' },
        { id: 3, visitor_name: 'John Doe', inmateVisited: "Munene Mwenda", entry_time:'11:34 02/11/2004', exit_time:'14:34 02/11/2004' },
        { id: 4, visitor_name: 'John Doe', inmateVisited: "Munene Mwenda", entry_time:'11:34 02/11/2004', exit_time:'14:34 02/11/2004' }
    ]

class Visitors extends Component{

    render(){
        return (
            <div className='visitors-body'>
                <div className='page-title'>
                    <h1>Visitors</h1>
                </div>

                <div className='visitor_components_container'>
                    {visitors.map(visitor => (
                                        <VisitorComponent
                                        key={visitor.id}
                                        visitor_name={visitor.visitor_name}
                                        inmateVisited={visitor.inmateVisited}
                                        entry_time={visitor.entry_time}
                                        exit_time={visitor.exit_time}
                                        />

                    ))}
                </div>
            </div>
        );
    }
};

export default Visitors;