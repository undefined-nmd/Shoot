interface RadioInputProps {
    label: string
}

const RadioInput = ({ label }: RadioInputProps) => {
    return (
        <div className="radio-control">
            <label htmlFor={label}>{label}</label>
            <input id={label} type="radio" />
        </div>
    )
}

export default RadioInput