import ProductCard from "./ProductCard";
import StateContext from "../StateContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";

export default function ProductCategoryPage() {
  const { productList } = useContext(StateContext);
  const { category } = useParams();

  const selectedProductByType = productList.filter((product) => product.type === category)
  console.log(category)
  return (
    <>
      <h4 className="has-text-centered p-5 is-text-h4 is-uppercase has-text-white has-background-black">
        {category}
      </h4>
      {selectedProductByType.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
      
    </>
  );
}
