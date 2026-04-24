import Link from 'next/link';
import React from 'react';
import userAvatar from '@/assets/user.png'
import Image from 'next/image';
import NavLink from './NavLink';

const Navbar = () => {
    
    return (
        <div className='w-11/12 mx-auto flex justify-between items-center gap-4 mt-6'>
            <div>
                
            </div>
            <ul className='flex justify-between items-center gap-3 text-gray-700'>
                <li><NavLink href={'/'}>Home</NavLink></li>
                <li><NavLink href={'/about-us'}>About</NavLink></li>
                <li><NavLink href={'/career'}>Career</NavLink></li>
            </ul>

            <div className='flex items-center gap-2'>
                <Image src={userAvatar} alt='User Avatar' width={50} height={50}></Image>
                <button className='btn bg-black text-white'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;