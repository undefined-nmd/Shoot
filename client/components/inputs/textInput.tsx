import Icon from "../icon";

const TextInput = (props) => (
    <div className="form-control">
        {props.icon && 
            <div className="form-control__icon">
                <Icon name={props.icon} />
            </div>
        }
        <input type="text" {...props} />
    </div>
)

export default TextInput