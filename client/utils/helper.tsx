import cookie from 'cookie'

// Parses server-side cookie 
export const parseCookie = ({ req }) => {
    return cookie.parse(req ? req.headers.cookie || '' : document.cookie)
}

// Boolean check if SSR (Server Side Rendering)
export const isServer = () => typeof window === 'undefined'