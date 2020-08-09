import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import villaService from '../../services/villaService'
import parseCookie from '../../utils/parseCookie'
const VillaDetail = () => {
    const params = useParams()
    const [villaName, setVillaName] = useState('')
    const villaId = params.id
    const token = parseCookie('x-auth-token')


    useEffect(() => {
        villaService.villaDetails(villaId, token)
            .then(data => {
                console.log(data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h2>Details ViillaPade</h2>
            {villaId}
        </div>
    )
}
export default VillaDetail