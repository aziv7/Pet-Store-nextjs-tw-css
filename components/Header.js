import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <header className=' py-6 lg:absolute lg:w-full lg:left-0 '>
      <div className='container mx-auto flex flex-col gap-y-6 lg:flex-row h-full justify-between items-center relative'>
        <a href=''>
          <Image width={'80'} height='20' src={'/img/header/logo.svg'} />
        </a>
        <nav className='text-xl lg:gap-x-12 flex gap-x-4'>
          <a href=''>Services</a>
          <a href=''>About</a>
          <a href=''>Blog</a>
          <a href=''>Contact</a>
        </nav>
        <button className='lg:btn-outline btn btn-primary'>Sign up</button>
      </div>
    </header>
  );
};

export default Header;
