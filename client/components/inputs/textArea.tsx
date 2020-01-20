interface TextAreaProps {
    name?: string,
    label?: string,
    rows?: number,
    error?: any,
    onChange?(): void
}

const TextArea = ({ name, label, rows, error, onChange }: any) => (
    <div className="form-group">
        {label && 
            <label htmlFor={name} className="form-label">{label}</label>
        }
        <textarea 
            className={`form-control ${error ? 'is-invalid' : ''}`}
            rows={rows}
            id={name}
            name={name}
            onChange={onChange}
        />
        {error && <div className="invalid-feedback">{error}</div>}
    </div>
) 

export default TextArea;