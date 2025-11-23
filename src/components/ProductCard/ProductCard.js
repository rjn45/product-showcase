import Card from '../Card/Card';
import './ProductCard.css';

function ProductCard({ name, description, price, image, isOnsale = false, salePrice = price }) {
  return (
    <Card className='product-card'>
      <img src={image} alt={name} />

      <div className='product-info'>
        <h3>
          {name}
          {isOnsale && <span className="sale-badge">SALE</span>}
        </h3>

        <p>{description}</p>

        <span className='price-section'>
          {isOnsale ? (
            <>
              <span className='original-price'>₹{price}</span>
              <span className='sale-price'>₹{salePrice}</span>
            </>
          ) : (
            <span className='price'>₹{price}</span>
          )}
        </span>

        <button
          className='add-to-cart-btn'
          onClick={() => alert(`Added ${name} to cart`)}
        >
          Add to cart
        </button>
      </div>
    </Card>
  );
}

export default ProductCard;
