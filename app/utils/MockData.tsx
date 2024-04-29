import React from 'react';
// import IconMen from '../Icons/IconMen';
// import IconWomen from '../Icons/IconWomen';
// import IconDevices from '../Icons/IconDevices';
// import IconGadget from '../Icons/IconGadget';
// import IconGaming from '../Icons/IconGaming';
// import IconToy from '../Icons/IconToy';
// import IconClock from '../Icons/IconClock';
// import IconLaptop from '../Icons/IconLaptop';
// import IconMenWear from '../Icons/IconMenWear';
// import IconSmartphone from '../Icons/IconSmartphone';
// import IconWallClock from '../Icons/IconWallClock';
// import IconWatch from '../Icons/IconWatch';
import { Image } from 'react-native';
// import { appColors } from './appColors';
import menWearImage from '../static/images/menwear.jpg';
import clockImage from '../static/images/clock.jpeg';
import smartphoneImage from '../static/images/smartphone.jpeg';
import laptopImage from '../static/images/laptop.jpeg';
import watchImage from '../static/images/watch.jpeg';
import wallClockImage from '../static/images/wallclock.jpeg';
import headphoneImage from '../static/images/headphone.jpeg';
import toyImage from '../static/images/toy.webp';
import {appColors} from './appColors';
export const features = [
  'Always up-to-date React Native scaffolding',
  'Modular and well-documented structure for application code',
  'Redux for state management',
  'React Navigation for simple navigation',
  'Dropdown Alert Helper for showing success/error/info message',
  'Basic custom components like Text input,Label and picker select etc',
];
export const starterIntro = [
  'We love building apps with React Native, because it helps us create high quality products for both major mobile platforms quickly and cost-effectively.',
  'Getting started on a new app just takes too long. Most apps need the same basic building blocks and developer infrastructure, and we are bored of reinventing the wheel time and time again.',
  'This Starter Kit reflects the best practices of React Native development we have discovered while building real-world applications for our customers. It is opinionated about tooling, patterns and development practices. It might not be a one-size-fits-all solution for everyone, but feel free to customize it for your needs, or just take inspiration from it.',
];
export const bestSellersList = [
  {
    name: 'BeoPlay Speaker',
    description: 'Bang and Olufsen',
    price: '$755',
    image: require('../static/images/products/2.png'),
  },
  {
    name: 'Wrist watch',
    description: 'Tag Heuer',
    price: '$499',
    image: require('../static/images/products/2.png'),
  },
  {
    name: 'Nike FIT Sleeve',
    description: 'Nike Dri-FIT longer.',
    price: '$1500',
    image: require('../static/images/products/2.png'),
  },
  {
    name: 'BeoPlay Speaker',
    description: 'Bang and Olufsen',
    price: '$755',
    image: require('../static/images/products/2.png'),
  },
];

export const productDetail = {
  name: 'Leather Wrist watch',
  detail:
    'Nike Dri-FIT is a polyester fabric designed to help you keep dry so you can more comfortably work harder, longer.',
  price: '$499',
  size: 'XL',
  color: 'blue',
  image: require('../static/images/products/2.png'),
  isFav: false,
};

export const reviews = [
  {
    name: 'Amusoftech',
    detail: 'Wonderful jean, perfect gift for my girl for our anniversary!',
    count: 4,
    image: require('../static/images/rate/1.png'),
  },
  {
    name: 'Aman Deep',
    detail: 'Nike Dri-FIT is a polyester fabric designed to help you ',
    count: 3,
    image: require('../static/images/rate/1.png'),
  },
];

