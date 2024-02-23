import React from 'react';
import './Inmates.css';
import inmateComponent from './inmateComponent';

const Inmates = () => {
    const inmates = [

    ]

    return (
        <div className='inmates-body'>
            <div className='page-title'>
                <h1>Inmates</h1>
            </div>  
            <div className='inmate_components_container'>
                    {inmates.map(inmate => (
                        <inmateComponent
                        key={inmate.id}
                        inmateName={inmate.inmateName}
                        inmate_id={inmate.inmate_id}
                        />
                    ))}
            </div>
        </div>
    )
};

export default Inmates;