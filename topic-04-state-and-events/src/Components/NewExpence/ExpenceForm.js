import React, {useState} from 'react'
import './css/ExpenceForm.css'

const ExpenceForm = () => {
    // document.getElementById('expenceForm').addEventListener('click', () => {

    // });
    const [enterTitle,setEnterTitle ] = useState('');
    const [enterPrice,setEnterPrice ] = useState('');
    const [enterDate,setEnterDate ] = useState('');
    const titleChangeHandler = (event) =>{
        setEnterTitle(event.target.value);
    }
    const priceChangeHandler = (event) => {
        setEnterPrice(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setEnterDate(event.target.value);
    }
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