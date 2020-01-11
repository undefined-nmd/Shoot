interface ButtonProps {
    label: string,
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<ButtonProps> = (props) => (
    <button type="submit" onClick={props.onClick} className="btn btn--primary" {...props}>
        {props.label}
    </button>
)

export default Button