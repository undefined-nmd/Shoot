import '@fortawesome/fontawesome-svg-core/styles.css'
import '../sass/main.scss'

const AuthLayout = Page => {
    return () => (
        <div className="auth">
            <div className="container">
                <Page />
            </div>
        </div>
    )
  }
  
  export default AuthLayout