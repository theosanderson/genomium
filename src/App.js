import React from 'react';
import { BsTree } from 'react-icons/bs';
import { HiDesktopComputer } from 'react-icons/hi';
import { BiDna } from 'react-icons/bi';
import {CgListTree} from 'react-icons/cg';
import {SiElasticstack} from 'react-icons/si';
import logo from './logo.svg';
import './App.css';

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
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow">
        <div className="container px-4 mx-auto">
          <div className="flex justify-between items-center py-4">
            <a href="/" className="text-lg font-semibold">
              <img src={logo} alt="Logo" className="h-16" />
            </a>
            <div className="hidden md:block">
              {tools.map(tool => (
                <a key={tool.url} href={tool.url} className="text-gray-600 hover:text-gray-800 mx-3 hover:text-blue-600">
                  {tool.icon}
                  {tool.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
      <main className="container mx-auto my-4">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-semibold mb-4">Genomium</h1>
          <p className="text-lg mb-4">
            Welcome to Genomium, a collection of tools for exploring microbial genomes.
          </p>
          <div className="grid grid-cols-3 gap-4">
            {tools.map(tool => (
              <a key={tool.url} href={tool.url} className="bg-white hover:bg-gray-100 border border-gray-300 py-4 px-6 rounded-lg shadow-lg text-center text-blue-500 hover:text-blue-600">
                <h2 className="text-xl font-medium mb-2">
                  {tool.icon}
                  {tool.name}
                </h2>
                <p className="text-lg text-gray-600
                ">{tool.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

