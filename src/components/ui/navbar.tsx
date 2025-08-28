"use client";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { BsInstagram, BsSearch } from "react-icons/bs";
import { FaBlog, FaFacebookF, FaTwitter } from "react-icons/fa6";
import { IoMdMoon, IoMdSunny } from "react-icons/io";

interface NavItems {
  label: string;
  href: string;
  subItems?: NavItems[];
}

const mainNavItems: NavItems[] = [
  { label: "Home", href: "/" },
  {
    label: "Categories",
    href: "/categories",
    subItems: [
      { label: "Politics", href: "/categories/politics" },
      { label: "Health", href: "/categories/health" },
      { label: "Design", href: "/categories/design" },
    ],
  },
  { label: "LifeStyle", href: "/lifestyle" },
  { label: "Education", href: "/education" },
  { label: "Health", href: "/health" },
  { label: "Design", href: "/design" },
  { label: "Technology", href: "/technology" },
  { label: "Culture", href: "/culture" },
  { label: "Contract", href: "/contract" },
  {
    label: "More",
    href: "#",
    subItems: [
      { label: "Search", href: "/search" },
      { label: "About Us", href: "/about" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
    ],
  },
];

const Navbar = () => {


  const pathName = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const theme = "light"; // TODO: get from context

  return (
    <header className="relative bg-white font-lora text-gray-800">
      {/* top header  */}
      <div className="hidden lg:block py-3">
        <div className="blog-container flex items-center justify-between">

            {/* top header left side */}
          <h1 className="flex-shrink-0">
            <Link
              href={""}
              className="text-2xl font-semibold text-gray-900 hover:text-primary transition-colors flex items-center"
            >
              <FaBlog />
              <span className="ml-1">Blogs</span>
            </Link>
          </h1>

          {/*  top header right side */}
          <div className="flex items-center space-x-3">

            {/* search button */}
            <div>
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 rounded-full text-gray-500 transition-colors focus:outline-none hover:text-primary cursor-pointer"
              >
                <BsSearch size={18} />
              </button>

              {isSearchOpen && (
                <form action={"/search"} className="absolute right-0 top-full mt-2 p-2 bg-white rounded-md shadow-lg w-48 md:w-72 z-10 border border-gray-300">
                  <input
                    type="text"
                    name="q"
                    placeholder="Search..."
                    className="w-full px-3 py-2 rounded-md border border-gray-300 bg-gray-50 text-gray-500 focus:outline-none"
                  />
                </form>
              )}
            </div>

            {/* theme toggle */}

            <button className="p-2 rounded-full text-gray-500 hover:text-primary transition-colors focus:outline-none focus:ring-2 ring-primary">
                { theme === "light" ? <IoMdMoon size={18}/> : <IoMdSunny size={18}/>}
                  
            </button>

            {/* social network  */}

            <ul className="flex items-center space-x-3">
                <li className="border p-2 border-gray-300 rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 ring-primary">
                    <Link href={"#"} className="text-gray-500" >
                    <FaTwitter size={20}/>
                    
                    </Link>
                </li>
                <li className="border p-2 border-gray-300 rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 ring-primary">
                    <Link href={"#"} className="text-gray-500" >
                    <FaFacebookF size={20}/>
                    
                    </Link>
                </li>
                <li className="border p-2 border-gray-300 rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 ring-primary">
                    <Link href={"#"} className="text-gray-500" >
                    <BsInstagram size={20}/>
                    
                    </Link>
                </li>
            </ul>


            {/* contact & login button  */}


            
                <Link href={"/contract"} className="px-5 py-1.5 border border-gray-300 text-gray-800 rounded-md hover:bg-primary hover:text-white transition-colors  focus:outline-none focus:ring-2 ring-primary cursor-pointer">
                    Contract
                </Link>
               
              {/* clerk  */}

                <SignedOut>
                    <SignInButton mode="modal">
                        <button className="px-5 py-1.5 border border-gray-300  bg-primary text-white rounded-md hover:bg-primary hover:text-white transition-colors  focus:outline-none focus:ring-2 ring-primary cursor-pointer">Sign In</button>
                    </SignInButton>
                </SignedOut>


                <SignedIn>
                    <UserButton/>
                </SignedIn>

               








          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
