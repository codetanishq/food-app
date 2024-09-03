import Link from "next/link";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Shop", url: "/shop" },
  { id: 3, name: "About", url: "/" },
  { id: 4, name: "Categories", subMenu: true },
  { id: 5, name: "Contact", url: "/" },
];

const subMenuData = [
  { id: 1, name: "product1", doc_count: 11 },
  { id: 2, name: "product2", doc_count: 12 },
  { id: 3, name: "product3", doc_count: 13 },
  { id: 4, name: "product4", doc_count: 14 },
];

const Menu = ({ showCatMenu, setshowCatMenu, categories }) => {
  return (
    <ul className="hidden md:flex items-center gap-8 font-medium text-black">
      {data.map((item) => (
        <React.Fragment key={item.id}>
          {item?.subMenu ? (
            <li
              className="cursor-pointer flex items-center gap-2 relative transition-all duration-500 hover:shadow-yellow-300 hover:text-yellow-500"
              onMouseEnter={() => setshowCatMenu(true)}
              onMouseLeave={() => setshowCatMenu(false)}
            >
              {item.name}
              <BsChevronDown size={14} />
              {showCatMenu && (
                <ul className="bg-white absolute top-6 left-0 min-w-[250px] px-1 py-1 text-black shadow-lg">
                  {categories?.map(({ attributes: c, id }) => {
                    const productCount = c?.products?.data?.length || 0;
                    console.log(`Category: ${c.name}, Products Count: ${productCount}`);

                    return (
                      <Link
                        key={id}
                        href={`/category/${c.slug}`}
                        onClick={() => setshowCatMenu(false)}
                      >
                        <li className="h-12 flex justify-between items-center px-3 hover:bg-black/[0.3] rounded-md">
                          {c.name}
                          <span className="opacity-50 text-sm">
                            {`(${productCount})`}
                          </span>
                        </li>
                      </Link>
                    );
                  })}
                </ul>
              )}
            </li>
          ) : (
            <li className="cursor-pointer transition-all duration-500 hover:shadow-yellow-300 hover:text-yellow-500">
              <Link href={item?.url}>{item.name}</Link>
            </li>
          )}
        </React.Fragment>
      ))}
    </ul>
  );
};

export default Menu;
