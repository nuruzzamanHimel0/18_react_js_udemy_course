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
            {
                props.expences.map(
                    expence => 
                    <ExpenceItem 
                   
                    amount={expence.amount}
                    title={expence.title}
                    datetime ={expence.datetime} />
                )
            }
          
      </Card>
    );
}

export default Expence;