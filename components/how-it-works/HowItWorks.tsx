import Image from 'next/image';

import { HowItWorksData } from '../../data';

import HowItWorksIllustration from '@/public/assets/Illustration_3.png';
import { cn } from '@/lib/utils';

const HowItWorks = () => {
  return (
    <div id='how-it-works' className="pt-[4rem] tablet:mt-[7rem]">
      <div className="flex justify-between">
        <div className="tablet:w-[55%]">
          <p className="px-[10px] uppercase py-[6px] font-semibold border border-[#151515] w-[150px] text-center text-[#151515]">
            How It works
          </p>

          <h2 className="text-[#151515] text-[44px] leading-[56px] tracking-[-4px] mt-[1rem]">
            Building the best space for collaboration
          </h2>

          <div className="mt-[40px] ">
            <Image
              src={HowItWorksIllustration}
              alt="About us illustration"
              className="w-full  tablet:hidden"
            />

            <div className="mt-[50px] flex flex-col gap-y-8">
              {HowItWorksData.map((data, index) => (
                <div className="tablet:flex tablet:space-x-3">
                  <span>
                    <Image
                      src={data.icon}
                      alt={data.title}
                      className={cn(" w-[60px] h-[40px] mr-[10px]",
                        index === HowItWorksData.length - 1 && 'w-[37px]')}
                      // layout="fixed"
                      objectFit="contain"
                    />
                  </span>
                  <div>
                    <h2 className="text-[#151515] text-[20px] font-medium leading-[120%] tracking-[0px]">
                      {data.title}
                    </h2>
                    <p className="text-[#151515] text-[15px] mt-[1rem] leading-[26px]">
                      {data.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="hidden tablet:flex w-[45%] h-[50%] p-[30px]">
          <Image
            src={HowItWorksIllustration}
            alt="About us illustration"
            className="w-full h-full object-cover"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
