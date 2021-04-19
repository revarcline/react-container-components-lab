import React from "react";

const Review = ({
  link,
  display_title,
  multimedia,
  headline,
  byline,
  summary_short,
}) => {
  return (
    <div className={"movie-review " + display_title} key={display_title}>
      <h2>
        <a href={link.url}>{display_title}</a>
      </h2>
      {multimedia ? <img src={multimedia.src} alt="poster" /> : null}
      <h3>{headline}</h3>
      <i> {byline} </i>
      <p>{summary_short}</p>
    </div>
  );
};

const MovieReviews = ({ reviews }) => {
  return <div className="review-list">{reviews.map(Review)}</div>;
};

MovieReviews.defaultProps = {
  reviews: [],
};

export default MovieReviews;
