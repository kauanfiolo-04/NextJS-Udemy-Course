import { getLatestNews } from "@/app/helpers/news";

const DefaultLatestPage=()=>{
  const latestNews = getLatestNews();
  
  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={latestNews}/>
    </>
  );
};

export default DefaultLatestPage;