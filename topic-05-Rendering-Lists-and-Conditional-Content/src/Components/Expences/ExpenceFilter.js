import React from 'react'
import './ExpenceFilter.css'

const ExpenceFilter = (props) => {
    const dropDownFilterYearHandler = (event) => {
        let year = event.target.value;
        props.onChangeFilter(year);
        // console.log(year);
    }

    return (
        <div className="ExpenceFilter">
            <div>
                <p>Select Filter By year {props.yearselected}</p>
            </div>
            <div>
                <select value={props.yearselected} onChange={dropDownFilterYearHandler} >
                    <option value="2022" >2022</option>
                    <option value="2021" >2021</option>
                    <option value="2020" >2020</option>
                    <option value="2019" >2019</option>
                    <option value="2018" >2018</option>
                </select>
            </div>
            
        </div>
    );
}

export default ExpenceFilter;