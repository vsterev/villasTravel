const userService = {
    register: function (data, onSuccess, onFailure) {
        return fetch('http://localhost:4000/user/register',
            {
                body: JSON.stringify(data),
                method: 'POST',
                headers: { 'Content-type': 'application/json' }
            })
            .then(res => {
                return res.json()
            })
            .then(registred => {
                console.log(registred)
                if (registred.status) {
                    const token = registred.token
                    if (token) {
                        document.cookie = `x-auth-token=${token}`
                    }
                    onSuccess(registred.userData)
                } else {
                    onFailure(registred.msg)
                }
            })
            .catch(err => {
                console.log(err)
            })
    },
    login: function (data, onSuccess, onFailure) {
        return fetch('http://localhost:4000/user/login', {
            body: JSON.stringify(data),
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
        })
            .then(res => {
                return res.json()
            })
            .then(res => {
                if (res.status) {
                    const token = res.token
                    if (token) {
                        document.cookie = `x-auth-token=${token}`
                    }
                    if (!!res.userData) {
                        onSuccess(res.userData)
                    }
                } else {
                    onFailure(`Unsuccessful login - user not exists or password incorrect !`)
                }
            })
            .catch(err => onFailure(err))
    },
    verify: function (token) {
        return fetch('http://localhost:4000/user/verify', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        })
            .then(promise => promise.json())
            .catch(err => console.error(err))

    },
    nameChange: function (data, token) {
        return fetch('http://localhost:4000/user/namechange', {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        })
            .then(promise => promise.json())
            .catch(err => console.log(err))
    },
    passChange: function (data, token) {
        return fetch('http://localhost:4000/user/passchange', {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        })
            .then(promise => promise.json())
            .catch(err => console.log(err))
    }
}
export default userService