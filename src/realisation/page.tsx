// import PrestationHeader from "../HeaderTitle";
import RealisationCard from "../RealisationCard";
import RealisationCategoryName from "./RealisationCategoryName";
// import { useState, useEffect } from "react";
// import useGet from "../../utils/useGet";
// import {
//   CategoryWithRealisationArticlesI,
//   RealisationArticleI,
// } from "../../utils/interfaces/interfaces";
import { data } from "./realisation.json";

interface RealisationArticleI {
  id: number;
  URL: string;
  paragraph: string;
  realisationCategoryId: number;
  title: string;
}

interface CategoryWithRealisationArticlesI {
  id: number;
  photo_category_name: string;
  realisationArticles: RealisationArticleI[];
}

export default function Realisation() {
  const [data, setData] = useState<CategoryWithRealisationArticlesI[]>([]);

  useGet<CategoryWithRealisationArticlesI>("api/realisation", setData);

  return (
    <>
      {/* <PrestationHeader title={"Mes réalisations"} /> */}
      <h1>Coucou</h1>
      {data?.map((el: CategoryWithRealisationArticlesI) => {
        return (
          <section key={el.id}>
            <RealisationCategoryName categoryName={el.photo_category_name} />
            {el.realisationArticles.map((infos: RealisationArticleI): JSX.Element => (
              <RealisationCard
                key={infos.id}
                index={infos.id}
                URL={infos.URL}
                paragraph={infos.paragraph}
              />
            )
            )}
          </section>
        );
      })}
    </>
  );
}
