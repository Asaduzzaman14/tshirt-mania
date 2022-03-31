import React from 'react';
import Brother from '../Brother/Brother'
import MySelf from '../MySelf/MySelf';
import Sister from '../Sister/Sister'

const Farher = ({ house, ornament }) => {
    return (
        <section style={{ border: '2px solid goldenrod', margin: '10px', borderRadius: '10px' }}>
            <h2>father</h2>
            <small>{house}</small>
            <section>

                <Brother house={house}></Brother>
                <Sister house={house}></Sister>
                <MySelf ornament={ornament} house={house}></MySelf>
            </section>
        </section>
    );
};

export default Farher;