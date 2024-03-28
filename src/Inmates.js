import React, {Component} from 'react';
import './Inmates.css';
import InmateComponent from './inmateComponent';


class Inmates extends Component{
    // constructor(){
    //     super();
    // }
   render(){
    
    const inmates = [
        { id: 1, inmateName: 'Munene Mwenda', inmate_id:'12345', inmate_bloodType: 'O',inmate_height:"4'3",  number_of_tatoos: '100', birth_marks: 'Yes', hearing_impairments: 'None', visual_impairments: 'Mono-eye' },
        { id: 2, inmateName: 'Mwenda Munene', inmate_id: '98765',  inmate_bloodType: 'B', inmate_height:"6'3", number_of_tatoos: '4', birth_marks: 'No', hearing_impairments: 'None', visual_impairments: 'None'},
        { id: 3, inmateName: 'Munene Munene', inmate_id: '56789',  inmate_bloodType: 'AB', inmate_height:"5'1", number_of_tatoos: '0', birth_marks: 'No', hearing_impairments: 'Slightly deaf', visual_impairments: 'None'} 
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