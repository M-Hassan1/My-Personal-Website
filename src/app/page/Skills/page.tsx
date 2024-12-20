import React from 'react';
import SkillCard from './SkillCard';

import HtmlImg from'@/Components/Assets/Images/html.png'
import CssImg from'@/Components/Assets/Images/CSS3_logo_and_wordmark.svg.png'
import TailwindLogo from "@/Components/Assets/Images/TailwindLogo.png";
import JavascriptImg from'@/Components/Assets/Images/javascript.png'
import TypescriptImg from'@/Components/Assets/Images/Typescript_logo_2020.svg.png'
import PythonImg from'@/Components/Assets/Images/python.png'
import Chakraui from "@/Components/Assets/Images/Chakraui.png";
import ReactImg from'@/Components/Assets/Images/1631110818-logo-react-js.png'
import NextImg from'@/Components/Assets/Images/download.png'
import Promotion from "@/Components/Assets/Images/promotion.png";
import AvailableOn from "@/Components/Assets/Images/UpworkOrFiverr.png";
import SkillsPage from './SkillPage';

const SkillsCode = () => {
  const skills = [
    {
      imgSrc: HtmlImg,
      altText: 'HTML Logo',
      title: 'HTML:5',
    },
    {
      imgSrc: CssImg,
      altText: 'CSS Logo',
      title: 'CSS',
    },
    {
      imgSrc: TailwindLogo,
      altText: 'Tailwind CSS Logo',
      title: 'Tailwind',
    },
    {
      imgSrc: JavascriptImg,
      altText: 'JavaScript',
      title: 'JavaScript',
    },
    {
      imgSrc: TypescriptImg,
      altText: 'TypeScript',
      title: 'TypeScript',
    },
    {
      imgSrc: PythonImg,
      altText: 'Python',
      title: 'Python',
    },
    {
      imgSrc: Chakraui,
      altText: 'ChakraUI',
      title: 'Chakra Ui',
    },
    {
      imgSrc: ReactImg,
      altText: 'React',
      title: 'React',
    },
    {
      imgSrc: NextImg,
      altText: 'Nextjs',
      title: 'Next JS',
    },
    {
      imgSrc: Promotion,
      altText: 'Promotion Logo',
      title: 'All Social Media Promotion',
    },
    {
      imgSrc: AvailableOn,
      altText: 'Available On',
      title: 'Available on',
    },
  ];

  return (
    <div id='Skills'>
    <SkillsPage />
    <div className='p-3 grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
      {skills.map((skill, index) => (
        <SkillCard key={index} {...skill} />
      ))}
    </div>
    </div>
  );
};

export default SkillsCode;
