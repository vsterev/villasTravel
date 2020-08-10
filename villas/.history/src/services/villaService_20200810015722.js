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
    getVillas: () => {
        return fetch('http://localhost:4000/offer/all-offers/3',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .catch(err => console.log(err))
    },
    getVillasExtended: (data) => {
        return fetch('http://localhost:4000/offer/all-offers/3',
            {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
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
    villaEdit: function (data, token, id) {
        return fetch(`http://localhost:4000/offer/edit/${id}`,
            {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                }
            })
            .then(res => res.json())
            .catch(err => console.log(err))
    },
    villaDelete: (token, id) => {
        return fetch(`http://localhost:4000/offer/delete/${id}`,
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
    villaLike: (token, id) => {
        return fetch(`http://localhost:4000/offer/like/${id}`,
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
export default villaService