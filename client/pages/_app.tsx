import App, { AppContext } from 'next/app'
import ThemeContext from '../components/context/ThemeContext'
import AuthContext from '../components/context/AuthContext'

const CustomApp = ({ Component, pageProps }) => {
    return (
        <Component {...pageProps} />
    )
}

CustomApp.getInitialProps = async ({ Component, ctx }) => {
    let pageProps = {}

    pageProps = await Component.getInitialProps(ctx)

    const data = {
        name: "fldksfkldsf"
    }

    return { ...pageProps, data }
}

export default CustomApp