import React from 'react';
import {Link} from 'react-router-dom';

import {COMPANY_NAME} from '../constants';
import './Footer.css';

const Footer = ({contacts}) => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-6 col-lg-4 mb-4">
                        <div className="hr-bt">
                            <h5>О НАС</h5>
                        </div>
                        <ul className="footer__nav">
                            <li className="nav-item">
                                <Link className="footer__nav-link" to="/">
                                    О компании
                                </Link>
                            </li>
                            <li className="nav-item nav-item__catalog">
                                <Link
                                    className="footer__nav-link"
                                    to="/catalog"
                                >
                                    Каталог
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="footer__nav-link"
                                    to="/delivery"
                                >
                                    Доставка
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="footer__nav-link"
                                    to="/payment"
                                >
                                    Оплата
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="footer__nav-link" to="/job">
                                    Вакансии
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="footer__nav-link"
                                    to="/quality"
                                >
                                    Качество
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="footer__nav-link"
                                    to="/production"
                                >
                                    Производство
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="footer__nav-link"
                                    to="/contacts"
                                >
                                    Контакты
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-xs-12 col-md-6 col-lg-4 mb-4">
                        <div className="hr-bt">
                            <h5>КОНТАКТЫ</h5>
                        </div>
                        <ul className="footer__contacts">
                            <li className="footer__contact-item">
                                <a href={'tel:' + contacts.tel}>
                                    <svg
                                        className="icon icon_sm pr-2"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                        <path
                                            d="M502.05,407.127l-56.761-37.844L394.83,335.65c-9.738-6.479-22.825-4.355-30.014,4.873l-31.223,40.139
				c-6.707,8.71-18.772,11.213-28.39,5.888c-21.186-11.785-46.239-22.881-101.517-78.23c-55.278-55.349-66.445-80.331-78.23-101.517
				c-5.325-9.618-2.822-21.683,5.888-28.389l40.139-31.223c9.227-7.188,11.352-20.275,4.873-30.014l-32.6-48.905L104.879,9.956
				C98.262,0.03,85.016-2.95,74.786,3.185L29.95,30.083C17.833,37.222,8.926,48.75,5.074,62.277
				C-7.187,106.98-9.659,205.593,148.381,363.633s256.644,155.56,301.347,143.298c13.527-3.851,25.055-12.758,32.194-24.876
				l26.898-44.835C514.956,426.989,511.976,413.744,502.05,407.127z"
                                        />
                                        <path
                                            d="M291.309,79.447c82.842,0.092,149.977,67.226,150.069,150.069c0,4.875,3.952,8.828,8.828,8.828
				c4.875,0,8.828-3.952,8.828-8.828c-0.102-92.589-75.135-167.622-167.724-167.724c-4.875,0-8.828,3.952-8.828,8.828
				C282.481,75.494,286.433,79.447,291.309,79.447z"
                                        />
                                        <path
                                            d="M291.309,132.412c53.603,0.063,97.04,43.501,97.103,97.103c0,4.875,3.952,8.828,8.828,8.828
				c4.875,0,8.828-3.952,8.828-8.828c-0.073-63.349-51.409-114.686-114.759-114.759c-4.875,0-8.828,3.952-8.828,8.828
				C282.481,128.46,286.433,132.412,291.309,132.412z"
                                        />
                                        <path
                                            d="M291.309,185.378c24.365,0.029,44.109,19.773,44.138,44.138c0,4.875,3.952,8.828,8.828,8.828
				c4.875,0,8.828-3.952,8.828-8.828c-0.039-34.111-27.682-61.754-61.793-61.793c-4.875,0-8.828,3.952-8.828,8.828
				C282.481,181.426,286.433,185.378,291.309,185.378z"
                                        />
                                    </svg>
                                    {contacts.tel}
                                </a>
                            </li>
                            <li className="footer__contact-item">
                                <a href={'mailto:' + contacts.email}>
                                    <svg
                                        className="icon icon_sm pr-2"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                        <path
                                            d="M467,61H45C20.218,61,0,81.196,0,106v300c0,24.72,20.128,45,45,45h422c24.72,0,45-20.128,45-45V106
			C512,81.28,491.872,61,467,61z M460.786,91L256.954,294.833L51.359,91H460.786z M30,399.788V112.069l144.479,143.24L30,399.788z
			 M51.213,421l144.57-144.57l50.657,50.222c5.864,5.814,15.327,5.795,21.167-0.046L317,277.213L460.787,421H51.213z M482,399.787
			L338.213,256L482,112.212V399.787z"
                                        />
                                    </svg>

                                    {contacts.email}
                                </a>
                            </li>
                            <li className="footer__contact-item align-items-start">
                                <img
                                    src="/img/company-address.svg"
                                    alt={contacts.address}
                                    className="icon icon_sm pr-2"
                                />
                                {contacts.address1}
                            </li>
                            <li className="footer__contact-item align-items-start">
                                <img
                                    src="/img/company-address.svg"
                                    alt={contacts.address}
                                    className="icon icon_sm pr-2"
                                />
                                {contacts.address2}
                            </li>
                        </ul>
                    </div>
                    <div className="col-xs-12 col-lg-4 mb-4 d-flex">
                        <a
                            href="https://ekb-sites.ru/"
                            className="site-order-link"
                        >
                            <img
                                className="site-order-link__img"
                                src="/img/site-order-white.png"
                                alt="Чтобы заказать сайт перейдите по адресу https://ekb-sites.ru/"
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div className="hr-top">
                <div className="container py-4">
                    <small className="copyright">
                        © 2020 {COMPANY_NAME}. Все права защищены.
                    </small>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
