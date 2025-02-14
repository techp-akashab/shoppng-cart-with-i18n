import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import CartCard from "./CartCard.tsx";
import { getProduct } from "../features/ProductSlice";
import { Link } from "react-router";
import { Trans } from "react-i18next";
function Cart() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state: RootState) => state.cart);
  const products = useSelector((state: RootState) => state.products.products);

  useEffect(() => {
    Object.keys(cartItems).forEach((id) => {
      dispatch(getProduct({ id: Number(id) }));
    });
  }, [dispatch, cartItems]);

  let cartArray = Object.entries(cartItems).map(
    ([key, value]) => [Number(key), value] as [number, number]
  );

  return (
    <div className="cart-cont">
      {cartArray.length > 0 ? (
        cartArray.map(([id, quantity]) =>
          products[id] ? (
            <CartCard key={id} item={{ id, quantity, product: products[id] }} />
          ) : (
            <div key={id}>Loading...</div>
          )
        )
      ) : (
        <p className="noProds">
          <Trans i18nKey="no_product" components={{ shop_link: <Link to="/products" /> }} />
        </p>
      )}
    </div>
  );
}

export default Cart;
