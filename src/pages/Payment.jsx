import React from 'react';
import Alert from 'react-bootstrap/Alert';

import CatalogAside from '../components/layout/CatalogAside';

const Payment = () => (
    <section className="row">
        <CatalogAside />
        <div className="col col-md-7 col-lg-9">
            <section className="payment">
                <h3 className="block__header">Оплата</h3>
                <Alert variant="warning" data-aos="zoom-in-right">
                    <span className="font-weight-bold">Безналичный платеж</span>
                    &nbsp;– на расчетный счет компании
                </Alert>
                <Alert
                    variant="light text-dark"
                    data-aos="zoom-in-right"
                    data-aos-delay="300"
                >
                    Вы можете купить лесоматериалы в{' '}
                    <span className="font-weight-bold">Екатеринбурге</span> за
                    безналичный расчет.
                    <br />
                    Оплата производится строго на основании счета, оформленного
                    менеджерами нашей компании.
                    <br />
                    Счет действителен в течение 3-х рабочих дней.
                </Alert>
            </section>
        </div>
    </section>
);

export default Payment;
