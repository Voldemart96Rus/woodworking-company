import React from 'react';

import CatalogAside from '../components/layout/CatalogAside';
import {COMPANY_NAME} from '../components/constants';

const Job = () => {
    return (
        <section className="row">
            <CatalogAside />
            <div className="col col-md-7 col-lg-9">
                <section className="block">
                    <h3 className="block__header">Вакансии</h3>
                    <h4>{COMPANY_NAME} ищет сотрудников:</h4>
                    <ul>
                        <li>- наладчик лесопромышленного оборудования</li>
                    </ul>
                </section>
            </div>
        </section>
    );
};

export default Job;
