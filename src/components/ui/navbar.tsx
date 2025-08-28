
"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'


interface NavItems {
    label: string,
    href: string,
    subItems?: NavItems[]

}

const mainNavItems: NavItems[] = [
    {label: 'Home', href: '/'},
    {label: 'Categories', href: '/categories', subItems: [
        {label: 'Politics', href: '/categories/politics'},
        {label: 'Health', href: '/categories/health'},
        {label: 'Design', href: '/categories/design'},
    ]},
    {label: 'LifeStyle', href: '/lifestyle'},
    {label: 'Education', href: '/education'},
    {label: 'Health', href: '/health'},
    {label: 'Design', href: '/design'},
    {label: 'Technology', href: '/technology'},
    {label: 'Culture', href: '/culture'},
    {label: 'Contract', href: '/contract'},
    {label: 'More', href: '#', subItems: [
        {label: 'Search', href: '/search'},
        {label: 'About Us', href: '/about'},
        {label: 'Privacy Policy', href: '/privacy-policy'},
        {label: 'Terms of Service', href: '/terms-of-service'},
    ]}
      
]


const Navbar = () => {

    const pathName = usePathname();
    const [ isSearchOpen, setIsSearchOpen ] = useState(false);
    const [ isMobileMenuOpen, setIsMobileMenuOpen ] = useState(false);
    const theme = 'light' // TODO: get from context



  return (
    <header className='relative bg-white font-lora text-gray-800'>
        {/* top header  */}
        <div className='hidden lg:block py-3'>
            <div>
                <h1>
                    <Link href={''}></Link>
                </h1>
            </div>
        </div>
    </header>
  )
}

export default Navbar