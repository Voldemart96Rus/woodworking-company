import React from 'react';

import CatalogAside from '../components/layout/CatalogAside';

const Delivery = () => {
    return (
        <section className="container-lg content">
            <img src="/img/delivery.svg" alt="" />
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

                        <div className="loop-wrapper">
                            <div className="mountain"></div>
                            <div className="hill"></div>
                            <div className="tree"></div>
                            <div className="tree"></div>
                            <div className="tree"></div>
                            <div className="truck"></div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default Delivery;
