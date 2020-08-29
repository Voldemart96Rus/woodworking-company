import React from 'react';

import Carousel from 'react-bootstrap/Carousel';

import CatalogAside from '../components/layout/CatalogAside';
import CompanyDescription from '../components/CompanyDescription';
// .block__header {
//     display: block;
//     /* color: var(--main-color-dark); */
//     /* padding: 6px 0 10px; */
//     /* border-bottom: 1px solid #d3d3d3; */
//     margin-bottom: 16px;
function Home({contacts}) {
    return (
        <section className="container-lg content about">
            <div className="row">
                <CatalogAside />
                <div className="col col-md-7 col-lg-9">
                    <section className="about">
                        <h3 className="block__header">О компании</h3>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 carousel__image"
                                    src="/img/carousel/pilomateriali16.jfif"
                                    alt=""
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 carousel__image"
                                    src="/img/carousel/pilomateriali17.jfif"
                                    alt=""
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 carousel__image"
                                    src="/img/carousel/pilomateriali33.jfif"
                                    alt=""
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 carousel__image"
                                    src="/img/carousel/les-2.jpg"
                                    alt=""
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 carousel__image"
                                    src="/img/carousel/pilomateriali7.jfif"
                                    alt=""
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 carousel__image"
                                    src="/img/carousel/pilomateriali21.jfif"
                                    alt=""
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 carousel__image"
                                    src="/img/carousel/pilomateriali22.jfif"
                                    alt=""
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 carousel__image"
                                    src="/img/carousel/pilomateriali28.jfif"
                                    alt=""
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 carousel__image"
                                    src="/img/carousel/pilomateriali29.jfif"
                                    alt=""
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 carousel__image"
                                    src="/img/carousel/pilomateriali30.jfif"
                                    alt=""
                                />
                            </Carousel.Item>
                        </Carousel>
                        <CompanyDescription contacts={contacts} />
                    </section>
                </div>
            </div>
        </section>
    );
}

export default Home;
