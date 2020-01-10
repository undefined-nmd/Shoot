const SelectInput = (props) => (
    <div className="form-group">
        {props.label &&
            <label htmlFor={props.name} className="form-label">{props.label}</label>
        }
        <select
            onChange={props.onChange}
            className="form-control"
            defaultValue={props.placeholder}
            {...props}
        >
            <option value={props.placeholder} disabled>{props.placeholder}</option>
            {props.options.map(option => {
                return (
                    <option
                        key={option._id}
                        value={option._id}
                        label={option.name}
                    >
                        {option.name}
                    </option>
                )
            })}
        </select>
    </div>
)

export default SelectInput