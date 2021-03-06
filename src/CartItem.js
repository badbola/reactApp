import React from 'react';

const CartItem =(props)=> {
    
    // increaseQty=()=>{
    //     //set form 1
    //     // console.log(++this.state.Qty);
    //     // this.setState({
    //     //     Qty: this.state.Qty+1
    //     // });
    //     //set form 2
    //     this.setState((prevState) => {
    //        return{
    //            Qty: prevState.Qty+1
    //        } 
    //     });
    // }
    // decreaseQty=()=>{
    //     this.setState((prevState) =>{
    //         if(prevState.Qty>1){
    //             return{
    //                 Qty: prevState.Qty-1
    //             }
    //         }
    //     });
    // }
    
       // console.log(this.props);
        const { price,title, Qty} = props.product;
        const {product, onIncreaseQuantity , onDecreaseQuantity, onDelete} = props;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize: 25}}>{title}</div>
                    <div style={{color: '#777'}}>Rs {price}</div>
                    <div  style={{color: '#777'}}>Qty: {Qty}</div>
                    <div className="cart-item-actions">
                        {/*Buttons*/}
                        <img alt="minus" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/svg/659/659892.svg"
                        onClick = {()=>onDecreaseQuantity(product)}
                        />
                        <img alt="plus"
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/svg/992/992651.svg"
                        onClick={()=>onIncreaseQuantity(product)}
                        />
                        <img alt="delete" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/svg/1214/1214428.svg"
                        onClick={()=>onDelete(product.id)}
                        />
                    </div>
                </div>
            </div>
        );
}

const styles = {
    image: {
        height: 110,
        width: 100,
        borderRadius: 4
    }
}
export default CartItem;