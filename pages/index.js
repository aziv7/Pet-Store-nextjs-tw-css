import Head from 'next/head';
import Image from 'next/image';
import Adoption from '../components/Adoption';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Newsletter from '../components/Newsletter';
import Pets from '../components/Pets';
import Services from '../components/Services';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className='max-w-[1440px] mx-auto overflow-hidden'>
      <Hero />
      <Pets />
      <Services />
      <Adoption />
      <Newsletter />
      <Footer />
    </div>
  );
}
