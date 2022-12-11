import Image from 'next/image';
import React from 'react';

//import titleImg from '../public/img/pretitle-img.svg';
import Header from './Header';

const Hero = () => {
  return (
    <section className='bg-cream lg:bg-hero lg:bg-cover min-h-[400px] lg:min-h-[805px] lg:bg-no-repeat'>
      <Header />
      <div className='flex justify-center lg:justify-start items-center min-h-[400px] lg:h-[805px]  container mx-auto'>
        <div className='lg:max-w-[650px]  lg:text-left text-center'>
          <div className='hidden xl:flex mb-6 ml-5'>
            <Image width='453' height='68' src='/img/hero/pretitle-img.svg' />
          </div>
          <h1 className='text-5xl font-bold tracking-[0.05em] mb-10 lg:text-8xl uppercase'>
            A pet first <p className='text-orange font-normal'>approach to</p>{' '}
            <p>wellness</p>
          </h1>
          <button className='btn btn-orange lg:mx-0 mx-auto'>Learn more</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
