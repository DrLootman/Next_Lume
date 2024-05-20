import { Metadata } from "next";

export function generateMetadata({ categoryName }: { categoryName: string }): Metadata {
  return {
    title: categoryName,
    description: `The category name of this interior design section is : ${categoryName}`
  }
}

function PrestationCategoryName({ categoryName }: { categoryName: string }) {
  return (
    <h2 id="prestation_category_name">{categoryName}</h2>
  )
}

export default PrestationCategoryName;