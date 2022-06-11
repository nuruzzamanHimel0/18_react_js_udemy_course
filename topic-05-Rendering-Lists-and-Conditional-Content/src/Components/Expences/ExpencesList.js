
import React from 'react';
import ExpenceItem from './ExpenceItem.js'
import "./ExpencesList.css"

const ExpencesList = (props) => {

    if(props.items.length === 0){
        return (
            <h1>No expences Found</h1>
        );
    }

    return (
        <ul className="expenceList_ul">
            {
                 props.items.map(
                    (expence) => 
                    <ExpenceItem 
                    key={expence.id}
    
                    amount={expence.amount}
                    title={expence.title}
                    datetime ={expence.datetime} />
                )
            }
        </ul>
    );

}

export default ExpencesList;