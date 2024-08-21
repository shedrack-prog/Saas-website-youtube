import icon1 from '/public/assets/icon_1.png';
import icon2 from '/public/assets/icon_2.png';
import icon3 from '/public/assets/icon_3.png';
import icon4 from '/public/assets/icon_4.png';

import price1 from '/public/assets/pricing1.png';
import price2 from '/public/assets/pricing2.png';
import price3 from '/public/assets/pricing3.png';
import blackDot from '/public/assets/dot_black.png';
import whiteDot from '/public/assets/dot_white.png';

import fbIcon from '/public/assets/social_fb.png';
import twIcon from '/public/assets/social_tw.png';
import glIcon from '/public/assets/social_gl.png';
import inIcon from '/public/assets/social_in.png';
import ytIcon from '/public/assets/social_yt.png';

export const HowItWorksData = [
  {
    id: 1,
    icon: icon1,
    title: 'Shared Cloud Libraries',
    description:
      'Navigate to the Your work panel in the left sidebar. Select the library you want to share. Select the share icon in the right to share the library.',
  },
  {
    id: 2,
    icon: icon2,
    title: 'Free developer hand-off, right inside',
    description:
      'Cloud Inspector makes it easy for developers to get the information they need to turn pixels into code -all in the browser and, most importantly, for free. ',
  },
  {
    id: 3,
    icon: icon3,
    title: 'Real-time collaborative editing',
    description:
      'Room Service helps you build real-time collaborative features. Add real-time data sync! Let users edit the same data at the same time. ',
  },
  {
    id: 4,
    icon: icon4,
    title: 'Integrations with the Cloud API',
    description:
      'Unlocking that value requires an iPaaS that delivers the transformative power of APIs and integration. ',
  },
];

export const pricingData = [
  {
    id: 1,
    price: price1,
    description: 'A pay-once license, just for you.',
    perks: ['The Mac app', 'Beautiful white_level', 'One  year of saving'],
    darkBg: false,
    icon: blackDot,
  },
  {
    id: 2,
    price: price2,
    description: `Pro account, just for you.`,
    perks: [
      'The Mac app',
      'One year of Mac app',
      'One  year of saving',
      'A personal Cloud',
      'All tools, just for you.',
    ],
    darkBg: true,

    icon: whiteDot,
  },
  {
    id: 3,
    price: price3,
    description: 'A subscription for the whole team',
    perks: [
      'Access to the Mac app',
      'Cloud workspace',
      'Free Cloud access',
      'Easy team management',
      'No license key required',
    ],
    darkBg: false,
    icon: blackDot,
  },
];
export const socialData = [
  {
    id: 1,
    icon: fbIcon,
    url: 'https://www.facebook.com',
  },
  {
    id: 2,
    icon: twIcon,
    url: 'https://www.twitter.com',
  },
  {
    id: 3,
    icon: glIcon,
    url: 'https://www.google.com',
  },
  {
    id: 4,
    icon: inIcon,
    url: 'https://www.linkedin.com',
  },
  {
    id: 5,
    icon: ytIcon,
    url: 'https://www.youtube.com',
  },
];
