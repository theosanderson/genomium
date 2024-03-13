import React from 'react';
import { BsTree } from 'react-icons/bs';
import { HiDesktopComputer } from 'react-icons/hi';
import { BiDna } from 'react-icons/bi';
import {CgListTree} from 'react-icons/cg';
import { CgPill } from "react-icons/cg";
import {SiElasticstack} from 'react-icons/si';
import {FaGlobeAfrica} from 'react-icons/fa';
import {FaDatabase} from 'react-icons/fa';
import {FaFlask} from 'react-icons/fa';
import {FaClock} from 'react-icons/fa';
import { FaHospital } from "react-icons/fa6";
import { IoIosGitNetwork } from "react-icons/io";
import logo from './logo.svg';
import './App.css';


const Wrapper = ({ children, menu }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow">
        <div className="container px-4 mx-auto">
          <div className="flex justify-between items-center py-4">
            <a href="/" className="text-lg font-semibold">
              <img src={logo} alt="Logo" className="h-16" />
            </a>
            <div className="hidden md:block">
              {menu.map(tool => (
                <button key={tool.url} onClick={tool.onclick} className="text-gray-600 hover:text-gray-800 mx-3 hover:text-blue-600 hover:underline">
                  
                  {tool.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
};

const honoraryTools = [
  {
    name: 'Mixology',
    url: '//mixology.science',
    desc: 'A tool for calculating recipes for laboratory solutions',
    icon: <FaFlask className="inline-block mr-2" />
  },
  {
    name: 'Hospital Medicines',
    url: '//hospitalmedicines.genomium.org',
    desc: 'A data explorer for England\'s hospital medicine usage data',
    icon: <FaHospital className="inline-block mr-2" />

  },
{
    name: 'Lineage networks',
    url: '//lineage-networks.genomium.org/',
    desc: 'Visualise similarities and differences between PANGO lineages',
    icon: <IoIosGitNetwork className="inline-block mr-2" />

  },
  {
    name: 'Molnupiravir branch identification helper',
    url: '//movbranchapp.streamlit.app/',
    desc: 'Likelihood for molnupiravir-origins of a branch from nucleotide contexts',
    icon: <CgPill className="inline-block mr-2" />

  }
  

]


const supplementalTools = [
  {
    name: 'CovGlobe',
    url: '//covglobe.org',
    desc: 'Exploring geospatial patterns in SARS-CoV-2 lineages',
    icon: <FaGlobeAfrica className="inline-block mr-1" />
   
  },
  {
    name: 'Codon2Nucleotide',
    url: '//codon2nucleotide.theo.io',
    desc: 'Convert coordinate types, and between ORF1ab/a/b/nsps for SARS-CoV-2',
    icon: <HiDesktopComputer className="inline-block mr-1" />
  }
  ,
  {
    name: 'PhenoPlasm',
    url: 'http://phenoplasm.org',
    desc: 'A database of published phenotypes for malaria parasite genes',
    icon: <FaDatabase className="inline-block mr-1" />
  
  },
  {
    name: 'Chronumental',
    url: '//github.com/theosanderson/chronumental',
    desc: 'An installable tool for dating large phylogenetic trees',
    icon: <FaClock className="inline-block mr-1" />

  },
 
];


const tools = [
  {
    name: 'Taxonium',
    url: '//taxonium.org',
    desc: 'A tool for exploring large phylogenetic trees',
    icon: <CgListTree className="inline-block mr-2" />
  },
  {
    name: 'Gensplore',
    url: '//gensplore.theo.io',
    desc: 'Explore microbial reference genomes in Genbank format',
    icon: <BiDna className="inline-block mr-2" />
  },
  {
    name: 'DeeperSeq',
    url: '//deeperseq.genomium.org',
    desc: 'A tool for exploring deep sequencing data for microbial genomes',
    icon: <SiElasticstack className="inline-block mr-2" />
  },

];

function App() {
  const [page, setPage] = React.useState('home');
  const menu = [
    {
      name: 'Home',
      onclick: () => setPage('home')
      
    },
    {
      name: 'About',
      onclick: () => setPage('about')
    },
  ];

  if (page === 'about') {
    return <Wrapper menu={menu}>
      <main className="container mx-auto my-4 px-4 md:px-0">
        <h1 className="text-3xl font-semibold mb-4">About</h1>
        <p className="text-lg mb-8">
          Genomium is a collection of tools for exploring microbial genomes built by <a href="https://theo.io" className="text-blue-500 hover:text-blue-600 hover:underline">Theo Sanderson</a>, alongside colleagues and collaborators.
        </p>
       </main>
    </Wrapper>



  }
  else
  {
    return (
      <Wrapper menu={menu}>
        <main className="container mx-auto my-4 px-4 md:px-0">
        <div className="flex flex-col items-center">
         
          <p className="text-lg mb-8 mt-3">
            Welcome to Genomium, a collection of tools for exploring microbial genomes (and more!)
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {tools.map(tool => (
              <a key={tool.url} href={tool.url} className="bg-white hover:bg-gray-100 border border-gray-300 py-4 px-6 rounded-lg shadow-lg text-center text-blue-500 hover:text-blue-600">
                <h2 className="text-xl font-medium mb-2">
                  {tool.icon}
                  {tool.name}
                </h2>
                <p className="text-lg text-gray-600">{tool.desc}</p>
              </a>
            ))}
          </div>
          <hr className="my-12 w-full border-gray-300 " />

            <div className="flex flex-col items-center">
          <div 
          // center items
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {supplementalTools.map(tool => (
              <a key={tool.url} href={tool.url} className="bg-white hover:bg-gray-100 border border-gray-300 py-4 px-6 rounded-lg shadow-lg text-center text-blue-500 hover:text-blue-600">
                <div className="flex items-center justify-center mb-2">
                  {tool.icon}
                  <span className="ml-2 font-medium">{tool.name}</span>
                </div>
                <p className="text-gray-600">{tool.desc}</p>
              </a>
            ))}
          </div>
          <hr className="my-12 w-full border-gray-300" />
          <div className="text-gray-500 mb-6 text-lg">Bonus tools</div>

        {/* Honorary Tools Section */}
        <div className="flex flex-wrap justify-center items-center">
          {honoraryTools.map(tool => (

            <a key={tool.url} href={tool.url} className="bg-white hover:bg-gray-100 border border-gray-300 p-2 rounded-lg shadow-lg text-center text-blue-500 hover:text-blue-600 mx-2 my-1 w-1/2 md:w-1/4 h-36">
              {tool.icon}
              <span className="text-sm font-bold">{tool.name}</span>

            <div className="text-sm text-gray-600 p-4">{tool.desc}</div>

            </a>
          ))}
        </div>
          


          </div>
        </div>
      </main>
      </Wrapper>
    );
  }
}


  

export default App;
