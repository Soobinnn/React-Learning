import React, { useState } from 'react'
import { useDrop } from 'react-dnd'
import Card from './Card'
import update from 'react-addons-update'
import ItemTypes from './ItemTypes'
const style = {
  width: 1000,
  border : '1px solid black',
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',

}
const ITEMS = [
  {
    id: 1,
    name: 'Write a cool JS library',
    width: 100,
  },
  {
    id: 2,
    name: 'Make it generic enough',
    width: 400,
  },
  {
    id: 3,
    name: 'Write README',
    width: 200,
  },
  {
    id: 4,
    name: 'Create some examples',
    width: 300,
  },
  {
    id: 5,
    name: 'Spam in Twitter and IRC to promote it',
    width: 200,
  },
  {
    id: 6,
    name: '???',
    width: 100,
  },
  {
    id: 7,
    name: 'PROFIT',
    width: 100,
  },
]
const SortableContainer = () => {
  const [cards, setCards] = useState(ITEMS)
  const moveCard = (id, atIndex) => {
    const { card, index } = findCard(id)
    setCards(
      update(cards, {
        $splice: [
          [index, 1],
          [atIndex, 0, card],
        ],
      }),
    )
  }
  const findCard = id => {
    const card = cards.filter(c => `${c.id}` === id)[0]
    return {
      card,
      index: cards.indexOf(card),
    }
  }
  const [, drop] = useDrop({ accept: ItemTypes.CARD })
  return (
    <>
      <div ref={drop} style={style}>
        {cards.map(card => (
          <Card
            key={card.id}
            id={`${card.id}`}
            name={card.name}
            width={card.width}
            moveCard={moveCard}
            findCard={findCard}
          />
        ))}
      </div>
    </>
  )
}
export default SortableContainer
