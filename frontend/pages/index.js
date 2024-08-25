// pages/index.js

import Counter from "@/components/Counter";
import Enjoy from "@/components/Enjoy";
import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Welcome from "@/components/Welcome";
import WhyChooseUs from "@/components/WhyChooseUs";
import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/utils/api";

export default function Home({ products }) {
  return (
    <main className="bg-white">
      <HeroBanner />
      <Wrapper>
        <Enjoy />
        <Welcome />
        {/* PRODUCT GRID START */}
        <Counter />
        <div className="flex justify-center items-center text-custom-text font-bold md:text-7xl text-4xl py-8">
          Best Selling!!
        </div>
        <div className="flex justify-center items-center text-yellow-500 md:text-4xl text-2xl">
          Customer Choice
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
        {products?.data?.map((product) => (
            <ProductCard key={product.id} data={product} />
          )) || <p>No products available</p>}
        </div>
        {/* PRODUCT GRID END */}
        <WhyChooseUs />
      </Wrapper>
    </main>
  );
}

export async function getStaticProps() {
  try {
      const products = await fetchDataFromApi("/api/products?populate=*");

      // Log the products to check the image URLs
      console.log("Fetched products:", products);

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

