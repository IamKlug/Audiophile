import StateContext from '../StateContext';
import { useContext } from 'react';
import ProductCategoryCard from '../ProductComponents/ProductCategoryCard';

export default function MenuModal() {
    const { isMenuOpen, setIsMenuOpen } = useContext(StateContext);

  return (
    <div
    className={`modal is-justify-content-start ${
      isMenuOpen && "is-active"
    }`}
  >
    <div
      className="modal-background"
      onClick={() => setIsMenuOpen(false)}
    ></div>
    <div className="modal-content modal-content-2 my-6 py-4"> 
      <div className="box">
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
  )
}
