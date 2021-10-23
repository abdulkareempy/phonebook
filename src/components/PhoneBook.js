import React from "react";
import { useSelector } from "react-redux";
import ContactCard from "./ContactCard";

function PhoneBook() {
    const contact = useSelector((state) => state.contact);
    console.table(contact);
    return (
        <div className="phonebook">
            <h1>PhoneBook</h1>
            <div>
                {contact.map((ele, index) => {
                    return (
                        <ContactCard
                            key={index}
                            id={ele.id}
                            firstName={ele.firstName}
                            lastName={ele.lastName}
                            isFav = {ele.isFav}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default PhoneBook;
