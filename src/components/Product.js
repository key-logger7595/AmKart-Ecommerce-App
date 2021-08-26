import React from 'react'
import Rating from './Rating'

const Product = ({data}) => {
    console.log(data);
    return (
        <div  key={data._id} className="card">
        <a href={`/product/${data._id}`}>
          <img className="medium"
            src="./images/product1.jpeg" alt="product" />
        </a>
        <div className="card-body">
          <a href="product.html">
            <h2>{data.name}</h2>
          </a>
          <Rating numReview={data.numReviews} rating={data.rating}/>
          <div className="price">
            ${data.price}
          </div>
        </div>
      </div>
    )
}

export default Product
