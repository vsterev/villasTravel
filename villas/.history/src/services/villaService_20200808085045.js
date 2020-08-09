const villaService = {
    getVillasFromUser: function () {
        fetch('http://localhost:4000/offer/all-offers/user')
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
}
export default villaService