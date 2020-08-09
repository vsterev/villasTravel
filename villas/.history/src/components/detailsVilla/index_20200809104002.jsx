import React from  'react'
import {useParams} from 'react-router-dom'
const VillaDetail = () => {
    const params = useParams()
    const villaId = params.id
    return(
        <div>
            <h2>Detail ViillaPade</h2>
        </div>
    )
}
export default VillaDetail