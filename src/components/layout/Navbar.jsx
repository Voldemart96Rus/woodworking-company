import React, {useEffect, useState} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {DropdownButton, Dropdown} from 'react-bootstrap';

import './Navbar.css';

const Navbar = ({history}) => {
    const [currentURL, setCurrentURL] = useState(history.location.pathname);
    window.scrollTo({behavior: 'smooth', top: 0});
    useEffect(() => {
        setCurrentURL(history.location.pathname);
    }, [history.location.pathname]);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container d-flex align-items-center navbar-inner">
                <Link to="/" className="navbar-brand d-flex">
                    <img
                        className="navbar-brand__logo"
                        src="/favicon.svg"
                        alt="Лого"
                    />
                    <div className="header__company-description">
                        <span className="logo__company-name">ППУТМК</span>
                        <br />
                        <span className="d-375">
                            &laquo;Промышленная компания&raquo;
                        </span>
                    </div>
                </Link>
                <DropdownButton
                    alignRight
                    title="Меню"
                    id="dropdown-menu-align-right"
                    className="nav-mobile"
                >
                    <Dropdown.Item
                        href="/"
                        className={
                            currentURL === '/'
                                ? 'active dropdown-item'
                                : 'dropdown-item'
                        }
                    >
                        О&nbsp;компании
                    </Dropdown.Item>
                    <Dropdown.Item
                        href="/catalog"
                        className={
                            currentURL === '/catalog'
                                ? 'active dropdown-item'
                                : 'dropdown-item'
                        }
                    >
                        Каталог
                    </Dropdown.Item>
                    <Dropdown.Item
                        href="/delivery"
                        className={
                            currentURL === '/delivery'
                                ? 'active dropdown-item'
                                : 'dropdown-item'
                        }
                    >
                        Доставка
                    </Dropdown.Item>
                    <Dropdown.Item
                        href="/payment"
                        className={
                            currentURL === '/payment'
                                ? 'active dropdown-item'
                                : 'dropdown-item'
                        }
                    >
                        Оплата
                    </Dropdown.Item>
                    <Dropdown.Item
                        href="/job"
                        className={
                            currentURL === '/job'
                                ? 'active dropdown-item'
                                : 'dropdown-item'
                        }
                    >
                        Вакансии
                    </Dropdown.Item>
                    <Dropdown.Item
                        href="/quality"
                        className={
                            currentURL === '/quality'
                                ? 'active dropdown-item'
                                : 'dropdown-item'
                        }
                    >
                        Качество
                    </Dropdown.Item>
                    <Dropdown.Item
                        href="/production"
                        className={
                            currentURL === '/production'
                                ? 'active dropdown-item'
                                : 'dropdown-item'
                        }
                    >
                        Производство
                    </Dropdown.Item>
                    <Dropdown.Item
                        href="/contacts"
                        className={
                            currentURL === '/contacts'
                                ? 'active dropdown-item'
                                : 'dropdown-item'
                        }
                    >
                        Контакты
                    </Dropdown.Item>
                </DropdownButton>
                <ul className="navbar-nav">
                    <li
                        className={
                            currentURL === '/' ? 'nav-item active' : 'nav-item'
                        }
                    >
                        <Link className="nav-link" to="/">
                            О&nbsp;компании
                        </Link>
                    </li>
                    <li
                        className={
                            currentURL === '/delivery'
                                ? 'nav-item active'
                                : 'nav-item'
                        }
                    >
                        <Link className="nav-link" to="/delivery">
                            Доставка
                        </Link>
                    </li>
                    <li
                        className={
                            currentURL === '/payment'
                                ? 'nav-item active'
                                : 'nav-item'
                        }
                    >
                        <Link className="nav-link" to="/payment">
                            Оплата
                        </Link>
                    </li>
                    <li
                        className={
                            currentURL === '/job'
                                ? 'nav-item active'
                                : 'nav-item'
                        }
                    >
                        <Link className="nav-link" to="/job">
                            Вакансии
                        </Link>
                    </li>
                    <li
                        className={
                            currentURL === '/quality'
                                ? 'nav-item active'
                                : 'nav-item'
                        }
                    >
                        <Link className="nav-link" to="/quality">
                            Качество
                        </Link>
                    </li>
                    <li
                        className={
                            currentURL === '/production'
                                ? 'nav-item active'
                                : 'nav-item'
                        }
                    >
                        <Link className="nav-link" to="/production">
                            Производство
                        </Link>
                    </li>
                    <li
                        className={
                            currentURL === '/contacts'
                                ? 'nav-item active'
                                : 'nav-item'
                        }
                    >
                        <Link className="nav-link" to="/contacts">
                            Контакты
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default withRouter(Navbar);
