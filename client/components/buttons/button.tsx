interface ButtonProps {
    label: string
}

const Button: React.FC<ButtonProps> = (props) => (
    <button type="submit" className="btn btn--primary" {...props}>
        {props.label}
    </button>
)

export default Button