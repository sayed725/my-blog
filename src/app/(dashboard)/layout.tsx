"use client";
import { Button } from "@/components/ui/button";
import { SignInButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Add New Post", href: "/dashboard/add-post" },
  { label: "Manage Posts", href: "/dashboard/manage-posts" },
];

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const { user, isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  if (
    !isSignedIn ||
    !user?.publicMetadata?.role ||
    user?.publicMetadata?.role !== "admin"
  ) {
    return (
      <div className="flex items-center justify-center min-h-screen -mt-20">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
          <p className="text-gray-600">
            You must be signed in to access the admin panel.
          </p>
          <SignInButton>
            <button className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Sign In to Admin Panel
            </button>
          </SignInButton>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen blog-container flex flex-col md:flex-row">
      {/* aside  */}

      <aside className="w-full md:w-64 bg-gray-800 text-white shrink-0 -mt-16">
        <nav className="p-6 space-y-4">
          <h2 className="text-xl font-bold mb-4 text-center underline">Admin Panel</h2>

          <ul className="space-y-2 text-center ">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>

                 <Button
                  variant="secondary"
                  className={`w-1/2 lg:w-full lg:justify-start rounded hover:bg-gray-700 cursor-pointer ${
                    pathname === item.href ? "bg-gray-700 font-semibold" : ""
                  }`}
                >
                  {item.label}
                </Button>


                </Link>
               
              </li>
            ))}
          </ul>

          <div className="mt-8 text-center">
            <Link
              href="/"
             
            >
              <Button  className="bg-primary lg:justify-start w-1/2 lg:w-full rounded hover:bg-primary transition-colors text-center">
                Go to Home</Button>
            </Link>
          </div>
        </nav>
      </aside>

      <main className="flex-1 p-6">{children}</main>
    </section>
  );
};

export default DashboardLayout;
