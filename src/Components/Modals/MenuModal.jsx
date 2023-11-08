import StateContext from "../StateContext";
import { useContext } from "react";
import ProductCategoryCard from "../ProductComponents/ProductCategoryCard";

export default function MenuModal() {
  const { isMenuOpen, setIsMenuOpen } = useContext(StateContext);

  return (
    <div
      className={`my-modal is-justify-content-center is-relative ${
        isMenuOpen && "my-modal-active"
      }`}
    >
      <div
        className="my-modal-background"
        onClick={() => setIsMenuOpen(false)}
      ></div>
      <div className="my-modal-content-menu">
        <div className="box is-width-10 columns m-0">
          <ProductCategoryCard
            imgPath="/assets/shared/desktop/image-category-thumbnail-headphones.png"
            title="Headphones"
          />
          <ProductCategoryCard
            imgPath="/assets/shared/desktop/image-category-thumbnail-speakers.png"
            title="Speakers"
          />
          <ProductCategoryCard
            imgPath="/assets/shared/desktop/image-category-thumbnail-earphones.png"
            title="Earphones"
          />
        </div>
      </div>
    </div>
  );
}
