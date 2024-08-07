import { getLatestNews } from "@/helpers/news";
import NewsList from "@/components/news-list/news-list";

const DefaultLatestPage= async () => {
  const latestNews = await getLatestNews();
  
  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={latestNews}/>
    </>
  );
};

export default DefaultLatestPage;