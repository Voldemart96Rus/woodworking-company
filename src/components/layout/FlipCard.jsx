import React from 'react';

import './FlipCard.css';

const FlipCard = ({item, delay = 0}) => {
    return (
        <div className="flip-card">
            <div className="flip-card__box">
                <div className="flip-card__front container-fluid card p-0 pb-4">
                    <div className="card-body">
                        <h5 className="card-title flip-card__title">
                            {item.title}
                        </h5>
                    </div>
                    <img
                        src={item.img}
                        className="card-img-bottom flip-card__image"
                        alt={item.title}
                    />
                </div>
                <div className="flip-card__back container-fluid card p-0 pb-4">
                    <button className="flip-card__button">Подробнее</button>
                    <img
                        src={item.img}
                        className="card-img-bottom flip-card__image"
                        alt={item.title}
                    />
                </div>
            </div>
        </div>
    );
};

export default FlipCard;
