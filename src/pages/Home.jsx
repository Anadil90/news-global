import { useState, useEffect } from 'react';
import './home.css'

const Home = () => {
const [articles, setArticles] = useState([])   
const key = process.env.REACT_APP_NEWS;
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`  

useEffect(() => {//run once and populate news articles list
      fetch(url)
      .then((apiResponse) => apiResponse.json())
      .then((data) => setArticles(data.articles))   
}, [])

  return (
    <div className='container'>
        <div className='row'>
        {
          //map through state data and display news articles in bootstrap card
          articles.map((article) => (
            <div className='col-sm-6 col-lg-4 mb-5'> 
              <div className='card'>
                <img className='card-img-top' src={article.urlToImage}/>
                <div className='card-body'>
                  <h5 className='card-title'>{article.title}</h5>
                  <h5>{article.author}</h5>
                    <a href={article.url} className='btn btn-primary'
                    style={{'display':'block'}}
                    >
                      Full News
                    </a>
                </div>
              </div>
            </div>
            )
          )
        }
        </div>  
    
    </div>
  )
}

export default Home