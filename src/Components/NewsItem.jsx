import React from 'react'

function NewsItem(props) {
    let {title , description ,imageUrl ,newsUrl} = props

  return (
    <div>
       <div className="my-3">
        <div className="card image-div">
            <img className="news-image" src={imageUrl ? imageUrl : "https://thumbs.dreamstime.com/b/news-woodn-dice-depicting-letters-bundle-small-newspapers-leaning-left-dice-34802664.jpg" } alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <a href={newsUrl} target="_blank" className="btn btn-outline-primary">Read More..</a>
            </div>
        </div>
        
    </div>
    </div>
  )
}

export default NewsItem
