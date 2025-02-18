import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { fetchProducts } from "../features/ProductSlice";
import ProductCard from "./ProductCard";
import { useTranslation } from "react-i18next";
import "./Product.css";
function Product() {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.products.products);
  const {t} = useTranslation();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div className="product-main-cont">
      {products ? (
        products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>{t('loading')}</p>
        )
      ) : (
        <p>No products</p>
      )}
    </div>
  );
}

export default Product;
