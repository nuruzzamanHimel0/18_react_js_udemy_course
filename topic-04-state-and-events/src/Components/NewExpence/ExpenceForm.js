import React, {useState} from 'react'
import './css/ExpenceForm.css'

const ExpenceForm = () => {
    // multi state process
    // const [enterTitle,setEnterTitle ] = useState('');
    // const [enterPrice,setEnterPrice ] = useState('');
    // const [enterDate,setEnterDate ] = useState('');

    // three state in one state process
    const [userInput, setUserInput]  = useState({
        enterTitle : '',
        enterPrice : '',
        enterDate : '',
    });

    const titleChangeHandler = (event) =>{
        // setUserInput({
        //     ...userInput,
        //     enterTitle: event.target.value
        // });
        setUserInput((prevState) =>{
            return {
                ...prevState,
                enterTitle: event.target.value
            }
        });
       
        // setEnterTitle(event.target.value);
    }
   
    const priceChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     enterPrice: event.target.value
        // });
        setUserInput((prevState) =>{
            return {
                ...prevState,
                enterPrice: event.target.value
            }
        });
        // setEnterPrice(event.target.value);
    }
    const dateChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     enterDate: event.target.value
        // });
        setUserInput((prevState) =>{
            return {
                ...prevState,
                enterDate: event.target.value
            }
        });
        // setEnterDate(event.target.value);
    }
    console.log(userInput);
    return (
        <div className="expence_form">
            <form>
                <div className="form-group">
                    <label >Title</label>
                    <input type="text" id="titleForm" onChange={titleChangeHandler} />
                </div>
                <div className="form-group">
                    <label>Amount</label>
                    <input type="number" id="priceForm" onChange={priceChangeHandler} />
                </div>
                <div className="form-group">
                    <label>Date</label>
                    <input type="date" id="titleDates" onChange={dateChangeHandler} />
                </div>
                <div>
                <button>Submit Experince</button>
                </div>
                
            </form>
           
        </div>
    );
}

export default ExpenceForm;