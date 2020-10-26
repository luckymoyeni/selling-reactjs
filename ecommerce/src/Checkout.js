import React from 'react'
import {useStateValue} from "./StateProvider";
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct.js';
import Subtotal from './Subtotal';
import CurrencyFormat from "react-currency-format";
function Checkout() {
    const [{ basket }] =  useStateValue();

    return (
        <div className="checkout">
          <div className="checkout__left">
            
            <img className="checkout__ad"
             src="images/logo1.png" 
             alt=""/>

             {basket?.length === 0 ? (
                <div>
                  <h2>Your Shopping basket is empty</h2>
                  <p>
                      You have no items in the basket. To buy one click
                      "Add to basket" next to the item
                  </p>
                </div>
            ) : ( 
                <div>
                  <h2 className="checkout__title">Your Shopping basket</h2>

                  {/* list of all the products */}
                 {basket.map(item => (
                   <CheckoutProduct 
                     id={item.id}
                     title={item.title}
                     image={item.image}
                     price={item.price}
                     rating={item.rating}
                   />
                 ))}
                  
                </div>
             )}
             </div>
             {
               basket.length > 0 && (
                 <div className="checkout__right">
                   {/* <h1>sub total</h1> */}
                   <Subtotal />
                 </div>
               )
             }
        </div>
        
    )
}

export default Checkout
