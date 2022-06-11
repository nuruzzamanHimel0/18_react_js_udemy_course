import React from 'react'
import Cart from '../Cart/Cart.js'

const ExpenceChart = (props) => {
    const cartDataPoint= [
        {label:'Jan', value: 0},
        {label:'Fab', value: 0},
        {label:'Mar', value: 0},
        {label:'Aprl', value: 0},
        {label:'May', value: 0},
        {label:'Jun', value: 0},
        {label:'Jul', value: 0},
        {label:'Aug', value: 0},
        {label:'Sep', value: 0},
        {label:'Oct', value: 0},
        {label:'Nov', value: 0},
        {label:'Dec', value: 0},
    ];

    for(let expence of props.expences){
        const expenceMonth = expence.datetime.getMonth();
        cartDataPoint[expenceMonth].value = parseInt(cartDataPoint[expenceMonth].value) + parseInt(expence.amount);
        // console.log(expenceMonth);
        // console.log(expence, expenceMonth);
    }
    console.log(cartDataPoint);

    return (
        <Cart dataPoint={cartDataPoint} />
    );
}

export default ExpenceChart;