// export const categoriesList = [
//   {
//     label: 'Men Wears',
//     Icon: () => <IconMenWear fill={appColors.primary} />,
//   },
//   {
//     label: 'Clock',
//     Icon: () => <IconClock fill={appColors.primary} />,
//   },
//   {
//     label: 'Smartphone',
//     Icon: () => <IconSmartphone fill={appColors.primary} />,
//   },
//   {
//     label: 'Laptop',
//     Icon: () => <IconLaptop fill={appColors.primary} />,
//   },
//   {
//     label: 'Watch',
//     Icon: () => <IconWatch fill={appColors.primary} />,
//   },
//   {
//     label: 'Wall Clock',
//     Icon: () => <IconWallClock fill={appColors.primary} />,
//   },
//   {
//     label: 'Headphone',
//     Icon: () => <IconGadget fill={appColors.primary} />,
//   },
//   {
//     label: 'Toy',
//     Icon: () => <IconToy fill={appColors.primary} />,
//   },
// ];
export const categoriesList = [
  {
    label: 'Men Wears',
    ImageComponent: () => <Image source={{ uri: 'https://api.raviecom.site/api/v1/product/product-photo/647c3127570339084fa7bdc9' }} style={{ width: 40, height: 40, }} />,
  },  
  {
    label: 'Smartphone',
    ImageComponent: () => <Image source={{ uri:'https://api.raviecom.site/api/v1/product/product-photo/65ad12ff099abe096f54b700' }} style={{ width: 52, height: 52,}} />,
  },
  {
    label: 'Laptop',
    ImageComponent: () => <Image source={{ uri:'https://api.raviecom.site/api/v1/product/product-photo/65acb9f2099abe096f54b355' }} style={{ width: 54, height: 54, }} />,
  },
  {
    label: 'Watch',
    ImageComponent: () => <Image source={{ uri: 'https://api.raviecom.site/api/v1/product/product-photo/6458d7885842bb6ed1ddaf9e'}} style={{ width: 50, height: 50, }} />,
  },
  {
    label: 'Wall Clock',
    ImageComponent: () => <Image source={{ uri:'https://api.raviecom.site/api/v1/product/product-photo/6458d8b85842bb6ed1ddafe4'}} style={{ width: 54, height: 54, }} />,
  },
  {
    label: 'Headphone',
    ImageComponent: () => <Image source={{uri:'https://api.raviecom.site/api/v1/product/product-photo/65ad285a9de6515eaa20a268 '}} style={{ width: 48, height: 48, }} />,
  },
  {
    label: 'Toy',
    ImageComponent: () => <Image source={{ uri:'https://api.raviecom.site/api/v1/product/product-photo/647c41ba671e3ee0ed0e50a2' }} style={{ width: 48, height: 48, }} />,
  },
];
export const topBrands = [
  {
    label: 'Apple Inc',
    products: '5693 Products',
    icon: 'logo-apple',
  },
  {
    label: 'Google Llc',
    products: '6613 Products',
    icon: 'logo-google',
  },
];
export const recentSearches = [
  'Laptop',
  'Smartphone',
  'Shirt',
  'Toy',
  'Watch',
  'Clock',
  'Headphone',
];

export const deliveryTypes = [
  {
    label: 'Standard Delivery',
    subLabel: 'Order will be delivered between 3 - 5 business days',
    selected: true,
  },
  {
    label: 'Next Day Delivery',
    subLabel:
      'Place your order before 6pm and your items will be delivered the next day',
    selected: false,
  },
  {
    label: 'Nominated Delivery',
    subLabel:
      'Pick a particular date from the calendar and order will be delivered on selected date',
    selected: false,
  },
];
export const paymentMethods = ['dollar-sign', 'credit-card', 'layout'];

export const profileKeys=[
  {
    lebel:"Edit Profile",
    icon:"edit-3"
  },
  {
    lebel:"Shipping Address",
    icon:"map-pin",
    route:"Address"
  },
  {
    lebel:"Wishlist",
    icon:"heart",
    isNew:true,
    route :"WishList"
  },
  {
    lebel:"Order History",
    icon:"clock",
    route: "Orders"
  },
  {
    lebel:"Track Order",
    icon:"package",
    route: "Orders"
  },
  {
    lebel:"Cards",
    icon:"credit-card"
  },
  {
    lebel:"Notifications",
    icon:"bell"
  },
  {
    lebel:"Sign Out",
    icon:"log-out",
    route: "Login",
  }
]

export const orderList =[
  {
    label: 'AMU - 9249296 - N',
    amount: '$3503',
    status: 'In transit',
    color: 'yellow',
  },
  {
    label:"OD - 424923192 - N",
    amount:"$3453",
    status:"Delivered",
    color:"primary"
  },
  {
    label:"OD - 424923192 - N",
    amount:"$3503",
    status:"Delivered",
    color:"primary"
  },
  {
    label:"OD - 424923192 - N",
    amount:"$4453",
    status:"Delivered",
    color:"primary"
  }, 
  /* {
    label:"",
    amount:"",
    status:"",
    color:""
  },
  {
    label:"",
    amount:"",
    status:"",
    color:""
  } */
]