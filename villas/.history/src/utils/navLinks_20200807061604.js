const getNavigations = (isLogged, user) => {
    const authLinks = [
        {
            title: 'Publications',
            path: '/'
        },
        {
            title: 'Profile',
            path: `/profile/${user && user.userId}`
            // path: userid && `/profile/${userid}` || '/profile'
        },
        {
            title: 'Create Post',
            path: '/create'
        },
        {
            title: 'Logout',
            path: '/logout'
        }
    ]
    const guestLinks = [
        {
            title: 'Villas',
            path: '/'
        },
        {
            title: 'Login',
            path: '/login'
        },
        {
            title: 'Register',
            path: '/register'
        },
        {
            title: 'Info',
            path: '/info'
        },
    ]
    return isLogged ? authLinks : guestLinks
    // return authLinks
}
export default getNavigations