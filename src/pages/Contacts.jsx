import React from 'react';
import {YMaps, Map, Placemark} from 'react-yandex-maps';

import CatalogAside from '../components/layout/CatalogAside';
import {companyName, geoPosition, placemark} from '../components/constants';

import './Contact.css';

const Contacts = ({contacts}) => {
    const mapData = {
        center: [geoPosition.lat, geoPosition.lon],
        zoom: 12,
        behaviors: ['default', 'scrollZoom'],
        controls: [],
        placemarkProperties: {
            iconCaption: companyName,
        },
    };

    return (
        <section className="container-lg content">
            <div className="row">
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
                                        className="text_main-color-medium link"
                                    >
                                        {contacts.email}
                                    </a>
                                </p>
                                <p>
                                    Телефон для связи:{' '}
                                    <a
                                        href={'tel:' + contacts.tel}
                                        className="text_main-color-medium link"
                                    >
                                        {contacts.tel}
                                    </a>
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default Contacts;
