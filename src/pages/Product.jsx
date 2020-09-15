import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import CatalogAside from '../components/layout/CatalogAside';
import ModalForm from './ModalForm';
import NotFound from './NotFound';

import './Product.css';

const Product = ({items, item}) => {
    const currentItem = items[item];

    const [showModal, setShowModal] = useState(false);

    if (currentItem === undefined) return <NotFound />;

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <section className="row">
            <CatalogAside />
            <div className="col col-md-7 col-lg-9">
                <section className="block">
                    <h3 className="block__header">{currentItem.title}</h3>
                    <div className="d-flex flex-wrap product-wrapper">
                        <img
                            src={currentItem.img}
                            alt={currentItem.title}
                            title={currentItem.title}
                            className="product-img mr-sm-4 mb-4"
                        />
                        <div className="flex-shrink-2 product-description">
                            <ul>
                                <li>
                                    <span className="font-weight-bold">
                                        Фасовка товара:
                                    </span>{' '}
                                    {currentItem.packaging}
                                </li>
                                {currentItem.count && (
                                    <li>
                                        <span className="font-weight-bold">
                                            Количество в м3:
                                        </span>{' '}
                                        {currentItem.count}
                                    </li>
                                )}
                                <li>
                                    <span className="font-weight-bold">
                                        Характеристика:{' '}
                                    </span>{' '}
                                    {currentItem.characteristic}
                                </li>
                            </ul>
                            <Form.Text className="text-muted my-3">
                                Купить оптом c доставкой по РФ и ближнему
                                зарубежью.
                                <br />
                                Цены уточняйте у менеджеров.
                            </Form.Text>
                            <div>
                                <Form>
                                    <Form.Text className="text-muted text_main-color">
                                        Затрудняетесь с выбором?
                                    </Form.Text>
                                    <Form.Text className="text-muted col-10 p-0">
                                        Закажите обратный звонок, и наши
                                        менеджеры помогут подобрать необходимое
                                        количество и тип материала под ваши
                                        нужды.
                                    </Form.Text>
                                    <Button
                                        className="mt-3 px-4"
                                        variant="dark"
                                        onClick={handleShow}
                                    >
                                        Заказать
                                    </Button>
                                    <ModalForm
                                        show={showModal}
                                        handleClose={handleClose}
                                        product={currentItem}
                                    />
                                </Form>
                            </div>
                        </div>
                        <article className="d-flex flex-column mt-4">
                            <h4>Применение в строительстве</h4>
                            {currentItem.description.map((el, i) => (
                                <p key={i}>{el}</p>
                            ))}
                        </article>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default Product;
