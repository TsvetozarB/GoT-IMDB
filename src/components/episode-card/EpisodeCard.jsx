import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Styles from './EpisodeCard.module.scss';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const EpisodeCard = ({ episode }) => {

  const [fav, setFav] = useState(false);
  const [localStorageFav, setLocalStorageFav] = useState([]);
  
  const onclickHandle = () => {
    if(fav) {
      setFav(false);
    } else {
      setFav(true);
    }
    changeFavoriteStatusHandler();
  }

  const addFavorite = (favEpisode) => {
    setLocalStorageFav(prevArray => [...prevArray, favEpisode]);
  }

  function removeFavorite(favEpisode) {
    setLocalStorageFav((currentFav) =>
      currentFav.filter((episodeId) => episodeId !== favEpisode)
    );
  }

  const episodeFavorite = localStorageFav.includes(episode.episodeNumber);
  
  function changeFavoriteStatusHandler() {
    if (episodeFavorite) {
      removeFavorite(episode.episodeNumber);
    } else {
      addFavorite(episode.episodeNumber);
    }
  }

  useEffect(() => {
    localStorage.setItem('favorite', JSON.stringify(localStorageFav));
  }, [localStorageFav]);

  return (
    <div className={Styles.cardContainer}>
      <div className={Styles.imageContainer}>
        <img src={episode.image} alt={episode.title} />
      </div>
      <div>
        <div className={Styles.titleAndFav}>
          <h3 className={Styles.title}>{episode.title}</h3>
          <FontAwesomeIcon className={Styles.favorite} style={ fav ? {color: 'red'} : {color: 'black'}} icon={faStar} onClick={onclickHandle}/>
        </div>
        <p className={Styles.rating}>Season {episode.seasonNumber} - Episode {episode.episodeNumber} - Rating: {episode.imDbRating}/10</p>
        <p className={Styles.description}>{episode.plot}</p>
      </div>

    </div>
  )
};

export default EpisodeCard;
