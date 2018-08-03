import React from 'react';

import Scrollchor from 'react-scrollchor';
import Logo from './Logo';

import '../styles/topmenu.css';


function TopMenu() {
    return (
        <div className="topmenu">
            <div className="container">
                <div className="col-md-15">
                    <Logo></Logo>
                    <ul className="topmenu__list">
                        <li className="topmenu__list-item active">
                            <Scrollchor to="">Личный кабинет родителя</Scrollchor>
                        </li>
                        <li className="topmenu__list-item">
                            <Scrollchor to="#teachers">Педагоги</Scrollchor>
                        </li>
                        <li className="topmenu__list-item">
                            <Scrollchor to="classes">Классы</Scrollchor>
                        </li>
                        <li className="topmenu__list-item">
                            <Scrollchor to="news">Новости</Scrollchor>
                        </li>
                        <li className="topmenu__list-item">
                            <Scrollchor to="inventory">Инвентарь</Scrollchor>
                        </li>
                        <li className="topmenu__list-item">
                            <Scrollchor to="contacts">Контакты </Scrollchor>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TopMenu;