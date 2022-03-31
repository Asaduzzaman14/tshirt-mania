import React from 'react';
import './Tshirt.css'
const Tshirt = ({ handelAddToCart, tshirt }) => {

    const { name, picture, price } = tshirt

    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>name: {name}</h4>
            <p>price : ${price}</p>
            <button onClick={() => handelAddToCart(tshirt)}>Add to Cart</button>
        </div>
    );
};

export default Tshirt;