interface TextAreaProps {
    name: string,
    label?: string,
    rows: number,
}

const TextArea = (props) => (
    <div className="form-group">
        {props.label && 
            <label htmlFor={props.name} className="form-label">{props.label}</label>
        }
        <textarea 
            className={`form-control ${props.error ? 'is-invalid' : ''}`}
            rows={props}
            id={props.name}
            {...props}
        />
        {props.error && <div className="invalid-feedback">{props.error}</div>}
    </div>
) 

export default TextArea;