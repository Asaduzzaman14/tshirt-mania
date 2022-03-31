import React from 'react';

const Cart = ({ cart, deleteItem }) => {
    return (
        <div>

            <h2>This is Cart:{cart.name}</h2>
            {
                cart.map(tshirt => <h2>{tshirt.name}<button onClick={() => deleteItem(tshirt)}>delete</button> </h2>)

            }
            {/* <button onClick={() => deleteItem(cart)}>delete</button> */}
        </div >
    );
};

export default Cart;