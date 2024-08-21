'use client';

import AboutUs from '@/components/about-us/Aboutus';
import FAQs from '@/components/faqs/Faqs';
import FooterSection from '@/components/footer/Footer';
import Header from '@/components/header/header';
import HeroSection from '@/components/hero/HeroPage';
import HowItWorks from '@/components/how-it-works/HowItWorks';
import MobileNav from '@/components/mobile-nav';
import PricingSection from '@/components/pricing/Pricing';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <div className="px-[15px] tablet:px-[35px] laptop:px-[100px]">
        <Header setIsOpen={setIsOpen} />
        <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
        <HeroSection />
        <AboutUs />
        <HowItWorks />
        <PricingSection />
        <FAQs />
      </div>
      <div className=' bg-[#151515] px-[15px] tablet:px-[35px] laptop:px-[100px]'>

        <FooterSection />
      </div>
    </div>
  );
}
