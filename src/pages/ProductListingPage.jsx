import React from 'react';
import './ProductListingPage.css';

const plants = [
  {
    name: 'Snake Plant',
    image: 'https://static.toiimg.com/thumb/112611465/112611465.jpg?height=746&width=420&resizemode=76&imgsize=153690',
    price: '$25.99',
    description: 'A resilient plant that improves air quality and is easy to care for.',
  },
  {
    name: 'Aloe Vera',
    image: 'https://conteudo.imguol.com.br/c/entretenimento/28/2020/10/13/aloe-vera-1602609030013_v2_450x600.jpg',
    price: '$15.99',
    description: 'Known for its healing properties, perfect for your home or garden.',
  },
  {
    name: 'Fiddle Leaf Fig',
    image: 'https://www.thesill.com/cdn/shop/files/the-sill_Fiddle-Leaf-Fig-Tree_Large_Pallas_Cream_Variant_8735f6bb-bb33-4d96-9858-13dc076566d8.jpg?v=1744404801&width=1946',
    price: '$45.00',
    description: 'A statement plant with large, glossy leaves that brighten any space.',
  },
  {
    name: 'Peace Lily',
    image: 'https://media.houseandgarden.co.uk/photos/64677e9c55fc4e858e5b4d31/master/w_1600%2Cc_limit/492766473',
    price: '$35.00',
    description: 'Beautiful white flowers and air-purifying qualities make this plant a favorite.',
  },
  {
    name: 'Spider Plant',
    image: 'https://hips.hearstapps.com/hmg-prod/images/beautiful-spider-plant-chlorophytum-isolated-in-a-royalty-free-image-1727206150.jpg?crop=0.668xw:1.00xh;0,0&resize=1120:*',
    price: '$19.99',
    description: 'A low-maintenance plant that’s great for beginners and improves air quality.',
  },
  {
    name: 'Pothos',
    image: 'https://www.plantvine.com/plants/Jade-Pothos-3G-HB-Variation-800x1000.jpg',
    price: '$18.00',
    description: 'A fast-growing vine that thrives in various light conditions.',
  },
];

const ProductListingPage = ({ addToCart }) => {
  return (
    <div className="page-container">
      <h1>Air Purifying Plants</h1>
      <div className="product-listing">
        {plants.map((plant, index) => (
          <div key={index} className="product-card">
            <div className="sale-badge">SALE</div>
            <h3>{plant.name}</h3>
            <img src={plant.image} alt={plant.name} />
            <p className="product-description">{plant.description}</p>
            <p className="price">{plant.price}</p>
            <button onClick={() => addToCart(plant)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;
