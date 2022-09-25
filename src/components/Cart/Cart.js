import React from 'react';
import "./Cart.css";
const Cart = (props) => {

       const {cart}  =props;

             

          let total = 0;
          let shipping =0;
          for(const product of cart){
            total = total + product.price;
            shipping =shipping + product.shipping;
          }
         const tax = (total * 0.1).toFixed(2);
             


    return (
        <div className='cart'>
             <h3>Order Summary</h3>
                <h4>Selected Items: {cart.length}</h4>
                <p>Total price: ${total}</p>
                <p>Total Shipping: ${shipping} </p>
                <p>Tax: {tax}</p>
                <h5>Grand Total: </h5>
        </div>
    );
};

export default Cart;