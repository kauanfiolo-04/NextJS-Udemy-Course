"use client";

import { notFound } from "next/navigation";

import { DUMMY_NEWS } from "@/dummy-news";
import { useRouter } from "next/router";

const InterceptedImagePage=({ params })=>{
  const router = useRouter();

  const newsSlug = params.id;
  const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug === newsSlug);

  if(!newsItem){
    notFound();
  }

  return (
    <>
      <div className="modal-backdrop" onClick={router.back} />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} />
        </div>
      </dialog>
    </>
  );
};

export default InterceptedImagePage;