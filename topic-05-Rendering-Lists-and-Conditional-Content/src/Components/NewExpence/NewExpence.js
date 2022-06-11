import React, {useState} from 'react'
import "./css/NewExpence.css"
import ExpenceForm from './ExpenceForm.js'

const NewExpence = (props) => {
    const [expenceFormShow, setExpenceFormShow] = useState(0);

    const saveExpenceDataHandler = (expence) => {
        const expenceData = {
            id: Math.random().toString(),
            ...expence,
           
        };
        setExpenceFormShow(0);
        props.onAddExpence( expenceData );
        // console.log( expenceData );
    }

    const expenceFormShowHandler = (event) => {
        event.preventDefault();
        setExpenceFormShow(1);
    }

    if(parseInt(expenceFormShow) !== 1){
        return (
            <div className="new-exponces">
            <div className="addNewExpences">
                <div className="addNewExpencesInner">
                    <button onClick={expenceFormShowHandler} >Add New Expences</button>
                </div>
            </div>
        </div>
        );
    }

    return (
        <div className="new-exponces">
            <ExpenceForm onChangeExpenceData={saveExpenceDataHandler} />
         
        </div>
    );
}

export default NewExpence;