"use client";

import { useEffect, useState } from "react";
import NewsList from "@/components/news-list/news-list";

const News=()=>{
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [news, setNews] = useState();

  useEffect(()=>{
    const fetchNews= async ()=>{
      setIsLoading(true);
      const response = await fetch("http://localhost:8080/news");
      
      if(!response.ok){
        setError("Failed to fetch news.");
        setIsLoading(false);
      }

      const news = await response.json();
      setIsLoading(false);
      setNews(news);
    };

    fetchNews();
    
  },[]);

  if(isLoading){
    return <p>Loading...</p>;
  }

  if(error){
    return <p>{error}</p>
  }

  let newsContent;
 
  if(news){
    newsContent = <NewsList news={news} />;
  }

  return(
    <div>
      <h1>News</h1>
      {newsContent}
    </div>
  );
};

export default News;