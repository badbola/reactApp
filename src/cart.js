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
    handleIncreaseQuantity = (product) => {
        //console.log('Quantity Increased of',product);
        const {products} = this.state;
        const index = products.indexOf(product);
        products[index].Qty += 1;
        this.setState({
            products: products
        })
    }
    handleDecreaseQuantity = (product) => {
        const {products} = this.state;
        const index = products.indexOf(product);
        if(products[index].Qty > 1 ){
            products[index].Qty -= 1;
            this.setState({
                products: products
            })
        }
        
    }
    handleDelete = (id) => {
        const {products} =this.state;
        const items = products.filter((item)=>item.id !== (id));
        this.setState({
            products: items
        })
    }
    render(){
        // const arr = [1,2,3,4,5];
        
       
        const {products} = this.state;
        return(
            <div className="cart">
                {products.map((product)=>{
                    return <CartItem 
                    product={product} 
                    key={product.id}
                    onIncreaseQuantity = {this.handleIncreaseQuantity}
                    onDecreaseQuantity = {this.handleDecreaseQuantity}
                    onDelete = {this.handleDelete}
                    />
                })}
                
                {/* { arr.map((item)=>{
                    return item;
                })} */}
            </div>
        );
    }
}


export default Cart;