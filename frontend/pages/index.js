import Counter from "@/components/Counter";
import Enjoy from "@/components/Enjoy";
import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Welcome from "@/components/Welcome";
import WhyChooseUs from "@/components/WhyChooseUs";
import Wrapper from "@/components/Wrapper";

export default function Home() {
  return (
    <main className="bg-white">
      <HeroBanner />
      <Wrapper>
        <Enjoy />

        <Welcome />
        {/* PEODUCT GRID START */}

        <Counter />
        <div className="flex justify-center items-center text-custom-text font-bold md:text-7xl text-4xl py-8">
          Best Selling!!
        </div>
        <div className="flex justify-center items-center text-yellow-500 md:text-4xl text-2xl">
          Customer Choice
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        {/* PEODUCT GRID END */}
        <WhyChooseUs />
      </Wrapper>
    </main>
  );
}
