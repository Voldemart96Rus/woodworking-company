import React from 'react';

import CatalogAside from '../components/layout/CatalogAside';

const Payment = () => {
    return (
        <section className="container-lg content">
            <div className="row">
                <CatalogAside />

                <div className="col col-md-7 col-lg-9">
                    <section className="payment">
                        <h3 className="block__header">Оплата</h3>
                        <p>
                            <span className="font-weight-bold">
                                Безналичный платеж
                            </span>
                            &nbsp;– на расчетный счет компании
                        </p>
                        <p>
                            Вы можете купить изоляционные материалы, трубы и
                            комплектующие в изоляции в{' '}
                            <span className="font-weight-bold">
                                Екатеринбурге
                            </span>{' '}
                            за безналичный расчет. Оплата за изоляцию
                            производится строго на основании счета, оформленного
                            менеджерами нашей компании. Счет действителен в
                            течение 3-х рабочих дней.
                        </p>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default Payment;
