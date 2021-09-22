import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
// import { add, multiply } from '../Storage/Storage';

const Cosmetics = () => {

    const [cosmetics, setCosmetics] = useState([]);

    useEffect(() => {
        fetch('./cosmetics.json')
            .then(res => res.json())
            .then(data => setCosmetics(data))
    }, [])

    // const firstValue = 657;
    // const secondValue = 756;

    // const sum = add(firstValue, secondValue);
    // const mul = multiply(firstValue, secondValue)
    return (
        <div>
            {/* <h2> Multiply Result : {mul} </h2>
            <h2> Sumation Result : {sum} </h2> */}

            {
                cosmetics.map(data => <Cosmetic
                    key={data.id}
                    cosmetic={data}>

                </Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;