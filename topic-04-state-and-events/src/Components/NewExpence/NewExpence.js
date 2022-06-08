import React from 'react'
import "./css/NewExpence.css"
import ExpenceForm from './ExpenceForm.js'

const NewExpence = (props) => {

    const saveExpenceDataHandler = (expence) => {
        const expenceData = {
            id: Math.random().toString(),
            ...expence,
           
        };
        props.onAddExpence( expenceData );
        // console.log( expenceData );
    }

    return (
        <div className="new-exponces">
            <ExpenceForm onChangeExpenceData={saveExpenceDataHandler} />
         
        </div>
    );
}

export default NewExpence;