import { getNewsItem } from "@/helpers/news";
import { notFound } from "next/navigation";

const ImagePage= async ({ params }) =>{
  const newsSlug = params.id;
  const newsItem = await getNewsItem(newsSlug);

  if(!newsItem){
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} />
    </div>
  );
};

export default ImagePage;