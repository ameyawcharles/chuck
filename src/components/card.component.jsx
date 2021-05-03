import React from 'react';
import './card.styles.css';

export const Card = (props) => (
   <div className='card-container'>
        <img alt='chuck' 
        className='image'
        src={`https://i.ibb.co/r4rjNBw/chuck.png`} />
        <h2> {props.fact.value} </h2>
    </div>
)