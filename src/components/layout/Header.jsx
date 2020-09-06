import React, {useEffect, useState} from 'react';
import {Link, withRouter} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import {COMPANY_NAME} from '../constants';
import './Header.css';

const Header = ({history}) => {
    const [currentURL, setCurrentURL] = useState(history.location.pathname);
    window.scrollTo({behavior: 'smooth', top: 0});
    useEffect(() => {
        setCurrentURL(history.location.pathname);
    }, [history.location.pathname]);

    const setActive = (navLink) =>
        navLink === currentURL ? 'nav-link_active' : '';

    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                <Container>
                    <Link to="/">
                        <Navbar.Brand className="brand">
                            <img
                                className="brand-icon"
                                src="/img/logo.svg"
                                alt={COMPANY_NAME}
                            />
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Link
                                className={`nav-link ${setActive('/')}`}
                                to="/"
                            >
                                <Nav.Item>О&nbsp;компании</Nav.Item>
                            </Link>
                            <Link
                                className={`nav-link ${setActive('/catalog')}`}
                                to="/catalog"
                            >
                                <Nav.Item>Каталог</Nav.Item>
                            </Link>
                            <Link
                                className={`nav-link ${setActive('/delivery')}`}
                                to="/delivery"
                            >
                                <Nav.Item>Доставка</Nav.Item>
                            </Link>
                            <Link
                                className={`nav-link ${setActive('/payment')}`}
                                to="/payment"
                            >
                                <Nav.Item>Оплата</Nav.Item>
                            </Link>
                            <Link
                                className={`nav-link ${setActive('/job')}`}
                                to="/job"
                            >
                                <Nav.Item>Вакансии</Nav.Item>
                            </Link>
                            <Link
                                className={`nav-link ${setActive('/quality')}`}
                                to="/quality"
                            >
                                <Nav.Item>Качество</Nav.Item>
                            </Link>
                            <Link
                                className={`nav-link ${setActive('/contacts')}`}
                                to="/contacts"
                            >
                                <Nav.Item>Контакты</Nav.Item>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default withRouter(Header);
