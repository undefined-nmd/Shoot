import cookie from 'cookie'

// Parses server-side cookie 
export const parseCookie = ({ req }) => {
    return cookie.parse(req ? req.headers.cookie || '' : document.cookie)
}

// Boolean check if SSR (Server Side Rendering)
export const isServer = () => typeof window === 'undefined'

// Return full name
export const getFullName = (firstName: string, lastName: string): string => { return firstName + ' ' + lastName }

// Return timestamp from Object ID https://docs.mongodb.com/manual/reference/method/ObjectId/#ObjectId
export const calculateTimestampFromId = (_id: string) => {
    const epoch = _id.toString().substring(0, 8)
    return new Date(parseInt(epoch, 16) * 1000)
}

// Boolean check if value (string, object, ...) is empty 
export const isEmpty = (value: any) => {
    return value === undefined ||
    value === null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0)
}