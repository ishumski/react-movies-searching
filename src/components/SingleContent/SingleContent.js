import React from 'react';
import './SingleContent.css'
import { img_300, unavailable } from '../../config/images_links'

function SingleContent(
  {
    id,
    media_type,
    title,
    name,
    poster,
    release,
    date
  }) {
  return (

    <div className='media'>
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
