import Image from 'next/image';
import React from 'react';

// import Pet1 from '/img/pets/1.png';
const pets = [
  {
    id: 1,
    category: 'cat',
    name: 'Pika',
    image: '/img/pets/1.png',
  },
  {
    id: 2,
    category: 'bird',
    name: 'Redzy',
    image: '/img/pets/2.png',
  },
  {
    id: 3,
    category: 'fox',
    name: 'Filex',
    image: '/img/pets/3.png',
  },
  {
    id: 4,
    category: 'cat',
    name: 'Kenji',
    image: '/img/pets/4.png',
  },
  {
    id: 5,
    category: 'hamster',
    name: 'Zven',
    image: '/img/pets/5.png',
  },
  {
    id: 6,
    category: 'parrot',
    name: 'Xarv',
    image: '/img/pets/6.png',
  },
  {
    id: 7,
    category: 'fox',
    name: 'Javo',
    image: '/img/pets/7.png',
  },
  {
    id: 8,
    category: 'cat',
    name: 'Yuki',
    image: '/img/pets/8.png',
  },
  {
    id: 9,
    category: 'lion',
    name: 'Pandor',
    image: '/img/pets/9.png',
  },
  {
    id: 10,
    category: 'bird',
    name: 'Denzy',
    image: '/img/pets/10.png',
  },
  {
    id: 11,
    category: 'dog',
    name: 'Bobi',
    image: '/img/pets/11.png',
  },
  {
    id: 12,
    category: 'hamster',
    name: 'Asper',
    image: '/img/pets/12.png',
  },
];
const Pets = () => {
  return (
    <section className='bg-pets bg-center py-6 overflow-hidden'>
      <div className='flex flex-col lg:flex-row'>
        <div className='hidden xl:flex xl:w-[30%] xl:pl-[160px]'>badge</div>
        <div className='flex-1 flex flex-col lg:flex-row'>pets</div>
      </div>{' '}
    </section>
  );
};

export default Pets;
