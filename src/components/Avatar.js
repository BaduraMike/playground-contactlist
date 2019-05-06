import React from 'react';

function Avatar({login}) {
    const imgUrl = 'https://api.adorable.io/avatars/55/' + login + '.png';
    return (
        <img src={imgUrl} alt={"Contact face."} className={"ui mini rounded image"}/>
        );
}

export default Avatar;