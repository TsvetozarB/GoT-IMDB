import React from 'react';

import Styles from './EpisodeCard.module.scss';

const EpisodeCard = (props) => {
  console.log(props.episode);

  return (
    <div className={Styles.cardContainer}>
      <div className={Styles.imageContainer}>
        <img src={props.episode.image} alt={props.episode.title} />
      </div>
      <div>
        <h3 className={Styles.title}>{props.episode.title}</h3>
        <p className={Styles.rating}>Season {props.episode.seasonNumber} - Episode {props.episode.episodeNumber} - Rating: {props.episode.imDbRating}/10</p>
        <p className={Styles.description}>{props.episode.plot}</p>
      </div>

    </div>
  )
};

export default EpisodeCard;
