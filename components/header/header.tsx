// import React from 'react'
import Image from 'next/image';
import Logo from '@/public/assets/LogoBlack.png';
import MenuIcon from '@/public/assets/menu.png';

interface HeaderProps {
  setIsOpen: any;
}
const Header = ({ setIsOpen }: HeaderProps) => {
  return (
    <div className="w-full h-[60px] backdrop-blur-lg flex items-center justify-center fixed top-0 right-0 left-0 px-[15px] tablet:px-[35px] laptop:px-[100px]">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center space-x-[2.5rem]">
          <a href="#hero">

            <Image
              src={Logo}
              height={40}
              width={40}
              alt="logo"
              className="object-contain"
            />
          </a>
          <div className="tablet:flex hidden text-center  ">
            <ul className="gap-x-4  flex items-center">
              <li className="text-[20px] tablet:text-[16px] tablet:font-normal font-normal cursor-pointer">
                <a href="#about-us">About us</a>
              </li>
              <li className="text-[20px] tablet:text-[16px] tablet:font-normal font-normal cursor-pointer">
                <a href="#how-it-works">How it works</a>
              </li>
              <li className="text-[20px] tablet:text-[16px] tablet:font-normal font-normal cursor-pointer">
                <a href="#pricing">Pricing</a>
              </li>
              <li className="text-[20px] tablet:text-[16px] tablet:font-normal font-normal cursor-pointer">
                <a href="#faqs">FAQs</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="tablet:hidden">
          <div className="cursor-pointer" onClick={() => setIsOpen(true)}>
            <Image
              src={MenuIcon}
              height={70}
              width={70}
              alt="Menu icon"
              className="object-contain"
            />
          </div>
        </div>

        <div className="hidden tablet:flex space-x-3 items-center justify-center">
          {/* <div className=" flex gap-x-3 "> */}
          <button className="bg-[#FFFFFF] px-[30px] tablet:font-normal  py-2 rounded-sm text-[#151515] text-[18px] tablet:text-[16px]">
            Login
          </button>
          <button className="bg-[#151515] px-[30px] tablet:font-normal py-2 rounded-sm text-[#FFFFFF] text-[18px] tablet:text-[16px] ">
            Sign Up
          </button>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
