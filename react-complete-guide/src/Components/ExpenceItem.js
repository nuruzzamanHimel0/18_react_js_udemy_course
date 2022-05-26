import ExpenceDate from './ExpenceDate.js'
import './ExpenceItem.css'

function ExpenceItem(props){

    return (
       <div className='experience-item'>
           <ExpenceDate datetime={props.datetime} />
           
           <div className='experience-item-price'>
               <h2> {props.title} </h2>
               <div>${props.amount}</div>
           </div>
       </div>
    );
}

export default ExpenceItem;