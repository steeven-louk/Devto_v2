import React, { useEffect, useState } from 'react'
import CardComponent from './cardComponent'
import axios from 'axios'

const Content = () => {

  const [getArticle, setGetArticles] = useState()
  const [loading, setLoading] = useState(false);

  const getData = async () =>{
    setLoading(true)
     await axios.get('https://dev.to/api/articles').then((res)=>{
      
     if(res.status === 200){
        setGetArticles(res.data);
        setLoading(false);

     }
    })
    .catch((err)=> console.error(err));
   
  }
// console.log(getArticle);

  useEffect(() => {
    setTimeout(() => {
       getData();
    }, 3000);
  
  }, []);


  return (
    <div className='content_container'>
      <div className="header">
        <h2>Posts</h2>
        <div className="filtre">
          <h2>Dernier</h2>
          <h2>Top</h2>
        </div>
      </div>

      <div className="post_container">

      {getArticle?.map((item)=>(
          <CardComponent articles={item} loading={loading} key={item.id}/>
      ))}
      </div>
    </div>
  )
}

export default Content