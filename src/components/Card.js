import React from 'react'

export default function Card (props) {
  const {card, onCardClick} = props

  return (
    <li
      className="item"
      onClick={() => onCardClick(card)}
    >
      <img className="item__img"
        src={card.link}
        alt={card.title}
      />
      <div className="item__overlay">
        <p className="item__name">{card.title}</p>
      </div>
    </li>
  )
}
