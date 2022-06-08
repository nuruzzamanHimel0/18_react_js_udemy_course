import React, {useState} from 'react'
import './css/ExpenceForm.css'

const ExpenceForm = (props) => {
    // multi state process
    // const [enterTitle,setEnterTitle ] = useState('');
    // const [enterPrice,setEnterPrice ] = useState('');
    // const [enterDate,setEnterDate ] = useState('');

    // three state in one state process (dis-structure)
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
    // console.log(userInput);
    const formSubmitHandler = (event) =>{
        event.preventDefault();
        const expenceData = {
            title : userInput.enterTitle,
            price : userInput.enterPrice,
            date : new Date(userInput.enterDate),
        }
        setUserInput({
            enterTitle : '',
            enterPrice : '',
            enterDate : '',
        });
        props.onChangeExpenceData( expenceData );
        // console.log(expenceData);
   
    }
    return (
        <div className="expence_form">
            <form onSubmit={formSubmitHandler}>
                <div className="form-group">
                    <label >Title</label>
                    <input type="text" id="titleForm" 
                    value={userInput.enterTitle}
                    onChange={titleChangeHandler} />
                </div>
                <div className="form-group">
                    <label>Amount</label>
                    <input type="number" id="priceForm" 
                    value={userInput.enterPrice}
                    onChange={priceChangeHandler} />
                </div>
                <div className="form-group">
                    <label>Date</label>
                    <input type="date" id="titleDates" 
                    value={userInput.enterDate}
                    onChange={dateChangeHandler} />
                </div>
                <div>
                <button>Submit Experince</button>
                </div>
                
            </form>
           
        </div>
    );
}

export default ExpenceForm;