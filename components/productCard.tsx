import React from 'react';

interface Product {
  id: number;
  image: string;
  name: string;
  description: string;
  address: string;
  deliveryCovered: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="relative w-60 border border-gray-200 rounded-lg shadow-sm p-4">
      <p className="text-sm text-gray-600 mb-2 font-semibold">{product.id}</p>
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover mb-2 rounded-2xl"
          style={{ maxWidth: "205px", maxHeight: "205px" }}
        />
          <button className="absolute top-3 right-3 focus:outline-none">
            <img src="/addButton.png" alt="Add to Cart" className="w-8 h-8" />
          </button>
      </div>
        <h2 className="text-sm font-semibold mb-1">{product.name}</h2>
        <p className="text-[0.7em] text-gray-600 mb-2">{product.description}</p>
        <div className="flex flex-wrap">
          <div className="w-3/4 pr-2 border-r border-gray-200">
            <p className="text-[0.6em] text-gray-600">{product.address}</p>
          </div>
            <div className="w-1/4">
              <p className="text-[0.6em] text-green-400 ml-2">{product.deliveryCovered ? 'Delivery Covered' : 'Delivery Not Covered'}</p>
            </div>
        </div>
    </div>
  );
};

export default ProductCard;