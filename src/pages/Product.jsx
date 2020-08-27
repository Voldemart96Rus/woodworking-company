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
    const [selectedOptions, setSelectedOptions] = useState(
        currentItem ? getInitialOptions(currentItem) : null
    );

    if (currentItem === undefined) return <NotFound />;

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const handleOptionSelection = (e) =>
        setSelectedOptions({
            ...selectedOptions,
            [e.target.name]: e.target.value,
        });

    function getInitialOptions(item) {
        const options = {};

        // item.options.forEach((option) => {
        //     options[option.name] = option.values.length
        //         ? option.values[0]
        //         : 'Не выбрано';
        // });

        return options;
    }

    return (
        <section className="container-lg content">
            <div className="row">
                <CatalogAside />
                <div className="col col-md-7 col-lg-9">
                    <section className="block">
                        <h3 className="block__header">{currentItem.title}</h3>
                        <div className="d-flex flex-wrap product-wrapper">
                            <img
                                src={currentItem.img}
                                alt={currentItem.title}
                                title={currentItem.title}
                                className="product-img mr-4 mb-4"
                            />
                            <div className="flex-shrink-2 product-description">
                                <h5>{currentItem.title}</h5>
                                <ul>
                                    <li>
                                        Характеристика:{' '}
                                        {currentItem.characteristic}
                                    </li>
                                    <li>Наличие: в наличии</li>
                                </ul>
                                <Form.Text className="text-muted my-3">
                                    Купить оптом c доставкой по РФ и ближнему
                                    зарубежью.
                                    <br />
                                    Цены уточняйте у менеджеров.
                                </Form.Text>
                                <div>
                                    <Form>
                                        <Button
                                            className="mt-3 px-4"
                                            variant="primary"
                                            onClick={handleShow}
                                        >
                                            Заказать
                                        </Button>
                                        <Form.Text className="text-muted text_main-color-medium">
                                            Затрудняетесь с выбором?
                                        </Form.Text>
                                        <Form.Text className="text-muted col-10 p-0">
                                            Закажите обратный звонок, и наши
                                            менеджеры помогут подобрать
                                            необходимое количество и тип
                                            материала под ваши нужды.
                                        </Form.Text>
                                        <ModalForm
                                            show={showModal}
                                            handleClose={handleClose}
                                            product={currentItem}
                                            selectedOptions={selectedOptions}
                                        />
                                    </Form>
                                </div>
                            </div>
                            <div className="d-flex flex-column">
                                <h4>Применение в строительстве</h4>
                                {currentItem.description.map((el, i) => (
                                    <p key={i}>{el}</p>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default Product;
