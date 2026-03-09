import { useState } from "react";
function ProductCard({ title, price }) {
  // Estado para controlar si el producto tiene "like"
  const [liked, setLiked] = useState(false);
  // Función para alternar el estado de "like"
  const handleLikeClick = () => {
    setLiked(!liked);
  };
  return (
    <div className="product-card">
      <h2 className="product-title">{title}</h2>
      <p className="product-price">${price.toFixed(2)}</p>
      <button
        className={liked ? "like-button liked" : "like-button"}
        onClick={handleLikeClick}
      >
        {liked ? " Me gusta" : " Me gusta"}
      </button>
    </div>
  );
}
export default ProductCard;
