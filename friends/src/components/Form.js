import React, { useState } from 'react';

const Form = (props) => {

    // * STATE
    const [friend, setFriend] = useState({});

    // * GRAB LOCATION
    const location = props.location.pathname;

    // * GRAB VALUE FROM LOCALSTORAGE CALLED "TOKEN"
    const token = localStorage.getItem('token');

    const submit = (e) => {
        e.preventDefault();

        const attr = e.currentTarget.getAttribute('name');

        // * SET STATE
        setFriend({
            ...friend,
            dataType: attr
        })
    }

    const handleChange = (e) => {
        e.preventDefault();

        // * SET STATE
        setFriend({
            ...friend,
            [e.target.name]: e.target.value
        })
    }

    // ! LOG DATA
    console.log(props, location, friend)

    return !!token === true ?
        (
            <>
                <form name="create" onSubmit={(e) => submit(e)}>
                    <h2>Create</h2>
                    <input onChange={(e) => handleChange(e)} type="text" name="name" placeholder="Name here" />
                    <input onChange={(e) => handleChange(e)} type="text" name="email" placeholder="Email here" />
                    <input onChange={(e) => handleChange(e)} type="text" name="age" placeholder="Age here" />
                    <button>Create</button>
                </form>

                <form name="search" onSubmit={(e) => submit(e)}>
                    <h2>Search Friend</h2>
                    <input onChange={(e) => handleChange(e)} type="text" name="name" placeholder="Name here" />
                    <input onChange={(e) => handleChange(e)} type="text" name="email" placeholder="Email here" />
                    <input onChange={(e) => handleChange(e)} type="text" name="age" placeholder="Age here" />
                    <button>Search</button>
                </form>
            </>
        )
        :
        (
            <form name="login" onSubmit={(e) => submit(e)}>
                <h2>Login</h2>
                <input onChange={(e) => handleChange(e)} type="text" name="name" placeholder="Name here" />
                <input onChange={(e) => handleChange(e)} type="text" name="password" placeholder="Password here" />
                <button>Submit</button>
            </form>
        )
}

export default Form