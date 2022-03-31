import React, { createContext, useState } from 'react';
import Farher from '../Farher/Farher';
import Mother from '../Mother/Mother'
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'


export let ringContext = createContext('ring')

const Grandpa = () => {
    const [house, setHouse] = useState(1)

    const addMoreHome = () => {
        setHouse(house + 1)
    }
    const ornament = 'daimond ring'

    return (
        <ringContext.Provider value='choclet'>

            <div>
                <h2>grandpa</h2>
                <small>{house} House <button onClick={addMoreHome}>Add more</button></small>
                <div className='grandpa'>
                    <Farher house={house} ornament={ornament}></Farher>
                    <Mother house={house}></Mother>
                    <Uncle house={house}></Uncle>
                </div>
            </div>

        </ringContext.Provider>


    );
};

export default Grandpa;