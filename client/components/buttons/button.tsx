const Button = (props) => (
    <button type="submit" className="btn btn--primary" {...props}>
        {props.label}
    </button>
)

export default Button