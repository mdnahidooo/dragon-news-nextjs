import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';
import { format, formatDistance, formatRelative, subDays } from 'date-fns'


const Header = () => {
    return (
        <div>
            <div className='text-center py-8 space-y-2'>
                <Image src={logo} width={300} height={200} alt='Logo' className='mx-auto'></Image>
                <p className='text-[#706F6F]'>Journalism Without Fear or Favour!</p>
                <p>{format(new Date(), "eeee, MMM dd, yyyy")}</p>
            </div> 
        </div>
    );
};

export default Header;