import React from 'react'
import "./css/NewExpence.css"
import ExpenceForm from './ExpenceForm.js'

const NewExpence = (props) => {

    const saveExpenceDataHandler = (enterExpenceData) => {
        const expenceData = {
            ...enterExpenceData,
            id:Math.random().toString()
        };  
        props.onAddExpence(expenceData);
    //   console.log(expenceData);
    };
    return (
        <div className="new-exponces">
            <ExpenceForm onChangeExpenceData={saveExpenceDataHandler} />
        </div>
    );
}

export default NewExpence;