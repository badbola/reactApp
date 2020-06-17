import React from 'react';
import Cart from './cart';
import Navbar from './navbar';

class App extends React.Component{
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
  getCartCount = () => {
    const {products} = this.state;
    let count =0;
    products.forEach((product) => {
      count += product.Qty;
    })
    return count;
  }
  getTotal = () =>{
    const {products} = this.state;
    let total = 0;
    products.map((product) =>{
      total = total + product.Qty*product.price;
    });
    return total;
  }
  render(){
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar count = {this.getCartCount()}/>
        <Cart 
        products ={products}
        onIncreaseQuantity = {this.handleIncreaseQuantity}
        onDecreaseQuantity = {this.handleDecreaseQuantity}
        onDelete = {this.handleDelete}
        />
        <div>Total: {this.getTotal()}</div>
      </div>
    );
  }
}

export default App;
