import React, {Component} from 'react';
import './Inmates.css';
import InmateComponent from './inmateComponent';


class Inmates extends Component{
    // constructor(){
    //     super();
    // }
   render(){

    const inmates = [
        { id: 1, inmateName: 'Munene Mwenda', inmate_id:'12345'},
        { id: 2, inmateName: 'Mwenda Munene', inmate_id: '98765'},
        { id: 3, inmateName: 'Munene Munene', inmate_id: '56789'} 
    ];

        return (
            <div className='inmates-body'>
                <div className='page-title'>
                    <h1>Inmates</h1>
                </div>  
                <div className='inmate_components_container'>
                        {inmates.map((inmate, index) => (
                            <InmateComponent
                            key={index}
                            {...inmate}
                            />
                        ))}
                </div>
            </div>
        )
    }
};

export default Inmates;