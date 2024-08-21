import { pricingData } from '@/data';
import { cn } from '@/lib/utils';
import pricingIllustration from '@/public/assets/Illustration_4.png';
import Image from 'next/image';

const PricingSection = () => {
  return (
    <div id='pricing' className="pt-[6rem]">
      <div>
        <div className="tablet:flex tablet:justify-between">
          <div className="tablet:w-[50%] tablet:hidden tablet:text-right">
            <p className="px-[10px] py-[6px] font-semibold border border-[#151515] w-[120px] text-center text-[#151515]">
              Pricing
            </p>

            <div className="flex flex-col space-y-4 mt-[30px]">
              <h2 className="text-[#151515] text-[44px] leading-[56px] tracking-[-4px] ">
                Select a membership level the right price for you.
              </h2>

              <p className="text-[16px] text-[#151515] tablet:px-[20px] leading-[24px] tracking-[0px]">
                Prices listed in USD. Taxes may apply. By using program you
                agree to our terms and policies.
              </p>
            </div>
          </div>
          <div className="mt-[40px] tablet:w-[45%] p-[30px]">
            <Image
              src={pricingIllustration}
              alt="About us illustration"
              className="w-[300px] h-full"
            />
          </div>

          <div className="hidden tablet:flex flex-col text-right items-end tablet:w-[40%] laptop:w-[50%] tablet:text-right px-2">
            <p className="px-[10px] py-[6px] font-semibold border border-[#151515] w-[120px] text-center text-[#151515]">
              Pricing
            </p>

            <div className="flex flex-col space-y-4 mt-[30px]">
              <h2 className="text-[#151515] text-[44px] leading-[56px] tracking-[-4px] ">
                Select a membership level the right price for you.
              </h2>

              <p className="text-[16px] text-[#151515] tablet:px-[20px] leading-[24px] tracking-[0px]">
                Prices listed in USD. Taxes may apply. By using program you
                agree to our terms and policies.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-[3rem] space-y-3 tablet:space-y-0 tablet:gap-x-[2rem] tablet:flex items-center justify-center gap-x-4">
          {pricingData.map((item, index) => (
            <div
              key={item.id}
              className={cn(
                'min-h-[500px]  min-w-[300px] flex flex-col space-y-[20px] px-4 pt-[3rem]  justify-between pb-[2rem]',
                item.darkBg ? 'bg-[#000000]' : 'bg-[#FFFFFF]',
                index === 0 && 'border-[1px] border-[#151515]'
              )}
            >
              <Image
                src={item.price}
                alt="Pricing"
                className="mt-[.5rem]"
                width={100}
              />
              <div>
                <h2
                  className={cn(
                    'text-[18px] leading-[28px] tracking-[0px] ',
                    item.darkBg ? 'text-[#FFFFFF]' : 'text-[#000000]'
                  )}
                >
                  {item.description}
                </h2>
                <span className="mt-[2rem] flex flex-col gap-y-3">
                  {item.perks.map((perk, index) => (
                    <div
                      key={index}
                      className="gap-x-4 space-y-6 py-auto flex items-center "
                    >
                      <span className="flex items-center ">
                        <Image
                          // className="flex"
                          src={item.icon}
                          alt="dot icon"
                        />
                        <p
                          className={cn(
                            'text-[15px]  tracking-[0px] leading-[28px]',
                            item.darkBg ? 'text-[#FFFFFF]' : 'text-[#000000]'
                          )}
                        >
                          {perk}
                        </p>
                      </span>
                    </div>
                  ))}
                </span>
              </div>
              <button
                className={cn(
                  'w-[70%] py-[11px] text-[15px] leading-[28px] mx-auto  text-center ',
                  item.darkBg ? 'text-[#000000]' : 'text-[#FFFFFF]',
                  item.darkBg ? 'bg-[#FFFFFF]' : 'bg-[#000000]'
                )}
              >
                Join
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
