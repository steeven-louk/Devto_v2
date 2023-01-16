import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Skeleton } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const CardComponent = (props) => {
  const {loading, articles } = props;

  const tagList = articles.tag_list;


  const addToBookmark = (id) =>{
    const article = JSON.parse(localStorage.getItem("article_id"));

    if(article !== id || null){
      localStorage.setItem("article_id",JSON.stringify(id) );
    }
  }

  return (
    <>
    {!loading ? (
      <a href={articles.url} target="_blank" rel="noopener noreferrer">
        <div className="card">
          {articles.cover_image && (
            <div className="card__header">
              <img src={articles.cover_image} alt="" className="card-img-top" />
            </div>
          )}
          <div className="card__body">
            <div className="profile">
              <img src={articles.user?.profile_image_90} alt="" />
              <div className="profile_details">
                <span>{articles.user?.name}</span>
                <span>{new Date(articles.created_at).toDateString()}</span>
              </div>
            </div>
            <h1 className="card__body__title">{articles.title}</h1>

            <div className="tags">
              {tagList?.map((tag, index) => (
                <span key={index}># {tag}</span>
              ))}
            </div>
          </div>
          <div className="card__footer">
            <div className="mentions">
              <span>
                <FontAwesomeIcon icon="fa-regular fa-heart" />{" "}
                {articles.positive_reactions_count} <span className="span-tag">reactions</span> 
              </span>

              {articles.comments_count > 0 ? (
                <span>
                  <FontAwesomeIcon icon="fa-regular fa-comment" />{" "}
                  {articles.comments_count} <span className="span-tag">comments</span> 
                </span>
              ) : (
                ""
              )}
            </div>

            <div className="right">
              <span className="time">
                {articles.reading_time_minutes} min read
              </span>
              <button><FontAwesomeIcon icon="fa-regular fa-bookmark" onClick={addToBookmark(articles.id)}/></button>
            </div>
          </div>
        </div>
      </a>
      ): (
        <div>
        <Box sx={{ pt: 0.5, mb: 5 }}>
          <Skeleton variant="rectangular" width="80%" height={280} sx={{ mb: 1 }} />
          <Stack direction="row">
              <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="text" width="25%" sx={{ ml: 0.5 }} />
          </Stack>
              <Skeleton variant="text" width="60%"/>
              <Skeleton variant="text" width="60%" />
              <Skeleton variant="text" width="60%" />
             
            </Box>
            </div>
      )}
    </>
  );
};

export default CardComponent;
