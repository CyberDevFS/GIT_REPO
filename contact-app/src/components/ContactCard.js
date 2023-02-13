import React from 'react'
import user from '../images/user.png'

function ContactCard(props) {
    const { id, name, email } = props.contact;
    return (
        <div className='item'>
            <img className='ui avatar image' alt='user' src={user} />
            <div className='content'>
                <div className='header'>{name}</div>
                <div>{email}</div>
            </div>
            <i
                className='trash alternate outline icon' 
                style={{ color: "red", margin: "7px" }}
                onClick={() => props.clickHandler(id)}>
            </i>
        </div>
    )
}

export default ContactCard