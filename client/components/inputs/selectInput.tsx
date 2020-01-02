const SelectInput = (props) => (
    <div className="form-group">
        {props.label && 
            <label htmlFor={props.name} className="form-label">{props.label}</label>
        }
        <select
            className="form-control"
            defaultValue={props.placeholder}
            {...props}
        >
            <option value={props.placeholder} disabled>{props.placeholder}</option>
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