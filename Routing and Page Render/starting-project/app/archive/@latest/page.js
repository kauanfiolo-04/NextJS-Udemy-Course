import { getLatestNews } from "@/app/helpers/news";
import NewsList from "@/components/news-list/news-list";

const LatestPage=()=>{
  const latestNews = getLatestNews();
  
  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={latestNews}/>
    </>
  );
};

export default LatestPage;