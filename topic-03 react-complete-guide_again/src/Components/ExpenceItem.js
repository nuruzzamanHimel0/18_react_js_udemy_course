import "./style/Expence.css"
import ExpenceDate from './ExpenceDate.js'
import Card from './Card'
const ExpenceItem = (props) => {
    return (
       
        <Card className="expence_items_inner">
        <div className="expence_items">
            <ExpenceDate datetime={props.datetime} ></ExpenceDate>
            <div className="expence_item expence_title">
            <p>{props.title}</p>
            </div>
            <div className=" expence_item expence_price">
            <div className="price">${props.amount}</div>
            </div>
        </div>
        </Card>
      

    );
}

export default ExpenceItem;