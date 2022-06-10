


import React from 'react'
import Expence from './Components/Expences/Expence.js'
import NewExpence from '../src/Components/NewExpence/NewExpence.js'
const App = ()=>{
  const expences = [
    { id:1, title:"Car Insurence", datetime :new Date(2021,5, 21), amount: 275.01 },
    { id:2, title:"Book Insurence", datetime :new Date(2021,5, 21), amount: 2735.01 },
    { id:3, title:"pancil Insurence", datetime :new Date(2021,5, 21), amount: 5275.01 },
    { id:4, title:"Plan Insurence", datetime :new Date(2021,5, 21), amount: 5275.01 }
  ];

  const addExpenceHandler = (expence) =>{
    console.log('App . js');
    expences.unshift({
      ...expence
    });
    console.log( expences );
  }
 
  return (
    <div>
     <NewExpence onAddExpence = {addExpenceHandler} />

      <Expence expences={expences}></Expence>
    </div>
  );
}

export default App;

