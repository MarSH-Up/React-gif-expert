import React from 'react'

export const GifGridItem = ({id, title, url}) => {
  return (
    <div className='card'>
        <img src={url} className="card" alt={title}/>
        <p key={id}>{title.toUpperCase()}</p>
    </div>
  )
}
