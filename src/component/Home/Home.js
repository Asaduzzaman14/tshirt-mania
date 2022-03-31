import React from 'react';
import useTshirt from '../../hooks/useTshirt';
import './Home.css'


const Home = () => {

    const [tshirts, setTshirs] = useTshirt()

    return (
        <div className='home-container'>
            <div className="product-contianer">
                <h2>total tsirt {tshirts.length}</h2>
            </div>
            <div className="cartContainer">
                <h2>This is cart </h2>
            </div>
        </div>
    );
};

export default Home;