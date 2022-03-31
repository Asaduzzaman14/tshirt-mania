import React, { useContext } from 'react';
import { ringContext } from '../Grandpa/Grandpa';


const Spacial = () => {
    const value = useContext(ringContext);
    return (
        <div>
            <h2>
                Spacial
            </h2>
            <p>{value}</p>
        </div>
    );
};

export default Spacial;