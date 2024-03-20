import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Product {
  id: string;
  image: string;
  title: string;
  description: string;
  location: string[];
  delivery: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const truncatedDescription = product.description.length > 70 ?
    `${product.description.slice(0, 70)}...` :
    product.description;

  const formattedLocation = product.location.join(', ');

  const handleAddToCartClick = () => {
    toast.success('Item added to cart!', {
      position: 'top-right', 
      autoClose: 2000 
    });
  };

  return (
    <div className="relative w-60 border border-gray-200 rounded-lg shadow-sm p-4">
      <p className="text-sm text-gray-600 mb-2 font-semibold">{product.id}</p>
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-cover mb-2 rounded-2xl"
          style={{ maxWidth: "205px", maxHeight: "205px" }}
        />
          <button className="absolute top-3 right-3 focus:outline-none" onClick={handleAddToCartClick}>
            <img src="/addButton.png" alt="Add to Cart" className="w-8 h-8" />
          </button>
      </div>
        <h2 className="text-sm font-semibold mb-1">{product.title}</h2>
        <p className="text-[0.7em] text-gray-600 mb-2">{truncatedDescription}</p>
        <div className="flex flex-wrap">
          <div className="w-3/4 pr-2 border-r border-gray-200">
            <p className="text-[0.6em] text-gray-600">{formattedLocation}</p>
          </div>
            <div className="w-1/4">
              <p className="text-[0.6em] text-green-400 ml-2">{product.delivery ? 'Delivery Covered' : 'Delivery Not Covered'}</p>
            </div>
        </div>
    </div>
  );
};

export default ProductCard;