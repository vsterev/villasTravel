const villaService = {
    getVillasFromUser: function () {
        fetch('http://localhost:4000/offer/all-offers/user')
            // .then(res => res.json())
            // .catch(err => console.log(err))
    }
}
export default villaService