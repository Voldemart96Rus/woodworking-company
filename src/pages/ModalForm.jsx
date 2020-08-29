import React, {Fragment, useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Inputmask from 'inputmask';
import $ from 'jquery';

import {mailPath, contacts} from '../components/constants.js';

const ModalForm = ({show, handleClose, product}) => {
    const initialState = {
        name: '',
        email: '',
        tel: '',
        comment: '',
    };

    const [state, setState] = useState(initialState);

    useEffect(() => {
        if (show) {
            new Inputmask('+7 999 999-99-99').mask($('.phone-number-input'));
        }
    }, [show]);

    const onChange = (e) =>
        setState({...state, [e.target.name]: e.target.value});

    const onSubmit = (e) => {
        e.preventDefault();

        $.ajax({
            type: 'POST',
            url: mailPath,
            data: $('.order-form').serialize(),
            success: () => {
                setTimeout(() => alert('Заказ отправлен'), 1000);
            },
            error: () => {
                console.error(e);
                setTimeout(() =>
                    alert(
                        'Возникла ошибка. Пожалуйста, свяжитесь с нами по номеру ' +
                            contacts.tel
                    )
                );
            },
        });

        setState(initialState);

        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Оформление заказа</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={onSubmit} className="order-form">
                    <div className="text_main-color">{product.title}</div>
                    <input
                        type="hidden"
                        name="form_subject"
                        value="Заказ товара на сайте ППУТМК"
                    />
                    <input type="hidden" name="Товар" value={product.title} />
                    <Form.Group controlId="formBasicName" className="mt-4">
                        <Form.Control
                            className="dark"
                            type="text"
                            placeholder="Имя*"
                            value={state.name}
                            onChange={onChange}
                            name="name"
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control
                            type="email"
                            placeholder="E-mail*"
                            value={state.email}
                            onChange={onChange}
                            name="email"
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicPhone">
                        <Form.Control
                            type="tel"
                            className="phone-number-input"
                            placeholder="Телефон*"
                            pattern="\+7 \d{3} \d{3}-\d{2}-\d{2}"
                            value={state.tel}
                            onChange={onChange}
                            name="tel"
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicComment" className="mt-4">
                        <Form.Control
                            as="textarea"
                            rows="3"
                            placeholder="Комментарий"
                            value={state.comment}
                            name="comment"
                            onChange={onChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Text className="text-muted">
                            * Поля помеченные звездочкой обязательные для
                            заполнения
                        </Form.Text>
                    </Form.Group>
                    <Button
                        className="order-from__submit-button"
                        variant="dark"
                        type="submit"
                    >
                        Отправить
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default ModalForm;
