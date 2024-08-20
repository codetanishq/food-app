import React from "react";
import "animate.css";
import Link from "next/link";

const ProductCard = () => {
  return (
    <Link href="/product/1" className="bg-slate-50 rounded-2xl border transform overflow-hidden duration-200 hover:scale-105 cursor-pointer shadow-lg gap-4">
      <img
        className=" w-full rounded-t-2xl "
        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxzbmVha2Vyc3xlbnwwfDB8fHwxNzEyMjIzNDAyfDA&ixlib=rb-4.0.3&q=80&w=1080"
        alt="Converse sneakers"
      />
      <div className="p-4 text-black/[0.9]  border-t border-gray-200 dark:border-gray-500 " >
        <h2 className="text-lg font-semibold">
          Product1
        </h2>
        
        <span className="font-normal ">
          High Top (Lemon Yellow)
        </span>
        <div className="flex items-center text-black mt-2">
        <p className="font-semibold mr-2 text-lg">
          $60
        </p>
        <p className="font-medium text-base line-through">$65</p>
        <p className="ml-auto font-medium text-base text-green-500">20% off </p>

        </div>
        <div className="flex justify-between items-center py-4">
        <button className="flex items-center max-[470px]:justify-center gap-2 border-2 border-yellow-800 py-2.5 pr-5 pl-7 rounded-full font-semibold text-yellow-800 bg-white shadow-transparent shadow-sm transition-all duration-500 hover:shadow-yellow-300 hover:bg-yellow-500 hover:text-white ">
          View Product

          </button>
          <button className="flex items-center max-[470px]:justify-center gap-2 border-2 border-yellow-800 py-2.5 pr-5 pl-7 rounded-full font-semibold text-yellow-800 bg-white shadow-transparent shadow-sm transition-all duration-500 hover:shadow-yellow-300 hover:bg-yellow-500 hover:text-white ">
          Add to cart +

          </button>
        </div>
       
      </div>
    </Link>
 
  );
};

export default ProductCard;
