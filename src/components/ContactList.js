import React from 'react';
import ContactItem from "./ContactItem";

function ContactList() {
    return (
        <div className={"ui relaxed divided list selection"}>
            <ContactItem
                login={"typeofweb1"}
                name={"Lena"}
                department={"JavaScript Developer"}
            />
            <ContactItem
                login={"typeofweb2"}
                name={"Brian"}
                department={"Human Resources"}
            />
            <ContactItem
                login={"typeofweb3"}
                name={"Rick"}
                department={"QA"}
            />
            <ContactItem
                login={"typeofweb4@pl"}
                name={"Emyl"}
                department={"E-Mailing Team"}
            />
        </div>
    );
}

export default ContactList;