import React, { useState, useEffect } from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import Menu from "./Menu";

import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import MenuMobile from "./MenuMobile";
import Image from "next/image";
import { fetchDataFromApi } from "@/utils/api";
import { useSelector } from "react-redux";

const Header = () => {
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showCatMenu, setshowCatMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [categories, setCategories] = useState(null);

  const cart = useSelector((state) => state.cart || {});
  const cartItems = cart.cartItems || [];

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("-translate-y-[80px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  useEffect(() => {
    fetchcategories();
  }, []);
  const fetchcategories = async () => {
    const { data } = await fetchDataFromApi("/api/categories?populate=*");
    setCategories(data);
  };

  return (
    <header
      className={`w-full  h-[50px] md:h-[80px] flex bg-white items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <Wrapper className="h-[60px] flex justify-between items-center">
        <Link href="/">
          <img src="/logo.webp" alt="Logo" className="w-[60px] md:w-[80px]" />
        </Link>

        <Menu
          showCatMenu={showCatMenu}
          setshowCatMenu={setshowCatMenu}
          categories={categories}
        />

        {mobileMenu && (
          <MenuMobile
            showCatMenu={showCatMenu}
            setshowCatMenu={setshowCatMenu}
            setMobileMenu={setMobileMenu}
            categories={categories}
          />
        )}

        <div className="flex items-center text-black gap-2">
          {/* Icons start */}
          <div className="w-8 md:w-12 h-8 md:h-12 flex justify-center items-center rounded-full hover:bg-black/[0.05] cursor-pointer relative">
            <IoMdHeartEmpty className="text-[19px] md:text-[24px]" />
            <div
              className="h-[14px] min-w-[14px] md:h-[18px] md:min-h-[18px] bg-red-600 rounded-full absolute top-1 left-5 md:left-7 
                 text-white text-[8px] md:text-[10px] flex juatify-center items-center px-[1px] md:px-[5px] "
            >
              51
            </div>
          </div>
          {/* Icons end */}

          {/* Icons start */}
          <Link href="/cart">
            <div className="w-8 md:w-12 h-8 md:h-12 flex justify-center items-center rounded-full hover:bg-black/[0.05] cursor-pointer relative">
              <BsCart className="text-[15px] md:text-[20px]" />
              {cartItems.length > 0 && (
                <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                  {cartItems.length}
                </div>
              )}
            </div>
          </Link>
          {/* Icons end */}

          {/* Mobile menu start */}
          <div className="w-8 md:w-12 h-8 md:h-12 md:hidden flex justify-center items-center rounded-full hover:bg-black/[0.05] cursor-pointer relative -mr-2">
            {mobileMenu ? (
              <VscChromeClose
                className="text-[20px]"
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight
                className="text-[20px]"
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>
          {/* Mobile menu end */}
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
