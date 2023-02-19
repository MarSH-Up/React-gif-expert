import PropTypes from 'prop-types'

export const GifGridItem = ({id, title, url}) => {
  return (
    <div className='card'>
        <img src={url} className="card" alt={title}/>
        <p key={id}>{title.toUpperCase()}</p>
    </div>
  )
}

GifGridItem.propTypes ={
  title: PropTypes.string.isRequired, 
  url: PropTypes.string.isRequired,
}
