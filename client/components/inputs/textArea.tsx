interface TextAreaProps {
    name: String,
    label?: String,
    rows: Number,
}

const TextArea = (props) => (
    <div className="form-group">
        {props.label && 
            <label htmlFor={props.name} className="form-label">{props.label}</label>
        }
        <textarea 
            className="form-control"
            rows={props}
            id={props.name}
            {...props}
        />
    </div>
) 

export default TextArea;