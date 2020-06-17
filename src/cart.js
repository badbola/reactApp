import React from 'react';
import CartItem from './CartItem';


const Cart = (props)=>{
    

        // const arr = [1,2,3,4,5];
        
       
        const {products} = props;
        return(
            <div className="cart">
                {products.map((product)=>{
                    return <CartItem 
                    product={product} 
                    key={product.id}
                    onIncreaseQuantity = {props.onIncreaseQuantity}
                    onDecreaseQuantity = {props.onDecreaseQuantity}
                    onDelete = {props.onDelete}
                    />
                })}
                
                {/* { arr.map((item)=>{
                    return item;
                })} */}
            </div>
        );
}


export default Cart;