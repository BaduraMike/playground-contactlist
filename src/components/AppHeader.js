import React from 'react';

function AppHeader() {
    return (
        <header className="ui menu">
            <nav className="ui container">
                <a href="#" className="header item">
                    <img
                        className="logo"
                        src="https://typeofweb.com/wp-content/uploads/2017/08/cropped-typeofweb_logo-04-white-smaller-1-e1504359870362.png"
                        alt={"Logo"}
                    />
                    Contact List
                </a>
                <div className="header item">
                    <button className="ui button">Add Contact</button>
                </div>
            </nav>
        </header>
    );
}

export default AppHeader;