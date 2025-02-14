import { addToCart, removeFromCart } from "../features/CartReducer";
import { useDispatch } from "react-redux";
import "./CartCard.css";

interface CartCardProps {
  item: {
    id: number;
    quantity: number;
    product: {
      image: string;
      title: string;
      price: number;
    };
  };
}

function CartCard({ item }: CartCardProps) {
  const dispatch = useDispatch();

  if (!item.product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="cart-card-cont">
      <img src={item.product.image} alt={item.product.title} />
      <div className="cart-card-dtls-cont">
        <h3>{item.product.title}</h3>
        <p>Rs. {item.product.price.toFixed(2)}</p>
        <div className="qt-cont">
          <button
            className="decrease-btn change-qt-btn"
            onClick={() => dispatch(removeFromCart({ id: item.id }))}
          >
            -
          </button>
          <input
            className="change-qt"
            type="number"
            min={0}
            value={item.quantity}
            readOnly
          />
          <button
            className="increase-btn change-qt-btn"
            onClick={() => dispatch(addToCart({ id: item.id }))}
          >
            +
          </button>
        </div>
        <div className="deletebtn">
          <button onClick={() => dispatch(removeFromCart({ id: item.id }))}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
