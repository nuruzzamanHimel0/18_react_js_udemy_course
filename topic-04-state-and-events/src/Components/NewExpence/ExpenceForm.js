import React from 'react'
import './css/ExpenceForm.css'

const ExpenceForm = () => {
    // document.getElementById('expenceForm').addEventListener('click', () => {

    // });
    const titleChangeHandler = (event) =>{
        
        console.log(event.target.value);
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
                    <input type="number" id="priceForm" />
                </div>
                <div className="form-group">
                    <label>Date</label>
                    <input type="date" id="titleDates" />
                </div>
                <div>
                <button>Submit Experince</button>
                </div>
                
            </form>
           
        </div>
    );
}

export default ExpenceForm;