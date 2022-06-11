
import React from 'react'
import CartBar from './CartBar.js'
import "./Cart.css"

const Cart = (props) => {

    return (
        <div className="cart">
            {
                props.dataPoint.map(
                    (dataPoint) => 
                    <CartBar 
                    key={dataPoint.lebel}

                    value={dataPoint.value}
                    maxValue ={null}
                    label={dataPoint.lebel}
                    />
                )
            }
        </div>
    );
}

export default Cart;