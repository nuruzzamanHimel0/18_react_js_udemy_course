
import React from 'react'
import CartBar from './CartBar.js'
import "./Cart.css"

const Cart = (props) => {

    const dataPointValue = props.dataPoint.map( dataPoint => dataPoint.value  );
    const totalMaximum = Math.max(...dataPointValue);
    // console.log(dataPointValue, totalMaximum);

    return (
        <div className="cart">
            {
                props.dataPoint.map(
                    (data) => 
                    <CartBar 
                    key={data.label}

                    value={data.value}

                    maxValue = {totalMaximum}

                    label = {data.label}
                    />
                )
            }
        </div>
    );
}

export default Cart;