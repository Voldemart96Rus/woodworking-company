import React from 'react';
import {Link} from 'react-router-dom';

import './Catalog.css';

const Catalog = ({category}) => {
    return (
        <section className="container-lg content">
            <h3 className="block__header">Каталог</h3>
            <div className="row">
                {category.map((item) => (
                    <div className="col-md-4 p-2 d-flex" key={item.id}>
                        <Link
                            to={item.URL}
                            className="container-fluid p-0 d-flex"
                        >
                            <div className="container-fluid p-0 card pb-4">
                                <div className="card-body">
                                    <h5 className="card-title catalog-category">
                                        {item.title}
                                    </h5>
                                </div>
                                <img
                                    src={item.img}
                                    className="card-img-bottom production-card__image catalog-category__img"
                                    alt={item.title}
                                />
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Catalog;
