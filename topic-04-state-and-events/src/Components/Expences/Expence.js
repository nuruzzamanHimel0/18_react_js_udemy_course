import React, {useState} from 'react'
import ExpenceItem from './ExpenceItem.js'
import Card from '../UI/Card.js'
import ExpenceFilter from './ExpenceFilter.js'
const Expence = (props) => {
    const [filterYear, setFilterYear] = useState('2018');
    // console.log("year = "+filterYear);
    const filterYearChange = (year) => {
        setFilterYear(year);
    }

    return (
        <Card className="hole_expences">
            <ExpenceFilter yearselected={filterYear} onChangeFilter = {filterYearChange} />
            <ExpenceItem 
            title={props.expences[0].title}
            amount={props.expences[0].amount}
            datetime ={props.expences[0].datetime} >
            
            </ExpenceItem>
        
            <ExpenceItem 
            title={props.expences[1].title}
            amount={props.expences[1].amount}
            datetime ={props.expences[1].datetime} >
            
            </ExpenceItem>
        
            <ExpenceItem 
            title={props.expences[2].title}
            amount={props.expences[2].amount}
            datetime ={props.expences[2].datetime} >
        
            </ExpenceItem>
        
            <ExpenceItem 
            title={props.expences[3].title}
            amount={props.expences[3].amount}
            datetime ={props.expences[3].datetime}
            >
            </ExpenceItem>
      </Card>
    );
}

export default Expence;