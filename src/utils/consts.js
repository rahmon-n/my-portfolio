import { LiaMedalSolid } from 'react-icons/lia';
import { FaGraduationCap, FaReact } from 'react-icons/fa';
import { MdLanguage } from 'react-icons/md';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { RiJavascriptFill } from 'react-icons/ri';
import {
  SiStyledcomponents,
  SiNextdotjs,
  SiMui,
  SiRedux,
  SiUbuntu
} from 'react-icons/si';
import { BiLogoTypescript, BiLogoFirebase } from 'react-icons/bi';
import { BsGit } from 'react-icons/bs';

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
