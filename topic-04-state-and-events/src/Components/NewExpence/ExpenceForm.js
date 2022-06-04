import React from 'react'
import './css/ExpenceForm.css'

const ExpenceForm = () => {
    return (
        <div className="expence_form">
            <form>
                <div className="form-group">
                    <label for="titleForm">Title</label>
                    <input type="text" id="titleForm" />
                </div>
                <div className="form-group">
                    <label for="priceForm">Amount</label>
                    <input type="number" id="priceForm" />
                </div>
                <div className="form-group">
                    <label for="titleDates">Date</label>
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