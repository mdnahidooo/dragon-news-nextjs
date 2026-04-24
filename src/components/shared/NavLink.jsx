'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, children }) => {
    const pathname = usePathname();
    console.log(pathname, "Path name");


    const isActive = href === pathname;


    return (
        <Link href={href} className={`${isActive ? 'border-b-2 border-[#D72050]' : ''}`}>
            {children}
        </Link>
    );
};

export default NavLink;