import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const CardComponent = () => {
  return (
    <div className='card'>
      <div className="card__header">
        <img src="https://png.pngtree.com/thumb_back/fh260/background/20191215/pngtree-modern-double-colors-neon-lights-on-brick-background-image_324803.jpg" alt="" className="card-img-top" />
      </div>
      <div className="card__body">
        <div className="profile">
          <img src="https://png.pngtree.com/thumb_back/fh260/background/20191215/pngtree-modern-double-colors-neon-lights-on-brick-background-image_324803.jpg" alt="" />
          <div className="profile_details">
            <span>nom</span>
            <span>2 janvier (a day ago)</span>
          </div>
        </div>
        <h1 className="card-title">
          Lorem ipsum dolor sit amet, consectetur adipisicing.
        </h1>
        <div className="tags">
          <span>#typescript</span>
          <span>#javascript</span>
          <span>#webdev</span>
        </div>
      </div>
      <div className="card__footer">
        <div className="mentions">
            <span><FontAwesomeIcon icon="fa-regular fa-heart" /> 454 reactions</span>
            <span><FontAwesomeIcon icon="fa-regular fa-comment" /> 99 comments</span>
        </div>

        <div className="right">
          <span className="time">1 min read</span>
          <button>save</button>
        </div>
      </div>
    </div>
  )
}

export default CardComponent