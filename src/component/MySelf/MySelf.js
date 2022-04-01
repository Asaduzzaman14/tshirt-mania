import React, { useContext } from 'react';
import { ringContext } from '../Grandpa/Grandpa';
import Spacial from '../Spacial/Spacial';

const MySelf = () => {
    const [valu, house] = useContext(ringContext)
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h2>Myselfe</h2>
            <small>H:{house}</small>
            <small>value: {valu}</small>
            <Spacial ></Spacial>
        </div>
    );
};

export default MySelf;