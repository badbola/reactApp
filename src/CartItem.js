import React from 'react';

class CartItem extends React.Component {
    constructor() {
        super();
        this.state = {
            price: 999,
            title: 'Phone',
            Qty: 1,
            img: ''
        }
        //this.increaseQty = this.increaseQty.bind(this);
    }
    increaseQty=()=>{
        console.log(++this.state.Qty);
    }
    render() {
        const { price,title, Qty} = this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize: 25}}>{title}</div>
                    <div style={{color: '#777'}}>Rs {price}</div>
                    <div  style={{color: '#777'}}>{Qty}</div>
                    <div className="cart-item-actions">
                        {/*Buttons*/}
                        <img alt="plus"
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/svg/992/992651.svg"
                        onClick={this.increaseQty}/>
                        <img alt="minus" className="action-icons" src="https://image.flaticon.com/icons/svg/659/659892.svg"/>
                        <img alt="delete" className="action-icons" src="https://image.flaticon.com/icons/svg/1214/1214428.svg"/>
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 100,
        borderRadius: 4
    }
}
export default CartItem;