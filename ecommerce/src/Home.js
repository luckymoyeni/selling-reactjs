import React from 'react'
import './Home.css';
import Product from './Product';
function Home() {
    return (
        <div className="home">
            <img 
              className="home__image"
              src="images/logo1.png"
               alt="Home" />

               {/* Product id, title, price, rating, image */}
               <div className="home__row">
                 <Product
                   id="1"
                   title="Winter chimes"
                   price={120.95}
                   rating={5}
                   image="images/c1.jpg"
                 />
                 <Product
                   id="1"
                   title="Winter wolve"
                   price={120.95}
                   rating={5}
                   image="images/b31.jpg"
                 />
                 <Product
                   id="12"
                   title="Safari Knowledge"
                   price={225.95}
                   rating={3}
                   image="images/c2.jpg"
                 />
               </div>
               <div className="home__row">
                 <Product
                   id="123"
                   title="The return cage"
                   price={320.95}
                   rating={4}
                   image="images/c3.jpg"
                 />

                 <Product
                   id="1234"
                   title="Bomber prototype"
                   price={722.95}
                   rating={5}
                   image="images/c4.jpg"
                 />
                 <Product
                   id="12345"
                   title="Salute state"
                   price={123.95}
                   rating={5}
                   image="images/cc1.jpg"
                 />
               </div>
               <div className="home__row">
                 <Product
                   id="2"
                   title="Messing with J.Lo"
                   price={134.95}
                   rating={5}
                   image="images/cc2.jpg"
                 />
               </div>
               
        </div>

    )
}

export default Home
