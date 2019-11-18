import AuthLayout from '../layouts/auth'
import TextInput from '../components/inputs/textInput';

import '../sass/main.scss'
import Button from '../components/buttons/button';
import Logo from '../components/logo';

const LoginPage = () => (
    <section className="d-flex-center">
        <form className="auth__form">
            <div className="auth__logo">
                <Logo isColored />
            </div>
            <TextInput icon="envelope" placeholder="Email" />
            <TextInput icon="lock" placeholder="Password" />
            <Button label="Log In" />
        </form>
    </section>
)

export default AuthLayout(LoginPage)
