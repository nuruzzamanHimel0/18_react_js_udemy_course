import './ExpenceItem.css'

function ExpenceItem(props){

    return (
       <div className='experience-item'>
           <div className='experience-item-date'>
               { props.datetime.toDateString() }
           </div>
           <div className='experience-item-price'>
               <h2> {props.title} </h2>
               <div>${props.amount}</div>
           </div>
       </div>
    );
}

export default ExpenceItem;