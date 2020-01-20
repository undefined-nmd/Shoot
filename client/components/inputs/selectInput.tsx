interface SelectInputProps {
    label: string,
    name: string,
    placeholder?: string,
    onChange?(): void,
    options: any[],
    error?: any
}

const SelectInput = (props: any) => {
    const { 
        label, 
        name, 
        onChange, 
        placeholder, 
        options,
        error,
        ...rest
    } = props

    return (
        <div className="form-group">
            {label &&
                <label htmlFor={name} className="form-label">{label}</label>
            }
            <select
                onChange={onChange}
                className={`form-control ${error ? 'is-invalid' : ''}`}
                defaultValue={placeholder}
                name={name}
                {...rest}
            >
                <option value={placeholder} disabled>{placeholder}</option>
                {options.map(option => {
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
}

export default SelectInput