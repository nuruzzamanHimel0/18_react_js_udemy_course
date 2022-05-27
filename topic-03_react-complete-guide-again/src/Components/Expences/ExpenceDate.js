const ExpenceDate = (props) =>{
    const month = props.datetime.toLocaleString('en-US',{month:'long'});
    const day = props.datetime.toLocaleString('en-US',{day:'2-digit'});
    const year = props.datetime.getFullYear();
    return (
        <div className="expence_date">
            <div className="expence_date_inner">
            <h3>{year}</h3>
            <h4>{month}</h4>
            <h5>{day}</h5>
            </div>
        </div>
    );
}

export default ExpenceDate;