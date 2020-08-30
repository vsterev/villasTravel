import React from 'react'
import {Button} from 'react-bootstrap'
const AddGoogleMap = ({action, num}) => {
    function openWidget(e) {
        e.preventDefault();
        window.cloudinary.createUploadWidget({
            cloudName: "deocfdedw",
            uploadPreset: "villas-choise"
        },
            (error, result) => {
                console.log('Error: ', error)
                console.log('Result :', result)
                if (result.event === 'success') {
                    action( result.info.url);
                }
            }
        ).open()
    }
    return (
    <Button onClick={openWidget}>Upload image {num+1}</Button>
    )
}
export default AddGoogleMap