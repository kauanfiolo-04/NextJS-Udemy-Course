import NewsList from "@/components/news-list/news-list";
import { DUMMY_NEWS } from "@/dummy-news";

const News = () =>{
  return(
    <div>
      <h1>News</h1>
      <NewsList news={DUMMY_NEWS} />
    </div>
  );
};

export default News;