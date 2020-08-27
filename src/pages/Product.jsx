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
                                <Form.Text className="text-muted my-3">
                                    Купить оптом c доставкой по РФ и ближнему
                                    зарубежью.
                                    <br />
                                    Цены уточняйте у менеджеров.
                                </Form.Text>
                                <div>
                                    {currentItem.options && (
                                        <Form>
                                            <Form.Text className="text-muted text_main-color-medium">
                                                Не нашли нужных размеров?
                                            </Form.Text>
                                            <Form.Text className="text-muted col-10 p-0">
                                                Оставте заказ и укажите
                                                необходимые размеры и параметры
                                                в комментарии к заказу.
                                            </Form.Text>
                                            <Button
                                                className="mt-3 px-4"
                                                variant="primary"
                                                onClick={handleShow}
                                            >
                                                Заказать
                                            </Button>
                                            <ModalForm
                                                show={showModal}
                                                handleClose={handleClose}
                                                product={currentItem}
                                                selectedOptions={
                                                    selectedOptions
                                                }
                                            />
                                        </Form>
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default Product;
