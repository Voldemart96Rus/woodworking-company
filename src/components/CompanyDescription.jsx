import React from 'react';
import Card from 'react-bootstrap/Card';

const CompanyDescription = ({contacts}) => {
    return (
        <article className="container">
            <div className="row">
                <Card className="text-center col-12 col-lg-6 col-xl-4 company-description__card">
                    <Card.Img
                        variant="top"
                        src="/favicon.svg"
                        className="company-description__image p-2 px-3"
                    />
                    <Card.Body>
                        <Card.Title>О нас</Card.Title>
                        <Card.Text>
                            ППУТМК специализируется на производстве и поставке{' '}
                            <span className="text_main-color">
                                труб ППУ и фасонных изделий
                            </span>{' '}
                            в защитной оболочке.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="text-center col-12 col-lg-6 col-xl-4 company-description__card">
                    <Card.Img
                        variant="top"
                        src="/img/factory-light.svg"
                        className="company-description__image p-2"
                    />
                    <Card.Body>
                        <Card.Title>Производство</Card.Title>
                        <Card.Text>
                            Производственные площади организации находятся в{' '}
                            <span className="text_main-color">
                                Свердловской области.
                            </span>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="text-center col-12 col-lg-6 col-xl-4 company-description__card">
                    <Card.Img
                        variant="top"
                        src="/img/buildings.svg"
                        className="company-description__image p-2"
                    />
                    <Card.Body>
                        <Card.Title>Офис</Card.Title>
                        <Card.Text>
                            Главный офис находиться в городе{' '}
                            <span className="text_main-color">
                                Екатеринбург.
                            </span>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="text-center col-12 col-lg-6 col-xl-4 company-description__card">
                    <Card.Img
                        variant="top"
                        src="/img/certificate.svg"
                        className="company-description__image p-2"
                    />
                    <Card.Body>
                        <Card.Title>Качество</Card.Title>
                        <Card.Text>
                            Вся продукция сертифицирована и соответствует{' '}
                            <span className="text_main-color">
                                международным стандартам.
                            </span>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="text-center col-12 col-lg-6 col-xl-4 company-description__card">
                    <Card.Img
                        variant="top"
                        src="/img/hand.svg"
                        className="company-description__image p-2"
                    />
                    <Card.Body>
                        <Card.Title>Эффективность</Card.Title>
                        <Card.Text>
                            Высококачественные трубы ППУ в полиэтиленовой и
                            оцинкованной оболочке помогают{' '}
                            <span className="text_main-color">
                                сократить теплопотери до 30%.
                            </span>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="text-center col-12 col-lg-6 col-xl-4 company-description__card">
                    <Card.Img
                        variant="top"
                        src="/img/down.svg"
                        className="company-description__image p-2"
                    />
                    <Card.Body>
                        <Card.Title>Скидки и бонусы</Card.Title>
                        <Card.Text>
                            Существует гибкая система{' '}
                            <span className="text_main-color">
                                скидок, бонусов
                            </span>
                            , условий оплаты.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="text-center col-12 col-lg-6 col-xl-4 company-description__card">
                    <Card.Img
                        variant="top"
                        src="/img/wheels-truck.svg"
                        className="company-description__image p-2"
                    />
                    <Card.Body>
                        <Card.Title>Доставка</Card.Title>
                        <Card.Text>
                            Мы готовы поставить вам все элементы необходимые для
                            монтажа{' '}
                            <span className="text_main-color">теплотрасс.</span>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="text-center col-12 col-lg-6 col-xl-4 company-description__card">
                    <Card.Img
                        variant="top"
                        src="/img/pipes.svg"
                        className="company-description__image p-2"
                    />
                    <Card.Body>
                        <Card.Title>Товары</Card.Title>
                        <Card.Text>
                            Мы готовы поставить вам{' '}
                            <span className="text_main-color">
                                трубы ППУ и другие элементы
                            </span>{' '}
                            для монтажа теплотрасс на самых выгодных условиях.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="text-center col-12 col-lg-6 col-xl-4 company-description__card">
                    <Card.Img
                        variant="top"
                        src="/img/increase.svg"
                        className="company-description__image p-2"
                    />
                    <Card.Body>
                        <Card.Title>Выгодные условия</Card.Title>
                        <Card.Text>
                            Мы работаем на{' '}
                            <span className="text_main-color">
                                взаимовыгодных
                            </span>{' '}
                            условиях.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className="company-description__contacts my-3">
                <a
                    href={'tel:' + contacts.tel}
                    className="btn btn-primary company-description__contact mb-3"
                >
                    <svg
                        className="icon pr-3"
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 512.006 512.006"
                    >
                        <g>
                            <g>
                                <g>
                                    <path
                                        d="M502.05,407.127l-56.761-37.844L394.83,335.65c-9.738-6.479-22.825-4.355-30.014,4.873l-31.223,40.139
				c-6.707,8.71-18.772,11.213-28.39,5.888c-21.186-11.785-46.239-22.881-101.517-78.23c-55.278-55.349-66.445-80.331-78.23-101.517
				c-5.325-9.618-2.822-21.683,5.888-28.389l40.139-31.223c9.227-7.188,11.352-20.275,4.873-30.014l-32.6-48.905L104.879,9.956
				C98.262,0.03,85.016-2.95,74.786,3.185L29.95,30.083C17.833,37.222,8.926,48.75,5.074,62.277
				C-7.187,106.98-9.659,205.593,148.381,363.633s256.644,155.56,301.347,143.298c13.527-3.851,25.055-12.758,32.194-24.876
				l26.898-44.835C514.956,426.989,511.976,413.744,502.05,407.127z"
                                    />
                                    <path
                                        d="M291.309,79.447c82.842,0.092,149.977,67.226,150.069,150.069c0,4.875,3.952,8.828,8.828,8.828
				c4.875,0,8.828-3.952,8.828-8.828c-0.102-92.589-75.135-167.622-167.724-167.724c-4.875,0-8.828,3.952-8.828,8.828
				C282.481,75.494,286.433,79.447,291.309,79.447z"
                                    />
                                    <path
                                        d="M291.309,132.412c53.603,0.063,97.04,43.501,97.103,97.103c0,4.875,3.952,8.828,8.828,8.828
				c4.875,0,8.828-3.952,8.828-8.828c-0.073-63.349-51.409-114.686-114.759-114.759c-4.875,0-8.828,3.952-8.828,8.828
				C282.481,128.46,286.433,132.412,291.309,132.412z"
                                    />
                                    <path
                                        d="M291.309,185.378c24.365,0.029,44.109,19.773,44.138,44.138c0,4.875,3.952,8.828,8.828,8.828
				c4.875,0,8.828-3.952,8.828-8.828c-0.039-34.111-27.682-61.754-61.793-61.793c-4.875,0-8.828,3.952-8.828,8.828
				C282.481,181.426,286.433,185.378,291.309,185.378z"
                                    />
                                </g>
                            </g>
                        </g>
                    </svg>
                    Позвоните нам
                </a>
                <a
                    href={'mailto:' + contacts.email}
                    className="btn btn-primary company-description__contact "
                >
                    <img src="/img/text.svg" alt="" className="icon pr-3" />
                    Отправьте вашу заявку
                </a>
            </div>
        </article>
    );
};

export default CompanyDescription;
