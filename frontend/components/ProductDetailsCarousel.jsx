import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ProductDetailsCarousel = ({images}) => {
  return (
    <div className='text-white text-[20px] w-full max-w-[1360px] mx-auto '>
        <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className='productCarousel'
        >
          {images?.map((img)=>(

            <img key={img.id} src={"http://127.0.0.1:1337"+img.attributes.url} alt={img.attributes.name} />
          ))}
            {/* <img src="/p2.png" alt="product1" />
            <img src="/p3.png" alt="product1" />
            <img src="/p4.png" alt="product1" />
            <img src="/p5.png" alt="product1" />
            <img src="/p6.png" alt="product1" />
            <img src="/p7.png" alt="product1" /> */}


        </Carousel>
    </div>
  )
}

export default ProductDetailsCarousel