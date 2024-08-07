import NewsList from "@/components/news-list/news-list";
import { getAllNews } from "@/helpers/news";

const News=async ()=>{
  const news = getAllNews();
  
  return(
    <>
      <h1>News</h1>
      <NewsList news={news} />
    </>
  );
};

export default News;