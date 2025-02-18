import { Product } from "../features/ProductSlice";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import "./ProductCard.css";
import ChangeQuantity from "./ChangeQuantity";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { modifyCart } from "../features/CartReducer";
import { AppDispatch } from "../store/store";
import { useTranslation } from "react-i18next";
interface ProductCardProps {
  product: Product;
}
function ProductCard({ product }: ProductCardProps) {
  const{t} = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const handleSubmit = () => {
    dispatch(modifyCart({ id: product.id, quantity }));
  };
  const [quantity, setQuantity] = useState(0);
  return (
    <div className="prod-cont">
      <div className="prod-img-cont">
          <img src={product.image} alt="Product Image" />
      </div>
      <div className="prod-title-cont">
        <p>{product.title}</p>
      </div>
      <div className="prod-ratings-cont">
        <Stack spacing={1}>
          <Rating
            name="half-rating-read"
            defaultValue={product.rating.rate}
            precision={0.5}
            size="small"
            readOnly
          />
        </Stack>
        <span>
          <p>{product.rating.count}</p>
        </span>
      </div>
      <div className="prod-price-cont">
        <p><strong>Rs. {product.price}</strong></p>
      </div>
      <div className="prod-quant-cont">
        <ChangeQuantity quantity={quantity} setQuantity={setQuantity} />
      </div>
      <div className="prod-addToCart-cont">
        <button onClick={handleSubmit}>
          {t('add_to_cart')}
          <span className="material-symbols-outlined">shopping_cart</span>
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
