const villaService = {
    getVillasFromUser: function (token) {
        return fetch('http://localhost:4000/offer/all-offers/user',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                }
            })
            .then(res => res.json())
            .catch(err => console.log(err))
    },
    addVilla: function (data, token) {
        return fetch('http://localhost:4000/offer/create', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        }
        )
            .then(res => res.json())
            .catch(err => console.log(err))
    },
    villaDetails: function (id, token) {
        return fetch(`http://localhost:4000/offer/details/${id}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                }
            })
            .then(res => res.json())
            .catch(err => console.log(err))
    },
    villaEdit: function (data, token) {
        return fetch(``,
        )
            .then(res => res.json())
            .catch(err => console.log(err))
    }
}
export default villaService