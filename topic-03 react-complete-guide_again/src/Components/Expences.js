

import ExpenceItem from './ExpenceItem.js'
import Card from './Card'
const Expences = (props)=>{
    
   return (
    <Card className="expence_container">
       
        <ExpenceItem 
        title={props.expences[0].title}
        datetime={props.expences[0].datetime}
        amount={props.expences[0].amount}
        />
        <ExpenceItem 
        title={props.expences[1].title}
        datetime={props.expences[1].datetime}
        amount={props.expences[1].amount}
        />
        <ExpenceItem 
        title={props.expences[2].title}
        datetime={props.expences[2].datetime}
        amount={props.expences[2].amount}
        />
        <ExpenceItem 
        title={props.expences[3].title}
        datetime={props.expences[3].datetime}
        amount={props.expences[3].amount}
        />
   </Card>
   );
}

export default Expences;