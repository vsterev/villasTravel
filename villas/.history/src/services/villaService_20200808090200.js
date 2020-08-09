const villaService = {
    getVillasFromUser: function (token) {
        fetch('http://localhost:4000/offer/all-offers/user',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                }
            })
        .then(res => res.json())
        .catch(err => console.log(err))
    }
}
export default villaService