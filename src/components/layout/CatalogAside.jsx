import React from 'react';

import {Link} from 'react-router-dom';

import './CatalogAside.css';

const CatalogAside = ({isActive}) => {
    return (
        <div className="col-5 col-lg-3 catalog-wrapper p-0 pr-2">
            <div className="left-category-menu hidden-sm hidden-xs">
                <div className="left-product-cat">
                    <div className="category-heading">
                        <Link to="/catalog">
                            <h2 className="catalog-description">Каталог</h2>
                        </Link>
                    </div>
                    <div className="category-menu-list">
                        <ul className="catalog">
                            <li
                                className={
                                    isActive === 'Brus'
                                        ? 'category-menu category-menu_active'
                                        : 'category-menu'
                                }
                            >
                                <Link
                                    to="/category/Brus"
                                    className="catalog-links"
                                >
                                    Брус
                                </Link>
                            </li>
                            <li
                                className={
                                    isActive === 'Brusok'
                                        ? 'category-menu category-menu_active'
                                        : 'category-menu'
                                }
                            >
                                <Link
                                    to="/category/Brusok"
                                    className="catalog-links"
                                >
                                    Брусок
                                </Link>
                            </li>
                            <li
                                className={
                                    isActive === 'Neobrabotannaya_doska'
                                        ? 'category-menu category-menu_active'
                                        : 'category-menu'
                                }
                            >
                                <Link
                                    to="/category/Neobrabotannaya_doska"
                                    className="catalog-links"
                                >
                                    Необработанная доска
                                </Link>
                            </li>
                            <li
                                className={
                                    isActive === 'Obreznaya_doska'
                                        ? 'category-menu category-menu_active'
                                        : 'category-menu'
                                }
                            >
                                <Link
                                    to="/category/Obreznaya_doska"
                                    className="catalog-links"
                                >
                                    Обрезная доска
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CatalogAside;
