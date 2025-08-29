"use client";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { BsChevronDown, BsInstagram, BsSearch } from "react-icons/bs";
import { FaBlog, FaFacebookF, FaTwitter } from "react-icons/fa6";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import { Button } from "./button";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { TiThMenu } from "react-icons/ti";
import { Input } from "./input";
import { Toggle } from "./toggle";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./dropdown-menu";

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

  const [theme, setTheme] = useState<"light" | "dark">("light"); // Placeholder for theme context

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    // TODO: Implement theme context or state management
  };

  return (
    <header className="relative bg-white font-lora text-gray-800">
      {/* top header  */}
      <div className="py-3">
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
          <div className="items-center space-x-3 hidden lg:flex">
            {/* search button */}
            <div className="relative">
              <Button
                variant="secondary"
                size="icon"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="cursor-pointer rounded-full border border-gray-300 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 ring-primary transition-colors"
              >
                <BsSearch size={18} />
              </Button>

              {isSearchOpen && (
                <form
                  action={"/search"}
                  className="absolute right-0 top-full mt-2 p-2 bg-white rounded-md shadow-lg w-48 md:w-72 z-10"
                >
                 <Input
                    type="text"
                    name="q"
                    placeholder="Search..."
                    className="w-full text-gray-500"
                  />
                </form>
              )}
            </div>

           {/* Theme Toggle */}
            <Toggle
              aria-label="Toggle theme"
              onPressedChange={toggleTheme}
              className="border rounded-full border-gray-300 p-2 hover:text-primary cursor-pointer"
            >
              {theme === "light" ? (
                <IoMdMoon className="h-5 w-5" />
              ) : (
                <IoMdSunny className="h-5 w-5" />
              )}
            </Toggle>

            {/* social network  */}

            <ul className="flex items-center space-x-3">
              <li className="border p-2 border-gray-300 rounded-full hover:text-blue-400 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 ring-primary">
                <Link href={"#"} className="text-gray-500 hover:text-blue-400">
                  <FaTwitter size={20} />
                </Link>
              </li>
              <li className="border p-2 border-gray-300 rounded-full hover:text-blue-500 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 ring-primary">
                <Link href={"#"} className="text-gray-500 hover:text-blue-400">
                  <FaFacebookF size={20} />
                </Link>
              </li>
              <li className="border p-2 border-gray-300 rounded-full hover:bg-gray-100 hover:text-red-400 transition-colors focus:outline-none focus:ring-2 ring-primary">
                <Link href={"#"} className="text-gray-500 hover:text-red-400">
                  <BsInstagram size={20} />
                </Link>
              </li>
            </ul>

            {/* contact & login button  */}

            <Button
              variant="secondary"
              className=" border border-gray-300 text-gray-800 rounded-md hover:bg-primary hover:text-white transition-colors cursor-pointer"
            >
              <Link href={"/contract"}>Contract</Link>
            </Button>

            {/* clerk  */}

            <SignedOut>
              <SignInButton mode="modal">
                <Button className="border border-gray-300  bg-primary text-white rounded-md hover:bg-primary hover:text-white transition-colors cursor-pointer">
                  Sign In
                </Button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>

          {/* mobile menu sheet  */}

          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger>
                <TiThMenu size={24} />
              </SheetTrigger>
              <SheetContent className="bg-white">
                <SheetHeader>
                  <SheetTitle>
                    {" "}
                    <div className="flex-shrink-0 px-4">
                      <Link
                        href={""}
                        className="text-2xl font-semibold text-gray-900 hover:text-primary transition-colors flex items-center"
                      >
                        <FaBlog />
                        <span className="ml-1">Blogs</span>
                      </Link>
                    </div>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-2 px-4">
                 <ul className="flex flex-col space-y-2">
            {mainNavItems.map((item, key) => {
              const isActive = pathName === item.href;

              return (
                <li key={key} className="group relative">
                  {
                    item.subItems ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                          variant="ghost"
                          className={`text-sm uppercase font-medium border-none ${
                            isActive ? "text-primary" : "hover:text-primary"
                          }`}
                        >
                          {item.label}
                          <BsChevronDown />
                        </Button>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent className="bg-white border border-gray-200">
                                {item.subItems.map((subItem, subKey) => (
                          <DropdownMenuItem key={subKey} asChild >
                            <Link
                              href={subItem.href}
                              className={`text-sm uppercase ${
                                pathName === subItem.href
                                  ? "text-primary"
                                  : "text-foreground hover:text-primary"
                              }`}
                            >
                              {subItem.label}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                            </DropdownMenuContent>

                        </DropdownMenu>
                    ) : (
                        <Button
                      variant="ghost"
                      asChild
                      className={`text-sm uppercase font-medium ${
                        isActive ? "text-primary" : "text-foreground hover:text-primary"
                      }`}
                    >
                      <Link href={item.href}>{item.label}</Link>
                    </Button>
                    )
                  }
                </li>
              );
            })}
          </ul>

                     {/* clerk  */}

            <SignedOut>
              <SignInButton mode="modal">
                <Button  className="border border-gray-300  bg-primary text-white rounded-md hover:bg-primary hover:text-white transition-colors cursor-pointer">
                  Sign In
                </Button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <UserButton />
            </SignedIn>
                    
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* main nav  */}

      <nav className="py-3 border-b border-gray-200">
        {/* large device  */}

        <div className="blog-container">
          {/* mobile toggle menu */}

          <ul className="hidden lg:flex items-center justify-between">
            {mainNavItems.map((item, key) => {
              const isActive = pathName === item.href;

              return (
                <li key={key} className="group relative">
                  {
                    item.subItems ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                          variant="ghost"
                          className={`text-sm uppercase font-medium border-none ${
                            isActive ? "text-primary" : "hover:text-primary"
                          }`}
                        >
                          {item.label}
                          <BsChevronDown />
                        </Button>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent className="bg-white border border-gray-200">
                                {item.subItems.map((subItem, subKey) => (
                          <DropdownMenuItem key={subKey} asChild >
                            <Link
                              href={subItem.href}
                              className={`text-sm uppercase ${
                                pathName === subItem.href
                                  ? "text-primary"
                                  : "text-foreground hover:text-primary"
                              }`}
                            >
                              {subItem.label}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                            </DropdownMenuContent>

                        </DropdownMenu>
                    ) : (
                        <Button
                      variant="ghost"
                      asChild
                      className={`text-sm uppercase font-medium ${
                        isActive ? "text-primary" : "text-foreground hover:text-primary"
                      }`}
                    >
                      <Link href={item.href}>{item.label}</Link>
                    </Button>
                    )
                  }
                </li>
              );
            })}
          </ul>
        </div>

        {/* mobile menu */}
      </nav>
    </header>
  );
};

export default Navbar;
