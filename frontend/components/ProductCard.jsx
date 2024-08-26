import React from "react";
import "animate.css";
import Link from "next/link";
import Image from "next/image";
import { getDiscountedPrice } from "@/utils/helper";



const ProductCard = ({ data: { attributes: p = {}, id } = {} }) => {
  if (!p) return null; 


  const imageUrl =p.thumbnail?.data?.attributes?.url || "/default-image.jpg";

  return (
    <Link
      href={`/products/${p.slug}`} 
      className="bg-slate-50 rounded-2xl border transform overflow-hidden duration-200 hover:scale-105 cursor-pointer shadow-lg gap-4"
    >
      <Image
        width={500}
        height={500}
        src={"http://127.0.0.1:1337"+imageUrl} 
        alt={p.name}
      />

      <div className="p-4 text-black/[0.9] border-t border-gray-200 dark:border-gray-500">
        <h2 className="text-lg font-semibold">{p.name || "No Name"}</h2>
        <span className="font-normal">{p.subtitle || "subtitle loading..."}</span>
        <div className="flex items-center text-black mt-2">
          <p className="font-semibold mr-2 text-lg">&#8377;{p.price || 0}</p>
          {p.original_price && (
            <>
              <p className="font-medium text-base line-through">{p.original_price}</p>
              <p className="ml-auto font-medium text-base text-green-500">
                {getDiscountedPrice(p.original_price,p.price)}% off
              </p>
            </>
          )}
        </div>
        <div className="flex justify-between items-center py-4">
          <button className="flex items-center max-[470px]:justify-center gap-2 border-2 border-yellow-800 py-2.5 pr-5 pl-7 rounded-full font-semibold text-yellow-800 bg-white shadow-transparent shadow-sm transition-all duration-500 hover:shadow-yellow-300 hover:bg-yellow-500 hover:text-white">
            View Product
          </button>
          <button className="flex items-center max-[470px]:justify-center gap-2 border-2 border-yellow-800 py-2.5 pr-5 pl-7 rounded-full font-semibold text-yellow-800 bg-white shadow-transparent shadow-sm transition-all duration-500 hover:shadow-yellow-300 hover:bg-yellow-500 hover:text-white">
            Add to cart +
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
