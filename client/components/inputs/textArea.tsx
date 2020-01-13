interface TextAreaProps {
    name: string,
    label?: string,
    rows: number,
    error?: any
}

const TextArea = ({ name, label, rows, error, ...rest }: TextAreaProps) => (
    <div className="form-group">
        {label && 
            <label htmlFor={name} className="form-label">{label}</label>
        }
        <textarea 
            className={`form-control ${error ? 'is-invalid' : ''}`}
            rows={rows}
            id={name}
            {...rest}
        />
        {error && <div className="invalid-feedback">{error}</div>}
    </div>
) 

export default TextArea;