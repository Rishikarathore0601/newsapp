import React, { Component } from 'react'

export class NewsItem extends Component {
 

  render() {
    let {title,description,imgUrl,newsUrl,author,date}=this.props
    return (

      <div className='my-3'>
      <div className="card" >
  <img src={imgUrl?imgUrl:"https://media.istockphoto.com/id/1369150014/vector/breaking-news-with-world-map-background-vector.jpg?s=612x612&w=0&k=20&c=9pR2-nDBhb7cOvvZU_VdgkMmPJXrBQ4rB1AkTXxRIKM="} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {date} </small></p>
    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
</div>
    )
  }
}

export default NewsItem