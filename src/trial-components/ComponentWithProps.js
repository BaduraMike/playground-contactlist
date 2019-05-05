import React from 'react';

function ComponentWithProps({title = "Default Title.", content = "Default Content."}) {
    return (
        <div>
            <dialog open>
                <h1>{title}</h1>
                <p>{content}</p>
            </dialog>
        </div>
    );
}

export default ComponentWithProps;