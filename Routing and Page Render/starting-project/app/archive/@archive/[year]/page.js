import { getNewsForYear } from "@/app/helpers/news";
import NewsList from "@/components/news-list/news-list";

const FilteredNewsPage=({ params })=>{
  const filteredNews = getNewsForYear(params.year);

  return (
    <NewsList news={filteredNews} />
  );
};

export default FilteredNewsPage;