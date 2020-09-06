import React from 'react';
import Card from 'react-bootstrap/Card';

import './truck-animation.css';
import './Quality.css';

import CatalogAside from '../components/layout/CatalogAside';

const Quality = () => (
    <section className="row">
        <CatalogAside />
        <div className="col col-md-7 col-lg-9">
            <section className="block quality">
                <h3 className="block__header">Качество продукции</h3>
                <article>
                    <Card>
                        <Card.Img variant="top" src="img/quality.jpg" />
                        <Card.ImgOverlay className="hide-md quality__img-overlay">
                            <Card.Text className="quality__text text-light lead">
                                Современное лесопильное производство и
                                деревообрабатывающий цех.
                                <br />
                                Профессиональные технологии изготовления.
                            </Card.Text>
                        </Card.ImgOverlay>
                        <Card.Body className="show-md quality__body">
                            <Card.Text className="quality__text text-light lead">
                                Современное лесопильное производство и
                                деревообрабатывающий цех.
                                <br />
                                Профессиональные технологии изготовления.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </article>
            </section>
        </div>
    </section>
);

export default Quality;
