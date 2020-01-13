import { createContext } from 'react'

const AuthContext = createContext({
    name: 'Guest'
})

export default AuthContext