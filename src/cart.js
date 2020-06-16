import React from 'react';
import CartItem from './CartItem';


class Cart extends React.Component{
    constructor() {
        super();
        this.state = {
            
            products: [
             {
                 price: 999,
                 title: 'Phone',
                 Qty: 1,
                 img: '',
                 id: 1
             },
             {
                 price: 99,
                 title: 'Watch',
                 Qty: 1,
                 img: '',
                 id: 2
             },
             {
                 price: 9999,
                 title: 'Laptop',
                 Qty: 1,
                 img: '',
                 id: 3
             }
            ]
         }
        //this.increaseQty = this.increaseQty.bind(this);
    }
    render(){
        // const arr = [1,2,3,4,5];
        
       
        const {products} = this.state;
        return(
            <div className="cart">
                {products.map((product)=>{
                    return <CartItem product={product} key={product.id}/>
                })}
                
                {/* { arr.map((item)=>{
                    return item;
                })} */}
            </div>
        );
    }
}


export default Cart;