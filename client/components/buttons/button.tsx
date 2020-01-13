import * as React from 'react'

interface ButtonProps {
    label: string,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ({ label, onClick, ...props }: ButtonProps) => (
    <button type="submit" onClick={onClick} className="btn btn--primary" {...props}>
        {label}
    </button>
)

export default Button