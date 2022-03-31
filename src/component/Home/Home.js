import React, { PureComponent, useState } from 'react';
import useTshirt from '../../hooks/useTshirt';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'


const Home = () => {

    const [tshirts, setTshirs] = useTshirt()
    const [cart, setCart] = useState([])

    const handelAddToCart = (product) => {
        const exist = cart.find(tshirt => tshirt._id === product._id)
        if (!exist) {
            let newcart = [...cart, product]
            setCart(newcart)
        } else {
            alert('alrady added')
        }

    }
    const deleteItem = (tshirt) => {
        const rest = cart.filter(pd => pd._id !== tshirt._id)
        setCart(rest)

    }
    return (
        <div className='home-container'>

            <div className="product-contianer">
                {
                    tshirts.map(tshirt => <Tshirt
                        tshirt={tshirt}
                        key={tshirt._id}
                        handelAddToCart={handelAddToCart}
                    ></Tshirt>)
                }
            </div>

            <div className="cartContainer">

                {/* This is Cart:
                {
                    cart.map(cart => <Cart
                        cart={cart}
                        key={cart._id}
                    ></Cart>)
                } */}
                <Cart
                    cart={cart}
                    deleteItem={deleteItem}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;