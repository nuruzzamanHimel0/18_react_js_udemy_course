import React, { useState } from 'react'
import ExpenceDate from './ExpenceDate.js'
import Card from '../UI/Card.js'
import './ExpenceItem.css'

const ExpenceItem = (props) =>{
    const [title, setTitle] = useState ( props.title);  

    // console.log( 'Expence items evaluated by react' );
    
    const clickHandler = () => {
        setTitle ( 'Update title in here' );
    }
    // console.log(title);
    return (
       <Card className='experience-item'>
           <ExpenceDate datetime={props.datetime} />
           
           <div className='experience-item-price'>
               <h2> {title} </h2>
               <div>${props.amount}</div>
               
           </div>
           <button  onClick={clickHandler} >Change Title</button>
       </Card>
    );
}

export default ExpenceItem;