import { notFound } from "next/navigation";

import { DUMMY_NEWS } from "@/dummy-news";

const InterceptedImagePage=({ params })=>{
  const newsSlug = params.id;
  const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug === newsSlug);

  if(!newsItem){
    notFound();
  }

  return (
    <>
    <h2>Intercepted!</h2>
      <div className="fullscreen-image">
        <img src={`/images/news/${newsItem.image}`} />
      </div>
    </>
  );
};

export default InterceptedImagePage;