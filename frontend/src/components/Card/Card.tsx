import React from 'react';

import './style.css';

export interface CardProps {
    id: number;
    className?: string;
    title: string;
    text: string;
}

const Card:React.FC<CardProps> = props => {
    return (
        <div className={`Card ${ props.className || ''}`}>
            <article>
                <div className="cardTitle"><span className="cardId">{ props.id }</span> - { props.title }</div>
                <p>{ props.text }</p>
            </article>
        </div>
    )
};

export default Card;