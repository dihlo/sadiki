import React from 'react';

import '../styles/logo.css';

function Logo() {
    return(
        <div className="logo">
            <img src="./images/logo.svg" alt=""/>
            <div className="title"><a href="http://localhost:3000">Детский сад "Доракс"</a></div>
        </div>
    )
}

export default Logo;