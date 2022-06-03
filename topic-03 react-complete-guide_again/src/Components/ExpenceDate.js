

const ExpenceDate = (props) => {
    const month = props.datetime.toLocaleString('en-US',{month:'long'});
    const day = props.datetime.toLocaleString('en-US',{day:'2-digit'});
    const year = props.datetime.getFullYear();
    return (
        <div className="expence_item expence_datetime">
        <div className="date_time year">{year}</div>
        <div className="date_time month">{month}</div>
        <div className="date_time day">{day}</div>
        </div>
    );
}

export default ExpenceDate;