import { cookies } from 'next/headers'

export const CookiesUser = () => {
    const CookieUser = cookies();
    const user = CookieUser.get("user")
    return user
}