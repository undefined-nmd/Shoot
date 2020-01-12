import { createContext } from 'react'

const ThemeContext = createContext({
    isLecturer: false,
    toggleTheme: () => {}
})

export default ThemeContext