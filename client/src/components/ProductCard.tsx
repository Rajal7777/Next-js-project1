'use client';


import { ProductType } from "@/types";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';


const ProductCard = ({ product }: { product: ProductType; }) => {
  const [productTypes, setProductTypes] = useState({
    size: product.sizes[0],
    color: product.colors[0]
  });

  function handleProductType({ type, value }: { type: 'size' | 'color'; value: string; }) {
    setProductTypes((prev) => ({
      ...prev,
      [type]: value
    }));
  }
  return (
    <div className="shadow-lg rounded-lg overflow-hidden">

      <Link href={`/products/${product.id}`}>
        <div className="relative w-full aspect-2/3">
          <Image
            src={product.images[productTypes.color]}
            alt={product.description}
            className="object-cover hover:scale-105 transition-all duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
          />
        </div>
      </Link>

      {/* Product detail */}
      <div className="flex flex-col gap-4 p-4">
        <h1 className="font-medium">{product.name}</h1>
        <p className="text-sm text-gray-500">{product.shortDescription}</p>
        {/* Product Types */}
        <div className="flex items-center gap-4 text-xs">
          {/* Size */}
          <div className="flex flex-col gap-1">
            <span className="text-gray-500">Size</span>
            <select
              name="size"
              id="size"
              onChange={(e) => handleProductType({ type: 'size', value: e.target.value })}
              className="ring ring-gray-300 rounded-md px-2 py-1"
            >
              {product.sizes.map((size) => (
                <option value={size} key={size}>
                  {size.toUpperCase()}
                </option>
              ))}
            </select>
          </div>

          {/* Color */}
          <div className="flex flex-col gap-1">
            <span className="text-gray-500">Color</span>
            <div className="flex items-center gap-2">
              {product.colors.map((color) => (
                <div key={color} className={`cursor-pointer border ${productTypes.color === color ? 'border-gray-400' : 'border-gray-200'
                  } rounded-full p-[1.2px]`}
                  onClick={() => handleProductType({ type: 'color', value: color })}
                >
                  <div
                    className="w-3.5 h-3.5 rounded-full"
                    style={{
                      backgroundColor: color,
                    }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>


        {/* cart */}
        <div className="flex items-center justify-between">
          <p>${product.price.toFixed(2)}</p>
          <button className="ring-1 ring-gray-200 shadow-lg rounded-md px-2 py-1 text-sm cursor-pointer hover:text-white hover:bg-black transition-all duration-300 flex items-center gap-2">
            <ShoppingCart className="w-4 h-4" />
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
