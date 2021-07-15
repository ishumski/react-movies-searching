import React, { useState, useEffect } from 'react';

import '../../App/App.css'
import './Trending.css';

import axios from 'axios';

import SingleContent from '../../SingleContent/SingleContent';
import PagePagination from '../../Pagination/PagePagination';

function Trending() {

  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {

    fetchTrending();

  }, [page]);

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );

    setContent(data.results);
  };

  return (
    <>
      <h1 className='pageTitle'>Trending</h1>
      <div className='trendingPage'>

        {
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              media_type={c.media_type}
              title={c.title}
              name={c.name}
              release={c.release_date}
              date={c.first_air_date}
              poster={c.poster_path}
              vote_average={c.vote_average}
            />
          ))
        }
      </div>
      <PagePagination setPage={setPage} />
    </>
  )
}

export default Trending
