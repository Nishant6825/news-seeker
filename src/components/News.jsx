import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Navbar from "./Navbar";


const News = (props) => {
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("hi");
  const [URL, setUrl] = useState("");
  const [image, setImage] = useState("");
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState()
  const [page, setPage] = useState(1)

  const country = props.country;
  const category = props.category
  const pageSize = props.pageSize
  const apiKey = props.apiKey
//   let page = props.page

 
  const getData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
    fetch(url)
      .then(async (response) => {
        const re = await response.json();
        setTitle(re.articles[0].title);
        setDes(re.articles[0].description);
        setUrl(re.articles[0].url);
        setImage(re.articles[0].urlToImage);
        setArticles(re.articles);
        setTotalResults(re.totalResults)
        

      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleNext =() => {
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page+1}&pageSize=${pageSize}`
    console.log(url);
    fetch(url)
    .then(async (response) => {
      const re = await response.json();
      setTitle(re.articles[0].title);
      setDes(re.articles[0].description);
      setUrl(re.articles[0].url);
      setImage(re.articles[0].urlToImage);
      setArticles(re.articles);
      setTotalResults(re.totalResults)
      setPage(page+1)

    })
    .catch((error) => {
      console.log(error);
    });
  }
  const handlePrev =() => {
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page-1}&pageSize=${pageSize}`
    console.log(url);
    fetch(url)
    .then(async (response) => {
      const re = await response.json();
      setTitle(re.articles[0].title);
      setDes(re.articles[0].description);
      setUrl(re.articles[0].url);
      setImage(re.articles[0].urlToImage);
      setArticles(re.articles);
      setTotalResults(re.totalResults)
      setPage(page-1)

    })
    .catch((error) => {
      console.log(error);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className='container my-3'>
        <br />
        <h1><span>"News </span><span>Seeker"</span></h1>
        <br />
        <div className="row">
          {articles.map((element)=>{
           return <div className="col-md-4" key={element.url}>
            <NewsItem source={element.source} newsUrl={element.url} title={element.title ? element.title.slice(0, 20) : '...'} description={element.description? element.description.slice(0, 40)+'...' : '...'} imageUrl={element.urlToImage ? element.urlToImage : 'https://sportscafe.in/img/es3-cfill-w800-h418/articles/cricket-2023/Prabhsimran_Singh_DC_vs_PBKS_Arun_Jaitley_BCCI.scorimg.webp'} publishedAt={element.publishedAt? element.publishedAt: ''} />
           </div> 
          })}
          <div className="container d-flex justify-content-between">
                {/* <button type="button" disabled={page<=1} className="btn btn-dark" onClick={handlePrev}>&larr; Previous</button> */}
                <button type="button" disabled={page - 1 < Math.ceil( totalResults / pageSize)} className="btn btn-dark" onClick={handlePrev}>&rarr; Previous</button>
                <button type="button" disabled={page + 1 > Math.ceil( totalResults / pageSize)} className="btn btn-dark" onClick={handleNext}>&rarr; Next</button>
                </div>
        </div>
      </div>
    </>
  );
};

export default News;
