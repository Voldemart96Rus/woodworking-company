import React from 'react';

import CatalogAside from '../components/layout/CatalogAside';

const Job = () => {
    return (
        <section className="container-lg content">
            <div className="row">
                <CatalogAside />
                <div className="col col-md-7 col-lg-9">
                    <section className="block">
                        <h3 className="block__header">Вакансии</h3>
                        <h4>ППУ ТМК "Промышленная компания" требуется:</h4>
                        <ul>
                            <li>- оператор заливочной машины</li>
                            <li>- менеджер по продажам</li>
                            <li>- специалист по логистике</li>
                        </ul>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default Job;
