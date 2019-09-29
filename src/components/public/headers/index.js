import React from 'react'
import LoginForm from '../forms/LoginForm'
const Header = () =>{
    return(
        <header className="mainHeader" >
            <p>I am a non Protected Header</p>
            <LoginForm />
        </header>

    )
}

export default Header;