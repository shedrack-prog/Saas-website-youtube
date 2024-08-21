import Image from 'next/image';
import Logo from '@/public/assets/LogoWhite.png';
import { socialData } from '@/data';

const FooterSection = () => {
  return (
    <div id='footer' className="p-3">
      <div className=' space-y-6'>
        <div className="tablet:flex  justify-between">
          <div className='tablet:max-w-[37%]'>
            <Image
              src={Logo}
              height={50}
              width={50}
              alt="logo"
              className="object-cover text-white"
            />

            <h2 className="text-[28px] leading-[42px] mt-[2rem] tracking-[-1px] text-[#FFFFFF]">
              Want to receive our awesome stories?
            </h2>

            <div className="mt-[20px] mb-[60px] border-[1px] border-gray-200">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white focus:border-none  w-[60%] text-[##151515] text-[15px] leading-[24px] px-2 py-3 text-center placeholder:text-[#151515]"
              />
              <button className=" bg-[#151515] text-[15px] leading-[24px] text-white px-[2px] py-3 w-[40%]">
                Get started
              </button>
            </div>

          </div>


          <div className="hidden tablet:flex flex-col items-left text-[#FFFFFF] space-y-2 ">
            <span className="font-bold text-[14px] leading-[28px] tracking-[0px]">
              Email
            </span>
            <span className='text-[14px] font-normal'>Info@the18design</span>
          </div>
          <div className="text-center mb-5 tablet:mb-0 tablet:text-left">

            <ul className="flex flex-col space-y-2">
              <li className="text-[15px] leading-[26px] text-[#FFFFFF] tracking-[0px]">
                <a href="/"> About us</a>
              </li>
              <li className="text-[15px] leading-[26px] text-[#FFFFFF] tracking-[0px]">
                <a href="/">How it works</a>
              </li>
              <li className="text-[15px] leading-[26px] text-[#FFFFFF] tracking-[0px]">
                <a href="/">Pricing</a>
              </li>
              <li className="text-[15px] leading-[26px] text-[#FFFFFF] tracking-[0px]">
                <a href="/"> FAQs</a>
              </li>
            </ul>
          </div>
          <div className="text-center flex flex-col space-y-5 tablet:text-left">
            <ul className="flex flex-col space-y-2">
              <li className="text-[15px] leading-[26px] text-[#FFFFFF] tracking-[0px]">
                Lead generation
              </li>
              <li className="text-[15px] leading-[26px] text-[#FFFFFF] tracking-[0px]">
                Customer engagement
              </li>
              <li className="text-[15px] leading-[26px] text-[#FFFFFF] tracking-[0px]">
                Customer support
              </li>

              <li className="text-[15px] leading-[26px] text-[#FFFFFF] tracking-[0px]">
                Help Center Articles
              </li>
              <li className="text-[15px] leading-[26px] text-[#FFFFFF] tracking-[0px]">
                Outbound Messages
              </li>
            </ul>
            <div className=" tablet:flex flex-col items-left text-[#FFFFFF] space-y-2 ">
              <span className="font-bold text-[14px] leading-[28px] tracking-[0px]">
                Email
              </span>
              <span className='text-[14px] font-normal'>Info@the18design</span>
            </div>
          </div>



        </div>
        <div className='flex flex-col tablet:flex-row items-center tablet:items-start justify-between w-full'>

          <div className="text-[#FFFFFF] flex space-x-1 items-center justify-center text-[15px] leading-[26px] tracking-[0px]">
            <span>&copy; 2023 The 18 Design,</span>
            <span>All rights reserved.</span>
          </div>
          <div className="flex   space-x-3">
            {socialData.map((item) => (
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <Image
                  src={item.icon}
                  height={50}
                  width={50}
                  alt={item.url}
                  className="object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
