import React, { useContext } from 'react';
import { ringContext } from '../Grandpa/Grandpa';


const Spacial = () => {

    const [chips, house, setHouse] = useContext(ringContext);

    return (
        <section style={{ border: '2px solid tomato', borderRadius: '10px', padding: '8px' }}>
            <h2> Spacial </h2>
            <p> Chips:{chips}</p>
            <button onClick={() => setHouse(house + 1)}>buy a house</button>
        </section>
    );
};

export default Spacial;