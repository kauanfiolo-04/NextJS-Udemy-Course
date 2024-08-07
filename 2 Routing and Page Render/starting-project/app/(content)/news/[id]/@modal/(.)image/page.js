import ModalBackdrop from "@/components/modal-backdrop/modal-backdrop";
import { getNewsItem } from "@/helpers/news";
import { notFound } from "next/navigation";

const InterceptedImagePage=async ({ params })=>{
  const newsSlug = params.id;
  const newsItem = await getNewsItem(newsSlug);

  if(!newsItem){
    notFound();
  }

  return (
    <>
      <ModalBackdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} />
        </div>
      </dialog>
    </>
  );
};

export default InterceptedImagePage;