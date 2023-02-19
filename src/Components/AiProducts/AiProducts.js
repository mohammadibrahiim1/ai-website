import React from 'react';
import  { useContext } from 'react';

import { ProductContext } from '../../Context/Context';
import AiProduct from '../AiProduct/AiProduct';
import './AiProducts.css'

const AiProducts = () => {
    const { aiData} = useContext(ProductContext);
    console.log(aiData);

    return (
        <div className='card-container'>
            {
                aiData.map(  ai => <AiProduct ai={ai} id={ ai.index}></AiProduct> )
            }
        </div>
    );
};

export default AiProducts;