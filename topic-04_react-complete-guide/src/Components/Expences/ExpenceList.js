import ExpenceDate from './ExpenceDate.js'
// wrapper component
import Card from '../UI/Card.js'
import "./css/ExpenceList.css"
const ExpenceList = (props)=>{

    const clickHandler = ()=>{
        console.log('click for title');
    };
  
    return (
       
        <Card className="expence_list">
            <ExpenceDate datetime={props.expences.datetime} />
            <div className="expence_name_price">
                <div className="expence_name">
                <p>{props.expences.title}</p>
                </div>
                <div className="expence_price">
                    <p>${props.expences.amount}</p>
                    <button onClick={clickHandler} >Click Title</button>
                </div>
            </div>
        </Card>
       
    );
}

export default ExpenceList;