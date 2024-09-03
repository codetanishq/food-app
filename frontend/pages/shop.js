import React from 'react';
import { fetchDataFromApi } from "@/utils/api";
import ProductCard from "@/components/ProductCard";



export default function ShopPage({products}) {

  

  return (
    <div>
      <h1 className='flex justify-center items-center  text-custom-text font-bold md:text-7xl text-4xl py-8'>Shop</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 my-14 px-5 md:px-0'>
      {products?.data?.map((product) => (
            <ProductCard key={product.id} data={product} />
          )) || <p>No products available</p>}
      </div>
    </div>
  );
}



export async function getStaticProps() {
    try {
        const products = await fetchDataFromApi("/api/products?populate=*");
  
        // Log the products to check the image URLs
       
  
        if (!products || !products.data) {
            return {
                props: {
                    products: { data: [] },
                },
                revalidate: 10,
            };
        }
  
        // Sanitize products data
        const sanitizedProducts = {
            ...products,
            data: products.data.map((product) => ({
                ...product,
                attributes: {
                    ...product.attributes,
                    name: product.attributes.name ?? "Unnamed Product",
                    price: product.attributes.price ?? 0,
                    description: product.attributes.description ?? "",
                    thumbnail: product.attributes.thumbnail ?? {},
                },
            })),
        };
  
        return {
            props: {
                products: sanitizedProducts,
            },
            revalidate: 10,
        };
    } catch (error) {
        console.error("Error fetching products:", error);
        return {
            props: {
                products: { data: [] },
            },
            revalidate: 10,
        };
    }
  }
  
  
