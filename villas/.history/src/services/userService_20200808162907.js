const userService = {
    register: function (data, onSuccess, onFailure) {
        return fetch('http://localhost:4000/user/register',
            {
                body: JSON.stringify(data),
                method: 'POST',
                headers: { 'Content-type': 'application/json' }
            })
            .then(response => {
                // const authToken = response.headers.get('Authorization')
                // if (authToken) {
                //     document.cookie = `x-auth-token=${authToken}`
                // }
                console.log(response)
                // const token = response.token
                // console.log(token)
                // if (token) {
                //     document.cookie = `x-auth-token=${token}`
                // }
                return response.json()
            })
            .then(registred => {
                if (registred.status) {
                    const token = registred.token
                    console.log(token)
                    if (token) {
                        document.cookie = `x-auth-token=${token}`
                    }
                    if (!!registred.emaill) {
                        onSuccess(registred.userData)
                    }
                } else {
                    // onFailure(`Unsuccessful login - user not exists or password incorrect !`)
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
            // credentials: 'include'
        })
            .then(res => {
                // const authToken = res.headers.get('Authorization')
                // if (authToken) {
                //     document.cookie = `x-auth-token=${authToken}`
                // }
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
    nameChange: function (data,token) {
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
    passChange: function (data,token) {
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