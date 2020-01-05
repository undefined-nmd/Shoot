import Router from 'next/router'
import nextCookie from 'next-cookies'

export const auth = (ctx) => {
    const { token } = nextCookie(ctx)
    return token
}