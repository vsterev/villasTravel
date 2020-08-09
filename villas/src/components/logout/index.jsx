import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import AuthContext from '../../utils/context'
const Logout = () => {
    const { logOut } = useContext(AuthContext)
    const history = useHistory()
    useEffect(() => {
        logOut()
        history.push('/')
    }, [])

    return (
        null
    )
}
export default Logout