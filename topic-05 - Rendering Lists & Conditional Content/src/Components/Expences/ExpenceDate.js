
import "./ExpenceDate.css"

const ExpenceDate = (props) =>{
    const month = props.datetime.toLocaleString('en-US',{month:'long'});
    const day = props.datetime.toLocaleString('en-US',{day:'2-digit'});
    const year = props.datetime.getFullYear();

    return (
    <div className='experience-item-date'>
        <div className="expance_date_inner">
            <div>{month}</div>
            <div>{year}</div>
            <div>{day}</div>
        </div>
     </div>
    );
}

export default ExpenceDate;