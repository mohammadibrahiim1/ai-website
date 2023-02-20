import React from 'react';
import { Link } from 'react-router-dom';
// import { ProductContext } from '../../Context/Context';
import './AiProduct.css'

const AiProduct = ({ai,}) => {
  // const { aiData} = useContext(ProductContext);
  // console.log(aiData);
    return (
        <div>


  <div class="card mt-5" style={{width:"23rem"}}>
  <img src={ai.picture} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{ai.name}</h5>
    <p class="card-text">{ai.about}</p>
    <Link  href="#" class="btn btn-primary">Go somewhere</Link>
  </div>
</div>
        </div>
    );
};

export default AiProduct;