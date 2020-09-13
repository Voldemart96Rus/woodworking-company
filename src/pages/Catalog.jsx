import React from 'react';
import Alert from 'react-bootstrap/Alert';
import {Link} from 'react-router-dom';

import FlipCard from '../components/layout/FlipCard';
import './Catalog.css';

const Catalog = ({category}) => {
    return (
        <section className="content">
            <h3 className="block__header">Каталог</h3>
            <Alert variant="warning">
                Транспортные расходы включены в стоимость материала.
                <br />
                Пиломатериалы соответствуют ГОСТ.
            </Alert>
            <div className="row">
                {category.map((item, i) => (
                    <div className="col-md-4 p-2 d-flex" key={item.id}>
                        <Link
                            to={item.URL}
                            className="container-fluid p-0 d-flex"
                        >
                            <FlipCard delay={(i + 1) * 300} item={item} />
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Catalog;
