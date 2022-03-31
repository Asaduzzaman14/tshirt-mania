import React from 'react';
import Spacial from '../Spacial/Spacial';

const MySelf = ({ house, ornament }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h2>Myselfe</h2>
            <small>{house}</small>
            <Spacial ornament={ornament}></Spacial>
        </div>
    );
};

export default MySelf;