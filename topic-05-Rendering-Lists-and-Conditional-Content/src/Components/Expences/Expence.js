import React, {useState} from 'react'
import ExpencesList from './ExpencesList.js'
import Card from '../UI/Card.js'
import ExpenceFilter from './ExpenceFilter.js'
const Expence = (props) => {
    const [filterYear, setFilterYear] = useState('all');
    console.log("year = "+filterYear);
    const filterYearChange = (year) => {
        setFilterYear(year);
    }
    var filterExpences = "";
    if(filterYear === 'all'){
         filterExpences = props.expences;
    }else{
         filterExpences = props.expences.filter( (expence) => {
            return expence.datetime.getFullYear().toString() === filterYear;
        } );
    }
   
    
    //  // 005 Outputting Conditional Content
    // let expencesContent = <p> No expences found </p>;
    // if(props.items.length > 0){
    //     expencesContent =  props.items.map(
    //         (expence) => 
    //         <ExpenceItem 
    //         key={expence.id}

    //         amount={expence.amount}
    //         title={expence.title}
    //         datetime ={expence.datetime} />
    //     );
    // }
    // console.log(filterExpences, filterYear);
    return (
        <Card className="hole_expences">
            <ExpenceFilter yearselected={filterYear} onChangeFilter = {filterYearChange} />
            <ExpencesList items={filterExpences} />
           
            {/* // third process ...  */}
            {/* {expencesContent} */}

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