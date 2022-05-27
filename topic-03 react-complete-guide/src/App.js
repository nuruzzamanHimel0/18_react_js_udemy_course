

import Expence from './Components/Expence.js'

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

      <Expence expences={expences}></Expence>
     
   
    
    </div>
  );
}

export default App;

