const RadioInput = (props) => {
    return (
        <div className="radio-control">
            <label htmlFor={props.label}>{props.label}</label>
            <input id={props.label} type="radio" />
        </div>
    )
}

export default RadioInput