import React, { useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const Friends = () => {

    useEffect(() => {
        userLogin()
    })

    const userLogin = (data) => {
        const localToken = localStorage.getItem('token')

        if (data.dataType === 'login') {

            axiosWithAuth().post('/api/login', { username: data.username, password: data.password })
            .then(res => res.data.payload && localStorage.setItem('token', res.data.payload))
            .catch(err => console.log(err))

        }

        // * LOG STORE TOKEN IF IT EXIST
        if (!!localToken === true) {

            // ! LOG DATA
            console.log('THIS IS YOUR TOKEN FOR SUCCESSFUL LOGIN', localToken);

            // ? GET REQUEST FOR FRIENDS LIST WITH AUTHENTICATED REQUEST
            axiosWithAuth().get('/api/friends')
                .then(res => console.log('YOUR AUTHENTICATED ACCESS TO FRIENDS', res))
                .catch(err => console.log(err))

            // ? GET REQUEST FOR A SPECIFIC OBJECT ID
            axiosWithAuth().get('/api/friends/1')
                .then(res => console.log('SPECIFIC FRIEND REQUEST DATA', res))
                .catch(err => console.log(err))
        }
    }

    return (
        <>
            <h1>List of friends here.</h1>
        </>
    )
}

export default Friends