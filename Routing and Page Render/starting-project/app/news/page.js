import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";
import Link from "next/link";

const News = () =>{
  return(
    <div>
      <h1>News</h1>
      <ul className="news-list">
        {DUMMY_NEWS.map(newsItem => <li key={newsItem.id}>
          <Link href={`/news/${newsItem.slug}`}>
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
            <span>{newsItem.title}</span>
          </Link>
        </li>)}
      </ul>
    </div>
  );
};

export default News;