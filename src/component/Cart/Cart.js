import React from 'react';
import './Cart.css'
const Cart = ({ cart, deleteItem }) => {
    // ocndational rendaring option
    // 1. element variable
    // 2. ternary operator condation ? true : false 

    let command;
    if (cart.length === 0) {
        command = <p>please added one item</p>
    } else {
        command = <p>Thanks for adding item</p>
    }

    return (
        <div>

            <h2>This is Cart:{cart.name}</h2>
            {command}
            {cart.length === 0 || <p className='color'> YAY! you are bying</p>}
            {cart.map(tshirt => <h2>{tshirt.name}<button onClick={() => deleteItem(tshirt)}>delete</button> </h2>)}

            {cart.length !== 3 ? <p>added 3 Item </p> : <button>Clear All</button>}
            {cart.length === 5 && <div className='color'>
                <h3>you adder 5 product</h3>
                <p>thank you</p>
            </div>}
        </div >
    );
};

export default Cart;