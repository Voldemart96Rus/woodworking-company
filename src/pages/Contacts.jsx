import React from 'react';
import {YMaps, Map, Placemark} from 'react-yandex-maps';

import CatalogAside from '../components/layout/CatalogAside';
import {
    contacts,
    COMPANY_NAME,
    geoPosition,
    placemark,
} from '../components/constants';

import './Contact.css';

const Contacts = () => {
    const mapData = {
        center: [geoPosition.lat, geoPosition.lon],
        zoom: 12,
        behaviors: ['default', 'scrollZoom'],
        controls: [],
        placemarkProperties: {
            iconCaption: COMPANY_NAME,
        },
    };

    return (
        <section className="row">
            <CatalogAside />
            <div className="col col-md-7 col-lg-9">
                <section className="delivery">
                    <h3 className="block__header">Контакты</h3>
                    <div className="row">
                        <div className="col-lg-6 pb-4 pb-lg-0">
                            <YMaps>
                                <Map width={'100%'} defaultState={mapData}>
                                    {placemark.map((el) => (
                                        <Placemark
                                            geometry={el}
                                            properties={
                                                mapData.placemarkProperties
                                            }
                                        />
                                    ))}
                                </Map>
                            </YMaps>
                        </div>
                        <div className="col-lg-6 px-lg-3">
                            <span>Мы находимся по адресу:</span>
                            <ul className="list-address">
                                <li className="text_main-color">
                                    {contacts.address1}
                                </li>
                                <li className="text_main-color">
                                    {contacts.address2}
                                </li>
                            </ul>
                            <p>
                                Email для связи с нами:{' '}
                                <a
                                    href={'mailto:' + contacts.email}
                                    className="text_main-color link"
                                >
                                    {contacts.email}
                                </a>
                            </p>
                            <p>
                                Отдел сбыта:
                                <ul>
                                    {contacts.salesDepartment.phoneNumbers.map(
                                        (tel) => (
                                            <li key={tel}>
                                                <a
                                                    href={'tel:' + tel}
                                                    className="text_main-color link"
                                                >
                                                    {tel}
                                                </a>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </p>
                            <p>
                                Номера телефонов для связи:
                                <ul>
                                    {contacts.phoneNumbers.map((tel) => (
                                        <li key={tel}>
                                            <a
                                                href={'tel:' + tel}
                                                className="text_main-color link"
                                            >
                                                {tel}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default Contacts;
