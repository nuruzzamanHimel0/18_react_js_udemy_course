


import React, {useState} from 'react'
import Expence from './Components/Expences/Expence.js'
import NewExpence from '../src/Components/NewExpence/NewExpence.js'

const DUMMEY_EXPENCES = [
  { id:1, title:"Car Insurence", datetime :new Date(2021,5, 21), amount: 275.01 },
  { id:2, title:"Book Insurence", datetime :new Date(2021,5, 21), amount: 2735.01 },
  { id:3, title:"pancil Insurence", datetime :new Date(2021,5, 21), amount: 5275.01 },
  { id:4, title:"Plan Insurence", datetime :new Date(2021,5, 21), amount: 5275.01 },
  { id:5, title:"Cardd Insurence", datetime :new Date(2022,5, 21), amount: 275.01 },
  { id:5, title:"Care Insurence", datetime :new Date(2018,5, 21), amount: 275.01 },
  { id:5, title:"Car34343 Insurence", datetime :new Date(2019,5, 21), amount: 275.01 },
];

const App = ()=>{

  const[expences, setExpences] = useState(DUMMEY_EXPENCES);

  const addExpenceHandler = (expenceData) =>{
    console.log('App . js');
    // not good this way
    // setExpences([
    //   expenceData,
    //   ...expences
    // ]);

    setExpences((prevState)=>{
      return [
        expenceData,
        ...prevState
      ]
    });
    // console.log(expenceData);
  }
  console.log(expences);
 
  return (
    <div>
     <NewExpence onAddExpence = {addExpenceHandler} />

      <Expence expences={expences}></Expence>
    </div>
  );
}

export default App;

