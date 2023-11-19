"use client";

import RealisationCard from "./RealisationCard";
import RealisationCategoryName from "./RealisationCategoryName";
import PrestationHeader from "../../components/globals/HeaderTitle";
import data from "./realisation.json";
import { useState } from "react";

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
  return (
    <>
      <PrestationHeader title={"Mes réalisations"} />
      {data?.map((el: CategoryWithRealisationArticlesI) => {
        return (
          <section key={el.id}>
            <RealisationCategoryName categoryName={el.photo_category_name} />
            {el.realisationArticles.map((infos: RealisationArticleI): JSX.Element => (
              <RealisationCard
                key={infos.id}
                index={infos.id}
                imagePath={infos.imagePath}
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
