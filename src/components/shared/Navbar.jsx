"use client"

import Link from 'next/link';
import React from 'react';
import userAvatar from '@/assets/user.png'
import Image from 'next/image';
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {

    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    return (
        <div className='w-11/12 mx-auto flex flex-col md:flex-row items-center gap-4 mt-6'>

            {/* left */}
            <div className='flex-1 hidden md:block'></div>

            {/* center nav */}
            <ul className='flex flex-1 justify-center items-center text-gray-700 gap-3 text-sm md:text-base'>
                <li><NavLink href={'/'}>Home</NavLink></li>
                <li><NavLink href={'/about-us'}>About</NavLink></li>
                <li><NavLink href={'/career'}>Career</NavLink></li>
            </ul>

            {/* right */}
            {isPending ? (
                <span className="loading loading-spinner loading-lg"></span>
            ) : user ? (
                <div className="flex flex-1 justify-center md:justify-end items-center gap-2 text-sm md:text-base">
                    <h2>Hello, {user.name}</h2>

                    <Image
                        src={user.image || userAvatar}
                        alt="User avatar"
                        width={40}
                        height={40}
                        className="md:w-15 md:h-15"
                    />

                    <button
                        className="btn bg-[#D72050] text-white btn-sm md:btn-md"
                        onClick={async () => await authClient.signOut()}
                    >
                        <Link href={"/"}>LogOut</Link>
                    </button>
                </div>
            ) : (
                <div className="flex flex-1 justify-center md:justify-end">
                    <button className="btn bg-[#D72050] text-white btn-sm md:btn-md">
                        <Link href={"/login"}>Login</Link>
                    </button>
                </div>
            )}
        </div>
    );
};

export default Navbar;