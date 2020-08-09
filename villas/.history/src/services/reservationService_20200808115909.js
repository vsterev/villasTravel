const reservationService = {
    getReservationsFromUser: function (token) {
       return fetch('http://localhost:4000/reservation/all',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                }
            })
        .then(res => res.json())
        .catch(err => console.log(err))
    }
}
export default reservationService