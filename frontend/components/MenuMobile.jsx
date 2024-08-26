import Link from "next/link";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Shop", url: "/" },
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

const MenuMobile = ({ showCatMenu, setshowCatMenu, setMobileMenu,categories }) => {
  return (
    <ul className="flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px) bg-white border-t text-black ">
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {!!item?.subMenu ? (
              <li
                className="cursor-pointer py-4 px-5 border-b flex flex-col relative"
                onClick={() => {
                  setshowCatMenu(!showCatMenu);
                }}
              >
                <div className="flex justify-between items-center">
                  {item.name}
                  <BsChevronDown size={14} />
                </div>
                {showCatMenu && (
                  <ul className="bg-black/[0.05] -mx-5 mt-4 -mb-4">
                    {categories?.map(({ attributes: c, id }) => {
                    const productCount = c?.products?.data?.length || 0;
                    console.log(`Category: ${c.name}, Products Count: ${productCount}`);
                      return (
                        <Link
                          key={id}
                          href={`/category/${c.slug}`}
                          onClick={() => {
                            setshowCatMenu(false);
                            setMobileMenu(false);
                          }}
                        >
                          <li className="py-4 px-8 border-t flex justify-between">
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
              <li className="py-4 px-5 border-b">
                <Link href={item?.url} onClick={() => setMobileMenu(false)}>
                  {item.name}
                </Link>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default MenuMobile;
