
import ExpenceItem from './Components/ExpenceItem.js'

function App(){
  const expences = [
    { id:1, title:"Car Insurence", datetime :new Date(2021,5, 21), amount: 275.01 },
    { id:2, title:"Book Insurence", datetime :new Date(2021,5, 21), amount: 2735.01 },
    { id:3, title:"pancil Insurence", datetime :new Date(2021,5, 21), amount: 5275.01 },
    { id:4, title:"Plan Insurence", datetime :new Date(2021,5, 21), amount: 5275.01 }
  ];
  return (
    <div>
      <h1> Let us start</h1>

      <ExpenceItem 
      title={expences[0].title}
      amount={expences[0].amount}
      datetime ={expences[0].datetime} >
      
      </ExpenceItem>
   
      <ExpenceItem 
      title={expences[1].title}
      amount={expences[1].amount}
      datetime ={expences[1].datetime} >
      
      </ExpenceItem>
   
      <ExpenceItem 
      title={expences[2].title}
      amount={expences[2].amount}
      datetime ={expences[2].datetime} >
     
      </ExpenceItem>
   
      <ExpenceItem 
      title={expences[3].title}
      amount={expences[3].amount}
      datetime ={expences[3].datetime}
      >
      
      </ExpenceItem>
   
    
    </div>
  );
}

export default App;

