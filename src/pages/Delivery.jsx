import React from 'react';

import CatalogAside from '../components/layout/CatalogAside';

const Delivery = () => {
    return (
        <section className="container-lg content">
            <div className="row">
                <CatalogAside />
                <div className="col col-md-7 col-lg-9">
                    <section className="delivery">
                        <h3 className="block__header">Доставка</h3>
                        <p>
                            <span className="font-weight-bold">
                                Доставка по всей России и СНГ
                            </span>
                            - собственным автотранспортом, транспортной
                            компанией.
                        </p>
                        <p>
                            <span className="font-weight-bold">
                                До терминала транспортной компании{' '}
                            </span>
                            - Бесплатно.
                        </p>
                        <p>
                            Доставляем продукцию по
                            <span className="font-weight-bold">
                                {' '}
                                Екатеринбургу{' '}
                            </span>
                            в короткие сроки. Доставка изоляционных материалов,
                            труб и комплектующих в изоляции осуществляется
                            ежедневно в том числе в выходные и праздничные дни.
                        </p>
                        <p>
                            Средний срок доставки трубы на объекты за{' '}
                            <span className="font-weight-bold">2 дня</span>.
                        </p>
                        <p>
                            Наши трубы обойдутся дешевле чем у других
                            поставщиков.
                        </p>
                        <img
                            className="hide-mobile"
                            src="/img/delivery.svg"
                            alt="Доставка"
                        />
                    </section>
                </div>
            </div>
        </section>
    );
};

export default Delivery;
