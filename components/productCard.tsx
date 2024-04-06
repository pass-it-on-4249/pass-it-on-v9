import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PlusCircleIcon, CheckCircleIcon } from '@heroicons/react/24/solid';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
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
  cardSize: 'small' | 'medium' | 'large';
}

function ProductCard({ product, cardSize }: ProductCardProps) {
  const truncatedDescription =
    product.description.length > 70
      ? `${product.description.slice(0, 70)}...`
      : product.description;

  const formattedLocation = product.location.join(', ');

  const [isClicked, setIsClicked] = useState(false);
  const [isIconPlus, setIsIconPlus] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCartClick = () => {
    setIsClicked(!isClicked);
    setIsIconPlus(!isIconPlus);
    if (!isClicked) {
      toast.success('Item added to cart!', {
        position: 'top-right',
        autoClose: 2000,
      });
    }
    setIsAdded(!isAdded);
  };

  let height: number;

  if (cardSize === 'small') {
    height = 150;
  } else if (cardSize === 'medium') {
    height = 200;
  } else {
    height = 300;
  }

  const cardStyles = {
    small: {
      gridRowEnd: 'span 35'
    },
    medium: {
      gridRowEnd: 'span 42'
    },
    large: {
      gridRowEnd: 'span 50'
    }
  };

  return (
    <div 
      className="border border-gray-200 rounded-lg shadow-sm p-4 mb-4 mx-2"
      style={{ ...cardStyles[cardSize], width: '100% -2px' }}>  {/* -2 to give left right padding */}
      <div className="relative">
        <p className="text-sm text-gray-600 mb-2 font-semibold">
          {product.id}
        </p>
        <div className="mb-2">
          <button
            id="addToCart-hover-button"
            className={`absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-row gap-2 justify-center items-center w-32
            ${isClicked ? 'bg-[#2BA41D] hover:bg-[#217318] bg-opacity-70 text-gray-50' : 'bg-neutral-400 hover:bg-neutral-500 bg-opacity-70 text-gray-50'} text-[0.6em] font-semibold py-2 px-4 rounded-full mb-3 h-10 focus:outline-none ${isHovering || isAdded ? '' : 'hidden'}`}
    
            onClick={handleAddToCartClick}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            >
            {isClicked ? (
              <CheckCircleIcon className='h-3 w-3' fill='#f9fafb'/>
            ) : (
              <ShoppingCartIcon className='h-3 w-3' fill='#f9fafb'/>
            )}
            {isClicked ? 'Added to Cart' : 'Add To Cart'}
          </button>
          <img
            src={product.image}
            alt={product.title}
            className="w-full object-cover rounded-2xl"
            style={{ height: height, objectFit: 'cover' }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          />
        </div>
        <h2 className="text-sm font-semibold mb-0.2">{product.title}</h2>
        <p className="text-[0.7em] text-gray-600 mb-2">{truncatedDescription}</p>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-[0.6em] text-gray-600">{formattedLocation}</p>
        </div>
        <div>
          <p className="text-[0.6em] text-green-400 ml-2">
            {product.delivery ? 'Delivery Covered' : 'Delivery Not Covered'}
          </p>
        </div>
      </div>
      <style jsx>{`
        .clicked {
          transform: translateY(2px);
        }
      `}</style>
    </div>
  );
}


export default ProductCard;