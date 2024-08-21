import Logo from '@/public/assets/LogoBlack.png';
import Image from 'next/image';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: any;
}

const MobileNav = ({ isOpen, setIsOpen }: MobileNavProps) => {
  return (
    <div
      className={cn(
        'pt-[15px] shadow-md transition-all duration-150 px-4 -left-[200px] top-0 bottom-0 fixed z-50 bg-[#F0F0F0] text-#151515',
        isOpen && 'w-[350px] left-0 transition-all duration-150'
      )}
    >
      <div className="flex justify-between">
        <a href="#hero" onClick={() => setIsOpen(false)}>

          <Image
            src={Logo}
            height={30}
            width={30}
            alt="logo"
            className="object-cover"
          />
        </a>
        <X
          className="w-7 h-7 cursor-pointer"
          onClick={() => setIsOpen(false)}
        />
      </div>
      <ul className="flex flex-col gap-y-4 mt-[2.5rem]">
        <li className="text-[21px] font-normal cursor-pointer">
          <a onClick={() => setIsOpen(false)} href="#about-us">About us</a>
        </li>
        <li className="text-[21px] font-normal cursor-pointer">
          <a onClick={() => setIsOpen(false)} href="#how-it-works">How it works</a>
        </li>
        <li className="text-[21px] font-normal cursor-pointer">
          <a onClick={() => setIsOpen(false)} href="#pricing">Pricing</a>
        </li>
        <li className="text-[21px] font-normal cursor-pointer">
          <a onClick={() => setIsOpen(false)} href="#faqs">FAQs</a>
        </li>
      </ul>

      <div className="mt-[2rem] flex flex-col space-y-4">
        <button className="bg-[#FFFFFF] px-[15px] w-full  py-3 rounded-sm text-[#151515] text-[18px] font-semibold">
          Login
        </button>
        <button className="bg-[#151515] px-[15px] w-full  py-3 rounded-sm text-[#FFFFFF] text-[18px] font-normal">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default MobileNav;
