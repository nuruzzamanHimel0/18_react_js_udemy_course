import React from 'react'
import "./CartBar.css"

const CartBar = (props) => {
    // console.log(props.label, props.value);
    let barFillHeight = "0%";

    if(props.maxValue > 0){
        barFillHeight = Math.round( (props.value/props.maxValue)*100 ) + '%';
    }

    return (
        <div className="cart-bar">
            <div className="cart-bar-inner">
                <div className="cart-bar-fill"
                    style={ { height:barFillHeight } }
                ></div>
            
            </div>
            <div className="cart-bar-label">{props.label}</div>
        </div>
    );
}

export default CartBar;