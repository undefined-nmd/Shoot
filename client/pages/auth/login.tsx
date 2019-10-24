import AuthLayout from '../../layouts/auth'
import TextInput from '../../components/inputs/textInput';

import '../../sass/main.scss'

const LoginPage = () => (
    <section className="d-flex-center">
        <form className="auth__form">
            <TextInput placeholder="Email" />
            <TextInput placeholder="Password" />
        </form>
    </section>
)

export default AuthLayout(LoginPage)
