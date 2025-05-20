"use client"

import React from 'react';
import {
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiMui,
  SiBootstrap,
  SiCss3,
  SiExpress,
  SiNodedotjs,
  SiMongodb,
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiGithub,
  SiPostman,
  SiTrello,
  SiNotion,
  SiPostgresql,
  SiPrisma,
} from "react-icons/si";
import { TbApi } from 'react-icons/tb';
import { SectionWrapper } from './HigherOrderComponents';

const Technologies = () => {
  return (
    <div className="text-white p-8 w-full">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl text-center sectionHeadText mb-6">Technologies.</h1>
    
        <p className="text-sm mb-10 text-center text-secondary">I work with the following technologies and tools:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Front-end</h2>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <SiNextdotjs className="text-4xl text-secondary" />
              <SiReact className="text-4xl text-secondary" />
              <SiRedux className="text-4xl text-secondary" />
              <SiTailwindcss className="text-4xl text-secondary" />
              <SiMui className="text-4xl text-secondary" />
              <SiBootstrap className="text-4xl text-secondary" />
              <SiCss3 className="text-4xl text-secondary" />
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">Back-end</h2>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <SiExpress className="text-4xl text-secondary" />
              <SiNodedotjs className="text-4xl text-secondary" />
              <SiMongodb className="text-4xl text-secondary" />
              <TbApi className="text-4xl text-secondary" />
              <SiPostgresql className="text-4xl text-secondary"/>
              <SiPrisma className="text-4xl text-secondary"/>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">Languages</h2>
            <div className="grid grid-cols-3 gap-4 mb-4">
             
              <SiJavascript className="text-4xl text-secondary" />
              <SiTypescript className="text-4xl text-secondary" />
              <SiHtml5 className="text-4xl text-secondary" />
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">Tools</h2>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <SiGithub className="text-4xl text-secondary" />
              <SiPostman className="text-4xl text-secondary" />
              <SiTrello className="text-4xl text-secondary" />
              <SiNotion className="text-4xl text-secondary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default SectionWrapper(Technologies, "skills");