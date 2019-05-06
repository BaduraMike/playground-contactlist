import React from 'react';

function ContactItem({login, name, department}) {
    const imgUrl = 'https://api.adorable.io/avatars/55/' + login + '.png';
    return (
        <li className={"item"}>
            <img src={imgUrl} alt={"Contact face."} className={"ui mini rounded image"}/>
            <div className={"content"}>
                <h4 className={"header"}>{name}</h4>
                <div className={"description"}>{department}</div>
            </div>
        </li>
    );
}

export default ContactItem;