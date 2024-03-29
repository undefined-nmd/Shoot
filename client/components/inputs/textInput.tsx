import Icon from "../icon"

const TextInput = (props) => (
    <div className="form-group">
        {props.label && 
            <label htmlFor={name} className="form-label">{props.label}</label>
        }
        <div className={`form-control d-flex ${props.error ? 'is-invalid' : ''}`}>
            {props.icon && 
                <div className="form-control__icon d-flex-center">
                    <Icon name={props.icon} />
                </div>
            }
            <input type="text" {...props} />
        </div>
        {props.error && <div className="invalid-feedback">{props.error}</div>}
    </div>
)

export default TextInput