import React from 'react';

import CatalogAside from '../components/layout/CatalogAside';
import {COMPANY_NAME} from '../components/constants';
import './Production.css';

const Production = () => {
    return (
        <section className="container-lg content">
            <div className="row">
                <CatalogAside />
                <div className="col col-md-7 col-lg-9">
                    <section className="delivery">
                        <h3 className="block__header">Производство</h3>
                        <article>
                            <p>
                                Пожалуй, ни одно строительство или ремонт не
                                может обойтись без использования пиломатериалов.
                                Брус, обрезная или необрезная доска -
                                неотъемлемая составляющая обустройства пола или
                                кровли.
                            </p>
                            <p>
                                Купить все необходимые пиломатериалы для стройки
                                или ремонта гораздо выгоднее у прямых
                                производителей.
                            </p>
                            <p>
                                В Екатеринбурге и Свердловской области за
                                поставку пиломатериалов и столярных изделий с
                                2003 года отвечает компания {COMPANY_NAME}.
                            </p>
                            <div className="row">
                                <div className="col-lg-6 p-2 d-flex">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                Собственное лесопильное
                                                производство и
                                                деревообрабатывающий (столярный)
                                                цех
                                            </h5>
                                        </div>
                                        <img
                                            src="img/tmk-prod-md.jpg"
                                            className="card-img-bottom production-card__image"
                                            alt="Производство стальной трубы (ТМК)"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6 p-2 d-flex">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                2. Производство трубы в ППУ
                                                изоляции
                                            </h5>
                                        </div>
                                        <img
                                            src="img/ppu-prod.00_jpg_srz"
                                            className="card-img-bottom production-card__image"
                                            alt="Производство трубы в ППУ
                                            изоляции"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6 p-2 d-flex">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                3. Производство трубы в
                                                оцинкованной оболочке
                                            </h5>
                                        </div>
                                        <img
                                            src="img/zinc.jpe"
                                            className="card-img-bottom production-card__image of_contain"
                                            alt="Производство трубы в оцинкованной оболочке"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6 p-2 d-flex">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                4. Производство фасонных изделий
                                            </h5>
                                        </div>
                                        <img
                                            src="img/catalog/Отводы В Изоляции/ppu-zinc-shaped.png"
                                            className="card-img-bottom production-card__image"
                                            alt="Производство фасонных изделий"
                                        />
                                    </div>
                                </div>
                            </div>
                        </article>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default Production;
