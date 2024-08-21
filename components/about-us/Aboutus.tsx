import Image from 'next/image';

import AboutUsIllustration from '@/public/assets/Illustration_2.png';
import DotIcon from '@/public/assets/dot_black.png';

const AboutUs = () => {
  return (
    <div id='about-us' className="pt-[80px] tablet:mt-[120px] tablet:flex tablet:space-x-5 tablet:justify-between">
      <div className="hidden tablet:px-[2rem] tablet:flex mt-[60px] px-4 w-[45%]">
        <Image
          src={AboutUsIllustration}
          alt="About us illustration"
          className="w-full h-full object-contain "
        />
      </div>
      <div className="tablet:w-[55%]">
        <div className="flex flex-col gap-8">
          <p className="px-[10px] py-[6px] font-semibold border border-[#151515] w-[120px] text-center text-[#151515]">
            About US
          </p>

          <div className="flex flex-col space-y-4">
            <h2 className="text-[#151515] text-[40px] leading-[56px] tracking-[-4px]">
              Faster, friendlier feedback loops make life easier
            </h2>

            <p className="text-[15px] text-[#151515] leading-[24px] tracking-[0px]">
              Add a viewer to your team so they can see everything you share, or
              invite people to to individual documents. It's up to you.
              Stakeholders can check out designs in their in their web browser,
              test prototypes and leave feedback for free.
            </p>
          </div>
        </div>

        <div className="mt-[60px] px-4 tablet:hidden">
          <Image
            src={AboutUsIllustration}
            alt="About us illustration"
            className="w-full h-full "
          />
        </div>
        <div className="mt-[2rem] w-full flex flex-col space-y-4">
          <span className="flex items-start space-x-3 ">
            <Image
              src={DotIcon}
              alt="dot Icon"
              width={30}
              height={40}
            // className="flex "
            />
            <p className="text-[18px] text-[#151515] leading-[28px] tracking-[0px">
              Shared Cloud Libraries, for a single source of truth
            </p>
          </span>
          <span className="flex items-start space-x-3  ">
            <Image
              src={DotIcon}
              alt="dot Icon"
              width={30}
              height={40}
              className=""
            />
            <p className="text-[18px] text-[#151515] leading-[28px] tracking-[0px]">
              Prototype previews for user testing research
            </p>
          </span>
          <span className="flex items-start space-x-3  ">
            <Image
              src={DotIcon}
              alt="dot Icon"
              //   width={40}
              //   height={40}
              className="flex items-start min-w-[30px] "
            />
            <p className="text-[18px] text-[#151515] leading-[28px] tracking-[0px] text-start break-words">
              Easy organization with projects.{' '}
            </p>
          </span>
          <span className="flex items-start space-x-3  ">
            <Image
              src={DotIcon}
              alt="dot Icon"
              //   width={40}
              //   height={40}
              className="flex items-start min-w-[30px]"
            />
            <p className="text-[18px] text-[#151515] leading-[28px] tracking-[0px] text-start">
              Free developer handoff, right inside the browser
            </p>
          </span>
          <span className="flex items-start space-x-3  ">
            <Image
              src={DotIcon}
              alt="dot Icon"
              //   width={40}
              //   height={40}
              className="flex items-start min-w-[30px]"
            />
            <p className="text-[18px] text-[#151515] leading-[28px] tracking-[0px] text-start">
              Two-factor authentication and SSO
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
