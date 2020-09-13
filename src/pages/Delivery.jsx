import React from 'react';
import Alert from 'react-bootstrap/Alert';

import CatalogAside from '../components/layout/CatalogAside';

const Delivery = () => {
    return (
        <section className="row">
            <CatalogAside />
            <div className="col col-md-7 col-lg-9">
                <section className="delivery">
                    <h3 className="block__header">Доставка</h3>
                    <Alert variant="warning" data-aos="zoom-in-right">
                        Транспортные расходы включены в стоимость материала.
                        <br />
                        Пиломатериалы соответствуют ГОСТ.
                    </Alert>
                    <Alert
                        variant="info"
                        data-aos-delay="300"
                        data-aos="zoom-in-right"
                    >
                        Наши лесоматериалы обойдутся дешевле чем у других
                        поставщиков.
                    </Alert>
                    <Alert
                        variant="light text-dark"
                        data-aos-delay="600"
                        data-aos="zoom-in-right"
                    >
                        Доставка по
                        <span className="font-weight-bold">
                            {' '}
                            России и СНГ{' '}
                        </span>{' '}
                        - собственным автотранспортом, транспортной компанией.
                        <br />
                        Доставляем продукцию по
                        <span className="font-weight-bold">
                            {' '}
                            Екатеринбургу{' '}
                        </span>
                        в короткие сроки.
                        <br />
                        Доставка осуществляется ежедневно в том числе в выходные
                        и праздничные дни.
                        <br />
                        Средний срок доставки на объекты за{' '}
                        <span className="font-weight-bold">2 дня</span>.
                    </Alert>
                    <img
                        data-aos-delay="900"
                        data-aos="zoom-in-right"
                        className="hide-mobile"
                        src="/img/delivery.svg"
                        alt="Доставка"
                    />
                </section>
            </div>
        </section>
    );
};

export default Delivery;
