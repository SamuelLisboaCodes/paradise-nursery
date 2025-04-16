import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

function PlantCard({ plant }) {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(plant));
  };

  return (
    <div className="plant-card">
      <img src={plant.thumbnail} alt={plant.name} />
      <h3>{plant.name}</h3>
      <p>{plant.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default PlantCard;
