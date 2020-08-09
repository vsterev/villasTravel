const parseCookie = (cookieName) => {
    const allCookies = document.cookie.split('; ').reduce((acc, cookie) => {
        const [cookieName, cookieValue] = cookie.split('=')
        acc[cookieName] = cookieValue
        return acc
    }, {})
    return allCookies[cookieName]
}
export default parseCookie