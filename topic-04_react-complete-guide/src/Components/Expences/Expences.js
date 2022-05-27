import ExpenceList from './ExpenceList.js'
// wrapper component
import Card from '../UI/Card.js'
import "./css/Expence.css"

const Expences = ()=>{
    const expences = [
        { id:1, title:"Car Insurence", datetime :new Date(2021,5, 21), amount: 275.01 },
        { id:2, title:"Book Insurence", datetime :new Date(2021,5, 21), amount: 2735.01 },
        { id:3, title:"pancil Insurence", datetime :new Date(2021,5, 21), amount: 5275.01 },
        { id:4, title:"Plan Insurence", datetime :new Date(2021,5, 21), amount: 5275.01 }
      ];
    return (
        <div className="expence">
            <div>Let us start</div>
            <Card className="expence_item">
                <ExpenceList expences={expences[0]} ></ExpenceList>
                <ExpenceList expences={expences[1]} ></ExpenceList>
                <ExpenceList expences={expences[2]} ></ExpenceList>
                <ExpenceList expences={expences[3]} ></ExpenceList>
            </Card>
        </div>
    );
}

export default Expences;