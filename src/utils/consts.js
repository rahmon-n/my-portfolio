import { LiaMedalSolid } from 'react-icons/lia';
import { FaGraduationCap, FaReact } from 'react-icons/fa';
import { MdLanguage } from 'react-icons/md';
import { AiOutlineHtml5, AiOutlineHome, AiOutlineMessage } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { RiJavascriptFill, RiGalleryLine } from 'react-icons/ri';
import { PiNotebookDuotone } from 'react-icons/pi';
import { CgMail } from 'react-icons/cg';
import {
  SiStyledcomponents,
  SiNextdotjs,
  SiMui,
  SiRedux,
  SiUbuntu
} from 'react-icons/si';
import { BiLogoTypescript, BiLogoFirebase } from 'react-icons/bi';
import { BsGit, BsTelegram, BsPerson } from 'react-icons/bs';

// image URLS
import project1 from '../assets/online-shop.jpg';
import project2 from '../assets/githubsearch.png';
import project3 from '../assets/youtube-clone.png';

export const ABOUT_ELEMENTS = [
  { name: 'Experience', descr: '1+ year working', icon: <LiaMedalSolid /> },
  { name: 'Education', descr: 'SB TUIT Bachelor', icon: <FaGraduationCap /> },
  {
    name: 'Languages',
    descr: 'Uzbek - Native,\nRussian - Advanced,\nEnglish - Elementary',
    icon: <MdLanguage />
  }
];

export const EXPERIENCE_ELEMENTS = [
  {
    title: 'Frontend Development',
    items: [
      { name: 'HTML', exp: 'Experienced', icon: <AiOutlineHtml5 /> },
      { name: 'CSS', exp: 'Intermediate', icon: <DiCss3 /> },
      { name: 'JavaScript', exp: 'Intermediate', icon: <RiJavascriptFill /> },
      { name: 'React', exp: 'Experienced', icon: <FaReact /> },
      { name: 'Next', exp: 'Basic', icon: <SiNextdotjs /> },
      { name: 'Styled Components', exp: 'Experienced', icon: <SiStyledcomponents /> },
      { name: 'Material UI', exp: 'Intermediate', icon: <SiMui /> },
      { name: 'TypeScript', exp: 'Basic', icon: <BiLogoTypescript /> }
    ]
  },
  {
    title: 'Other Skills',
    items: [
      { name: 'Redux', exp: 'Intermediate', icon: <SiRedux /> },
      { name: 'Firebase', exp: 'Basic', icon: <BiLogoFirebase /> },
      { name: 'Linux', exp: 'Basic', icon: <SiUbuntu /> },
      { name: 'Git', exp: 'Intermediate', icon: <BsGit /> }
    ]
  }
];

export const CONTACT_ELEMENTS = [
  {
    option: 'Email',
    data: 'rahmon.dev@gmail.com',
    link: 'mailto:rahmon.dev@gmail.com',
    icon: <CgMail />
  },
  {
    option: 'Telegram',
    data: '@rahmon_n',
    link: 'https://t.me/rahmon_n',
    icon: <BsTelegram />,
    target: '_blank'
  }
];

export const NAV_ELEMENTS = [
  { icon: <AiOutlineHome />, navLink: '#', title: 'Home' },
  { icon: <BsPerson />, navLink: '#about', title: 'About me' },
  { icon: <PiNotebookDuotone />, navLink: '#experience', title: 'Experience' },
  { icon: <RiGalleryLine />, navLink: '#portfolio', title: 'Portfolio Gallery' },
  { icon: <AiOutlineMessage />, navLink: '#contact', title: 'Contact me' }
];

export const PROJECTS_DATA = [
  {
    imageUrl: project1,
    ghLink: 'https://github.com/rahmon-n/aligarh-shop',
    liveLink: 'https://aligarh-shop.netlify.app/',
    title: 'Aligarh Online shop',
    descr: 'Online shop with Auth & Payment method'
  },
  {
    imageUrl: project2,
    ghLink: 'https://github.com/rahmon-n/GitHub-search-application',
    liveLink: 'https://reactgihubsearch.netlify.app/',
    title: 'Github Search Application',
    descr: 'Lite web application. Used React, react context also GitHub API'
  },
  {
    imageUrl: project3,
    ghLink: 'https://github.com/rahmon-n/youtube-clone',
    liveLink: 'https://muiyoutubeclone.netlify.app/',
    title: 'YouTube Clone',
    descr: 'implemented with React, MUI and RapidAPI for getting YouTube datas'
  }
];
