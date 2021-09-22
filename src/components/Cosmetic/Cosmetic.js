import React from 'react';
import { addToDb } from '../Utilities/LocalStorageData';

const Cosmetic = (props) => {
    //console.log(props.cosmetic);

    const handlePurchase = (id) => {
        // set  data in Local stoage
        addToDb(id);
        console.log(id);
    }
    const { name, price, id } = props.cosmetic;
    return (
        <div>
            <h4>Cosmetic Name : {name}</h4>
            <p>Product id : {id}</p>
            <p>Price : {price}</p>

            <button onClick={() => handlePurchase(id)}>BUY NOW</button>
        </div>
    );
};

export default Cosmetic;