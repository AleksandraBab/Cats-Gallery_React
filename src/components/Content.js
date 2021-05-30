import {cardList} from '../scripts/constants'
import Card from './Card'
import React from 'react'

export default function Content ({onCardClick}) {

  return (
    <main className="content">

      <section className="gallery content__section">
        <h1 className="gallery__heading">Усы, лапы, хвост</h1>
        <ul className="gallery__list">
          {cardList.map((item, ind) => (
            <Card
              key={item.id}
              card={item}
              ind={ind}
              onCardClick={onCardClick}
            />
          ))}
        </ul>
      </section>
    </main>
  )
}


