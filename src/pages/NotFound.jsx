import React from 'react';

import CatalogAside from '../components/layout/CatalogAside';

const NotFound = () => {
    return (
        <section className="container-lg content">
            <div className="row">
                <CatalogAside />
                <div className="col col-md-7 col-lg-9">
                    <section className="delivery">
                        <h3 className="block__header">
                            Запрашиваемая Вами страница не существует!
                        </h3>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default NotFound;
