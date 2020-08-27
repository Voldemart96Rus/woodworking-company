import React from 'react';

import './truck-animation.css';
import './Quality.css';

import CatalogAside from '../components/layout/CatalogAside';

const Quality = () => {
    return (
        <section className="container-lg content">
            <div className="row">
                <CatalogAside />
                <div className="col col-md-7 col-lg-9">
                    <section className="block quality">
                        <h3 className="block__header">Качество продукции</h3>
                        <article>
                            <h4>
                                ГАРАНТИРУЕМ 11 ЛЕТ БЕСПЕРЕБОЙНОЙ ЭКСПЛУАТАЦИИ
                                ИЗДЕЛИЙ
                            </h4>
                            <h5 className="pb-3">
                                Основные этапы производства труб ППУ
                            </h5>
                            <div>
                                <div className="card mb-3">
                                    <div className="row no-gutters">
                                        <div className="col-lg-4">
                                            <img
                                                src="img/plant.jpg"
                                                className="card-img"
                                                alt="Трубный металлургический завод"
                                            />
                                        </div>
                                        <div className="col-lg-8">
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    Труба производится на
                                                    заводах ТМК (Трубная
                                                    металлургическая компания)
                                                </h5>
                                                <p className="card-text">
                                                    Сразу после производства
                                                    трубы проходят контроль ОТК
                                                    и отправляются на подготовку
                                                    к изоляции.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card mb-3">
                                    <div className="row no-gutters">
                                        <div className="col-lg-4">
                                            <img
                                                src="img/ppu.jfif"
                                                className="card-img"
                                                alt="ППУ изоляция"
                                            />
                                        </div>
                                        <div className="col-lg-8">
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    Производство трубы в ППУ
                                                    изоляции
                                                </h5>
                                                <p className="card-text">
                                                    Ключевой показатель качества
                                                    изоляции — плотность. Она
                                                    влияет на долговечночть
                                                    изоляции и ее сцепление с
                                                    трубой. Минимальная
                                                    плотность по ГОСТ — 60
                                                    кг/м³.
                                                </p>
                                                <p className="card-text bg-lightgrey p-3">
                                                    Если плотность изоляции в
                                                    норме — адгезия материала
                                                    достигает идеальных
                                                    показателей. Если адгезия в
                                                    норме — то прочность на
                                                    сдвиг в осевом и
                                                    тангециальном направлениях,
                                                    а так же радиальная
                                                    ползучесть будут выдерживать
                                                    нагрузку не менее 4 Мпа.
                                                </p>
                                                <p className="card-text">
                                                    <small className="text-muted">
                                                        Адгезия — сцепление
                                                        изоляции с поверхностью
                                                        трубы. ГОСТ 30732 — 2006
                                                    </small>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card mb-3">
                                    <div className="row no-gutters">
                                        <div className="col-lg-4">
                                            <img
                                                src="img/zink.jpg"
                                                className="card-img"
                                                alt="Оцинкованные трубы"
                                            />
                                        </div>
                                        <div className="col-lg-8">
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    Производство трубы в
                                                    оцинкованной оболочке
                                                </h5>
                                                <div className="card-text">
                                                    Качество ОЦ оболочки зависит
                                                    от трех параметров:
                                                    <ul className="py-2 px-3">
                                                        <li>
                                                            <small className="text-muted">
                                                                — соответствие
                                                                толщины штрипса;
                                                            </small>
                                                        </li>
                                                        <li>
                                                            <small className="text-muted">
                                                                — степень сжатия
                                                                и герметичность
                                                                замка;
                                                            </small>
                                                        </li>
                                                        <li>
                                                            <small className="text-muted">
                                                                — качество
                                                                покрытия.
                                                            </small>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <p className="card-text">
                                                    Оболочка изготавливается на
                                                    станках из рулонной стали с
                                                    покрытием первого класса.
                                                    Толщиной от 0,55 до 1,0 мм.
                                                </p>
                                                <h6 className="mt-4">
                                                    Толщина штрипса
                                                </h6>
                                                <p className="card-text">
                                                    Толщина напрямую зависит от
                                                    диаметра трубы. Если это не
                                                    предусмотреть — готовое
                                                    изделие не выдержит
                                                    требуемую нагрузку.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card mb-3">
                                    <div className="row no-gutters">
                                        <div className="col-lg-4">
                                            <img
                                                src="img/catalog/Отводы В Изоляции/ppu-zinc-shaped.png"
                                                className="card-img of_contain"
                                                alt="Фасонные изделия
                                                и опоры"
                                            />
                                        </div>
                                        <div className="col-lg-8">
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    Изготавливаются фасонные
                                                    изделия и опоры
                                                </h5>
                                                <p className="card-text">
                                                    Элементы фасонных изделий
                                                    свариваются с помощью
                                                    роботизированной технологии
                                                    сварочного производства.
                                                </p>
                                                <p className="card-text">
                                                    Каждая партия проходит
                                                    визуальный, ультрозвуковой и
                                                    рентгеновский контроль.
                                                </p>
                                                <p className="card-text">
                                                    Данный контроль позволяет
                                                    выявить все дефекты - поры,
                                                    не провары, шлаковые
                                                    включения и трещины.
                                                </p>
                                                <p className="card-text">
                                                    Производим нестандартные
                                                    изделия.
                                                </p>
                                            </div>
                                        </div>
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

export default Quality;
