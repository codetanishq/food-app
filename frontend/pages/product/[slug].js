import Wrapper from "@/components/Wrapper";
import React from "react";
import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import { IoMdHeartEmpty } from "react-icons/io";
import ReleatedProducts from "@/components/ReleatedProducts";

const ProductDetails = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* left column start */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel />
          </div>
          {/* left column end */}

          {/* right column start */}
          <div className="flex-[1] py-3">
            {/* PRODUCT TITLE */}
            <div className="text-[34px] font-semibold mb-2 leading-tight">
              Product Title
            </div>

            {/* PRODUCT SUBTITLE */}
            <div className="text-lg font-semibold mb-5">PRODUCT SUBTITLE</div>

            {/* Product price */}
            <div className="text-lg font-semibold">mrp rs 200</div>
            <div className="tex-md font-medium text-black/[0.5]">
              inclusive of txes
            </div>

            {/* Product ssize rnge */}
            <div className="mb-10 mt-10">
              {/* heading start */}
              <div className="flex justify-between mb-2">
                <div className="text-md font-semibold">select size</div>

                <div className="tex-md font-medium text-black/[0.5] cursor-pointer">
                  select guide
                </div>
              </div>
              {/* heding end */}

              {/* size start */}
              <div className="grid grid-cols-3 gap-2">
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  230 gm
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  500 gm
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  1 kg
                </div>
              </div>
              {/* SIZE END */}

              {/* ERROR MESSAGE START */}
              <div className="text-red-600 mt-1">
                size selection is required
              </div>
              {/* ERROR MESSAGE END */}
            </div>
            {/* prduct size range end */}

            {/* ADD TO CART BUTTON */}
            <button
              className="w-full py-4 rounded-full bg-black text-white text-lg 
            font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
            >
              Add to Cart
            </button>
            {/* ADD TO CART BUTTON */}

            {/* WISHLIST BUTTON START */}
            <button
              className="w-full py-4 rounded-full border border-black  text-black text-lg 
            font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10"
            >
              Wishlist
              <IoMdHeartEmpty size={20} />
            </button>

            {/* WISHLIST BUTTON END */}

            <div>
              <div className="text-lg font-bold mb-5">Product Details</div>
              <div className="text-md mb-5">
                Discover premium real estate in Kolkata with Griho Nirman
                Realty. Explore top property listings and expert services to
                find your dream home or investment property.
              </div>
              <div className="text-md mb-5">
                Discover premium real estate in Kolkata with Griho Nirman
                Realty. Explore top property listings and expert services to
                find your dream home or investment property.sdgjlsgfjkjsakd
                sakfkjsbf
                sdfhskfhsfgsafjsaj
                Discover premium real estate in Kolkata with Griho Nirman
                Realty. Explore top property listings and expert services to
                find your dream home or investment property.sdgjlsgfjkjsakd
                sakfkjsbf
                sdfhskfhsfgsafjsaj
                Discover premium real estate in Kolkata with Griho Nirman
                Realty. Explore top property listings and expert services to
                find your dream home or investment property.sdgjlsgfjkjsakd
                sakfkjsbf
                sdfhskfhsfgsafjsaj
              </div>
            </div>
          </div>
          {/* right column end */}
        </div>
        
        <ReleatedProducts/> 
      </Wrapper>
      
    </div>
  );
};

export default ProductDetails;
