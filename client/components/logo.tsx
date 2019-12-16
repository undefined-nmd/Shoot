const Logo = ({ isColored = false }) => {
    let path: string
    isColored ? path = './logo-color.svg' : path = './logo.svg'

    return (
        <img src={path} alt="Logo" />
    )
}

export default Logo