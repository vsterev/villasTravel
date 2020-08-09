import React from  'react'
import {useParams} from 'react-router-dom'
const VillaDetail = () => {
    const params = useParams()
    const villaId = params.id
    return(
        <div>
            <h2>Details ViillaPade</h2>
            {villaId}
        </div>
    )
}
export default VillaDetail