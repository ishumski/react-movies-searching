import React from 'react';
import './SingleContent.css'
import { img_300, unavailable } from '../../config/images_links'
import { Badge, colors } from '@material-ui/core';

function SingleContent(
  {
    id,
    media_type,
    title,
    name,
    poster,
    release,
    date,
    vote_average
  }) {
  return (

    <div className='media'>
      <Badge
        badgeContent={vote_average}
        color={
          vote_average > 6 ? 'primary' : 'secondary'
        }

      />
      <img
        className='poster'
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt={title || name}
      />
      <p className='title'>
        {title || name}
      </p>
      <span className='subtitle'>
        {(media_type === 'movie') ? 'Movie' : 'TV Series'}
        <span>
          {release || date}
        </span>
      </span>

    </div>
  )
}

export default SingleContent
