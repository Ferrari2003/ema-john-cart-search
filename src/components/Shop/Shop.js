import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () =>{
        console.log('load product')
        fetch('products.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        console.log('local storage')
        const storedCart =getStoredCart();
       const saveCart =[];
        for(const id in storedCart){
       const addedProduct =products.find(product => product.id ===id)
       if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity= quantity;
              console.log(addedProduct);
              saveCart.push(addedProduct);
       }
        }
        setCart(saveCart);
        // console.log('finished')
    },[products])



    const handleAddToCart = (product) =>{
        console.log(product);
        // do not do this: cart.push(product);
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product=><Product 
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;