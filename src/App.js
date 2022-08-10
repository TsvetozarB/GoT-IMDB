import { useState, useEffect } from 'react';
import axios from 'axios';
import EpisodeCard from './components/episode-card/EpisodeCard';
import Button from './components/button/Button';

import Styles from './App.module.scss';

function App() {
  const [seasonsData, setSeasonsData] = useState();
  const [tvSeriesData, setTVSeriesData] = useState();
  const [clickedSeason, setClickedSeason] = useState(1);

  useEffect(() => {
    const getSeasonsData = async () => {
      //k_w8pwftnp
      //k_8na716vt
      //k_8ih2l1i2
      try {
        const response = await axios.get(`https://imdb-api.com/en/API/SeasonEpisodes/k_8na716vt/tt0944947/${clickedSeason}`);
        setSeasonsData(response);
      } catch (err) {
      }
    }
    
    const getTVSeriesData = async () => {
      //k_w8pwftnp
      //k_8na716vt
      //k_8ih2l1i2
      try {
        const response = await axios.get('https://imdb-api.com/en/API/Title/k_8na716vt/tt0944947');
        setTVSeriesData(response);
      } catch (err) {
      }
    }

    getTVSeriesData();
    getSeasonsData();
    
  }, [clickedSeason]);

  const onClickHandle = (seasonNumber) => {
    setClickedSeason(seasonNumber + 1);
  }

  

  return (
    <div>
      <h1 className={Styles.mainTitle}>{ seasonsData?.data?.title }</h1>
      <div className={Styles.listContainer}>
        <ul className={Styles.list}>
          {tvSeriesData?.data?.tvSeriesInfo?.seasons.map((el, index) => {
            return <Button 
                    onClickHandle={onClickHandle} 
                    key={el}
                    index={index}
                  >
                    {'Season ' + el}
                  </Button>
          })}
        </ul>
      </div>
      <div className={Styles.CardsContainer}>
        {seasonsData?.data?.episodes.map((episode, index) => {
          return <EpisodeCard key={episode?.id} episode={episode} index={index} />
        })}
      </div>
    </div>
  );
}

export default App;
