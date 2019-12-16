const SelectInput = (props) => (
    <div className="form-group">
        {props.label && 
            <label htmlFor={props.name} className="form-label">{props.label}</label>
        }
        <select
            className="form-control"
            {...props}
        >
            <option value="" disabled selected>{props.placeholder}</option>
            {props.options.map(option => {
                return (
                    <option 
                        key={option} 
                        value={option} 
                        label={option}
                    >
                        {option}
                    </option>
                )
            })}
        </select>
    </div>    
)

export default SelectInput