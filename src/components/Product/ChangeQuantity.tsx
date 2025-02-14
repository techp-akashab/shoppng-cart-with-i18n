import "./ChangeQuantity.css";
interface ChangeQuantityProps {
  quantity: number;
  setQuantity: (quantity: number) => void;
}
function ChangeQuantity({ quantity, setQuantity }: ChangeQuantityProps) {
  return (
    <div className="qt-cont">
      <button
        className="decrease-btn change-qt-btn"
        onClick={() => setQuantity(Math.max(0, quantity - 1))}
      >
        -
      </button>
      <input
        className="change-qt"
        type="number"
        min={0}
        value={quantity}
        onChange={(e) => setQuantity(Math.max(0, Number(e.target.value)))}
      />
      <button
        className="increase-btn change-qt-btn"
        onClick={() => setQuantity(quantity + 1)}
      >
        +
      </button>
    </div>
  );
}

export default ChangeQuantity;
