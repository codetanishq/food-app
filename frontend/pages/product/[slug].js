import Wrapper from "@/components/Wrapper";
import React, { useState } from "react";
import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import { IoMdHeartEmpty } from "react-icons/io";
import { fetchDataFromApi } from "@/utils/api";
import { getDiscountedPrice } from "@/utils/helper";
import { parseDescription } from "@/utils/helper";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




import ReleatedProducts from "@/components/ReleatedProducts";
import ReactMarkdown from "react-markdown";

const ProductDetails = ({ product, products }) => {
  const [selectedSize, setSelectedSize] = useState();
  const [showError, setShowError] = useState(false);
  const dispatch = useDispatch();

 

  const p = product?.data?.[0]?.attributes;
  const notify = () => {
    toast.success("Success. Check your cart!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
};

  const descriptionMarkdown = parseDescription(p.description);
  return (
    <div className="w-full md:py-20">
      <ToastContainer/>
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* left column start */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel images={p.image.data} />
          </div>
          {/* left column end */}

          {/* right column start */}
          <div className="flex-[1] py-3">
            {/* PRODUCT TITLE */}
            <div className="text-[34px] font-semibold mb-2 leading-tight">
              {p.name}
            </div>

            {/* PRODUCT SUBTITLE */}
            <div className="text-lg font-semibold mb-5">{p.subtitle}</div>

            {/* Product price */}
            <div className="flex items-center">
              <p className="mr-2 text-lg font-semibold">
                MRP : &#8377;{p.price}
              </p>
              {p.original_price && (
                <>
                  <p className="text-base  font-medium line-through">
                    &#8377;{p.original_price}
                  </p>
                  <p className="ml-auto text-base font-medium text-green-500">
                    {getDiscountedPrice(p.original_price, p.price)}% off
                  </p>
                </>
              )}
            </div>

            <div className="text-md font-medium text-black/[0.5]">
              incl. of taxes
            </div>
            <div className="text-md font-medium text-black/[0.5] mb-20">
              {`(Also includes all applicable duties)`}
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
              <div id="sizeGrid" className="grid grid-cols-3 gap-2">
                {p.size.data.map((item, i) => (
                  <div
                    key={i}
                    className={`border rounded-md text-center py-3 font-medium ${
                      item.enabled
                        ? `hover:border-black cursor-pointer`
                        : `cursor-not-allowed bg-black/[0.1] opacity-50`
                    } ${selectedSize === item.size ? "border-black" : ""}`}
                    onClick={() => {
                      setSelectedSize(item.size);
                      setShowError(false);
                    }}
                  >
                    {item.size}
                  </div>
                ))}
              </div>
              {/* SIZE END */}

              {/* ERROR MESSAGE START */}
              {showError && (
                <div className="text-red-600 mt-1">
                  size selection is required
                </div>
              )}
              {/* ERROR MESSAGE END */}
            </div>
            {/* prduct size range end */}

            {/* ADD TO CART BUTTON */}
            <button
              className="w-full py-4 rounded-full bg-black text-white text-lg 
            font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
              onClick={() => {
                if (!selectedSize) {
                  setShowError(true);
                  document.getElementById("sizeGrid").scrollIntoView({
                    block: "center",
                    behavior: "smooth",
                  });
                }else {
                  dispatch(
                      addToCart({
                          ...product?.data?.[0],
                          selectedSize,
                          oneQuantityPrice: p.price,
                      })
                  );
                  notify();
              }
              }}
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
              <div className="text-lg font-bold mb-5">
                Product Details
                </div>
              <div className="text-md font-semibold text-black mb-5">
                <ReactMarkdown>
                {descriptionMarkdown}
                </ReactMarkdown>
              </div>
            </div>
          </div>
          {/* right column end */}
        </div>

        <ReleatedProducts products={products}/> 
      </Wrapper>
    </div>
  );
};

export default ProductDetails;

export async function getStaticPaths() {
  const products = await fetchDataFromApi("/api/products?populate=*");
  const paths = products.data.map((p) => ({
    params: {
      slug: p.attributes.slug,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const product = await fetchDataFromApi(
    `/api/products?populate=*&[filters][slug][$eq]=${slug}`
  );

  const products = await fetchDataFromApi(
    `/api/products?populate=*&[filters][slug][$ne]=${slug}`
  );

  return {
    props: {
      product,
      products,
    },
  };
}
