import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types';

export class News extends Component {
  static defaultProps={
    country:'in',
  }

  static propTypes={
    country: PropTypes.string,
    category: PropTypes.string
  }
  
 constructor(){
    super();
    console.log("Hello !!! I am constructor  for newscomponent");
    this.state={
      articles:[],
      loading:false,
      page: 1
    }
  }
  handlePrevClick= async ()=>{
    console.log("Previous")
    
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7b12f88be5904508ada35485e5e0ea63&page=${this.state.page -1}&pageSize=15`;
    let data= await fetch(url);
    let parsedData =await data.json()
    console.log(parsedData);
   
    this.setState({
      page: this.state.page -1,
      articles: parsedData.articles
    })
  }

  handleNextClick=async()=>{
    console.log("Next")
    if (this.state.page + 1 > Math.ceil(this.state.totalResults/15)){

    }
else{
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7b12f88be5904508ada35485e5e0ea63&page=${this.state.page +1}&pageSize=15`;
    let data= await fetch(url);
    let parsedData =await data.json()
    console.log(parsedData);
   
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      totalArticles : parsedData.totalResults
    })
  }
  }

  async componentDidMount(){
    console.log("cdm");
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7b12f88be5904508ada35485e5e0ea63&pageSize=15`;
    let data= await fetch(url);
    let parsedData =await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles,totalArticles : parsedData.totalResults})
  }

  render() {
    return (
      <div className="container my-3">
      <h1 className="text-center"> News Buddy - Headlines</h1> 
      <div className="row">
      {this.state.articles && this.state.articles.map((element)=>{
        return <div className="col-md-4" key={element.url}>

<NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
</div>
        })}

        
       </div>
       <div className='container d-flex justify-content-between'>
       <button disabled={this.state.page<=1}  type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Prev </button>
       <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/15)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
       </div>
       </div>
    )
  }
}

export default News
