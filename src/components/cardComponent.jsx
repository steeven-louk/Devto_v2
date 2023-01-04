import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const CardComponent = (props) => {

  const {articles} = props;

  const tagList = articles.tag_list;

  return (
    <>
      <a href={articles.url} target="_blank" rel="noopener noreferrer">
          <div className="card" >
          {articles.cover_image &&  
            <div className="card__header">
              <img src={articles.cover_image} alt="" className="card-img-top" />
            </div>
          }
      <div className="card__body">
        <div className="profile">
          <img
            src={articles.user?.profile_image_90}
            alt=""
          />
          <div className="profile_details">
            <span>{articles.user?.name}</span>
            <span>{new Date(articles.created_at).toDateString() }</span>
          </div>
        </div>
        <h1 className="card__body__title">
          {articles.title}
        </h1>

        <div className="tags">
          {tagList?.map((tag, index) =>(
            <span key={index}># {tag}</span>
          ))}
        </div>

      </div>
      <div className="card__footer">
        <div className="mentions">
          <span>
            <FontAwesomeIcon icon="fa-regular fa-heart" /> {articles.positive_reactions_count} reactions
          </span>
          
          {articles.comments_count > 0 ?  
          <span>
           <FontAwesomeIcon icon="fa-regular fa-comment" /> {articles.comments_count} comments
          </span>
          : ''
          }
        </div>

        <div className="right">
          <span className="time">{articles.reading_time_minutes} min read</span>
          <button>save</button>
        </div>
      </div>
    </div>
    </a>
    </>
  );
}

export default CardComponent