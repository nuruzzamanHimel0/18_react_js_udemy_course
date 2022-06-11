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

    const filterExpences = props.expences.filter( (expence) => {
        return expence.datetime.getFullYear().toString() === filterYear;
    } );
    // 005 Outputting Conditional Content
    let expencesContent = <p> No expences found </p>;
    if(filterExpences.length > 0){
        expencesContent =  filterExpences.map(
            (expence) => 
            <ExpenceItem 
            key={expence.id}

            amount={expence.amount}
            title={expence.title}
            datetime ={expence.datetime} />
        );
    }
    console.log(filterExpences, filterYear);
    return (
        <Card className="hole_expences">
            <ExpenceFilter yearselected={filterYear} onChangeFilter = {filterYearChange} />
            {/* // third process ...  */}
            {expencesContent}


            {/* // secound process... */}
            {/* {filterExpences.length === 0 && <p> No expences found </p> }
            {
                filterExpences.length > 0 &&

                filterExpences.map(
                    (expence) => 
                    <ExpenceItem 
                    key={expence.id}

                    amount={expence.amount}
                    title={expence.title}
                    datetime ={expence.datetime} />
                )
                
            } */}
            {/* // first process.... */}
            {/* {
                filterExpences.length > 0 ? ' No expences found ':

                filterExpences.map(
                    (expence) => 
                    <ExpenceItem 
                    key={expence.id}

                    amount={expence.amount}
                    title={expence.title}
                    datetime ={expence.datetime} />
                )
                
            } */}
            {/* // {
            //     props.expences.map(
            //         (expence) => 
            //         <ExpenceItem 
            //         key={expence.id}

            //         amount={expence.amount}
            //         title={expence.title}
            //         datetime ={expence.datetime} />
            //     )
            // } */}
          
      </Card>
    );
}

export default Expence;