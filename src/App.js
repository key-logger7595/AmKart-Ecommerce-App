import React from 'react';
import {data} from './data';
console.log(data.products);
function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a href="/" className="brand">AmKart</a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main>
        <div className="row center">
          {data.products.map((data,index)=>{
            return(
            <div  key={data._id} className="card">
            <a href={`/product/${data._id}`}>
              <img className="medium"
                src="./images/product1.jpeg" alt="product" />
            </a>
            <div className="card-body">
              <a href="product.html">
                <h2>{data.name}</h2>
              </a>
              <div className="rating">
                <span>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </span>
              </div>
              <div className="price">
                ${data.price}
              </div>
            </div>
          </div>)
          })}
          
        </div>
      </main>
      <footer className="row center">
        All rights reserved
      </footer >

    </div>
  );
}

export default App;
