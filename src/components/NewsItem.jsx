import React from 'react';

const NewsItem = (props) => {
  const title = props.title;
  const description = props.description;
  const imageUrl = props.imageUrl;
  const newsUrl = props.newsUrl;
  const publishedAt = props.publishedAt;
  const author = props.author;
  const source = props.source;


  return (
   <>
   <div className="card" style={{  fontFamily: 'Westminster', borderColor:'black'}}>
        <span className="position-absolute top-0 translate-middle badge square-pill bg-danger" style={{left:"93%", zIndex:'1'}}>{source.name}</span>
        <img src={imageUrl?imageUrl:'https://sportscafe.in/img/es3-cfill-w800-h418/articles/cricket-2023/Prabhsimran_Singh_DC_vs_PBKS_Arun_Jaitley_BCCI.scorimg.webp'} className="card-img" alt="..." />
        <div className="card-body">
          <h5 className="card-title" >Title: {title} <span className="badge rounded-pill text-bg-info">New</span></h5> 
          <p className="card-text">Description: {description}</p>
          <p className="card-text">Published at: {publishedAt}</p>
          {/* <p class="card-text"><small class="text-body-secondary">Last updated by {author? author:"unknown "} on {new Date(publishedAt).toTimeString() }</small></p> */}
          <a rel='noreferrer' href={newsUrl} className="btn btn-sm btn-dark" target='blank'>Read More</a>
        </div>
      </div>
     
   </>
  );
}

export default NewsItem;
