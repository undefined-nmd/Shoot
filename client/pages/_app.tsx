import App from 'next/app'
import ThemeContext from '../components/context/ThemeContext';

interface CustomAppProps {
}

interface CustomAppState {
    theme: boolean
}

class CustomApp extends App<CustomAppProps, {}, CustomAppState> {
    constructor(props) {
        super(props)
        this.state = {
            theme: true, 
        }
    }
    render() {
        const { Component, pageProps } = this.props
        return (
            <ThemeContext.Provider value={{ theme: this.state.theme }}>
                <Component {...pageProps} />
            </ThemeContext.Provider>
        )
    }
}

export default CustomApp