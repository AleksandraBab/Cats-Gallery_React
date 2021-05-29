import React from 'react'
import Comment from './Comment'

export default function Popup (props) {
  const {card, onClose} = props

  const [like, setLike] = React.useState (false)
  const [comments, setComments] = React.useState ([])

  React.useEffect ( () => {
    setLike(card ? card.isLiked : false)
  }, [card])

  React.useEffect ( () => {
    setComments(card ? card.comments : [])
  }, [card])

  const likeCard = () => {
    setLike(!like)
  }

  const input = React.useRef()

  const getCommentText = () => {
    return input.current.value
  }

  const createComment = (evt) => {
    evt.preventDefault()
    const newText = getCommentText()
    const date = new Date()
    const newComment = {text: newText, date: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}

    if (newText) {
      setComments([...comments, newComment])
    }
    input.current.value = ''
  }

  return (
    <div className={`popup ${card && 'popup_opened'}`}>
      <button type="button" className="popup__next"></button>
      <button
        type="button"
        className="popup__close-btn"
        onClick={onClose}
      >
      </button>
      <div className="popup__container">
        <img
          className="popup__img"
          src={card ? card.link : ''}
          alt={card ? card.title : ''}
        />
        <div className="popup__about">
          <h2 className="popup__title">{card ? card.title : ''}</h2>
          <div className="popup__rate">
            <p className="popup__count">{card && like ? '1' : '0'}</p>
            <button
              type="button"
              aria-label="поставить лайк"
              className={`popup__like-btn ${card && like && 'popup__like-btn_liked'}`}
              onClick={likeCard}
            >
            </button>
          </div>
        </div>
        <form
          name="form"
          className="popup__form"
          onSubmit={createComment}>
          <h3 className="popup__head">Оставьте комменатарий</h3>
          <textarea
            name="text"
            className="popup__input"
            ref={input}
            ></textarea>
          <button
            type="submit"
            className="popup__sbmt-btn"
            >Отправить
          </button>
        </form>
        <div className="popup__comments">
          <h3 className="popup__heading">Комментарии</h3>
            {card && comments.map((item, i) => (
              <Comment
                key={i + 1}
                comment={item}
              />
            ))}
        </div>
      </div>
    </div>
  )
}
