import React from 'react'
import ContactCard from './ContactCard'

function PhoneBook() {
    return (
        <div className="phonebook">
            <h1 >PhoneBook</h1>
            <div>
                <ContactCard firstName="Mohd" lastName="Umair"/>
                <ContactCard firstName="Aditya" lastName="Rockzs"/>
                <ContactCard firstName="ShinShan" lastName="Dcruzz"/>
                <ContactCard firstName="Abdul" lastName="Kareem"/>
                <ContactCard firstName="Nishant" lastName="Chahar"/>
            </div>
        </div>
    )
}

export default PhoneBook
