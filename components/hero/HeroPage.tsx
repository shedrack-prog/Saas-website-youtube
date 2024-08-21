import Image from 'next/image';

import VisaLogo from '@/public/assets/m_visa.png';
import MasterCardLogo from '@/public/assets/m_mastercard.png';
import PaypalLogo from '@/public/assets/m_paypall.png';
import Illustration1 from '@/public/assets/Illustration_1.png';

const HeroSection = () => {
  return (
    <div id='hero' className="pt-[8rem] w-full ">
      <div className="flex justify-between space-x-7 laptop:space-x-[7rem] items-center">
        <div className="tablet:w-[65%] laptop:w-[60%]">
          <h2 className="text-[52px] tablet:text-[45px] break-words text-[#151515] leading-[60px] tracking-[-4px] text-left">
            Always Track & Analyze Your Business Statistics To Succeed.
          </h2>
          <p className="mt-[20px] tablet:mt-[15px] text-[#151515] text-[18px] leading-[-26px]">
            A better way to manage your sales, teams, client & marketing- on a
            single platform. powerful, affordable & easy.
          </p>

          <div className="mt-[20px] tablet:mt-[15px] mb-[60px]">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-[60%] bg-white tablet:w-[65%]  text-[##151515] text-[18px] leading-[24px] px-2 py-4 text-center placeholder:text-[#151515]"
            />
            <button className=" mt-[20px] tablet:mt-0 bg-[#151515] text-[18px] leading-[24px] text-white px-[2px] py-4 w-[30%] tablet:w-[35%]">
              Get started
            </button>
          </div>

          <span className="tablet:w-[50%] flex items-center justify-between">
            <Image
              src={VisaLogo}
              alt="Visa card Logo"
              width={80}
              height={40}
              className="object-contain"
            />
            <Image
              src={MasterCardLogo}
              alt="Master card Logo"
              width={80}
              height={40}
              className="object-contain"
            />
            <Image
              src={PaypalLogo}
              alt="Paypal Logo"
              width={120}
              height={80}
              className="object-cover "
            />
          </span>
        </div>
        <div className="hidden tablet:flex">
          <Image
            src={Illustration1}
            alt="Paypal Logo"
            width={250}
            height={250}
            className="object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
