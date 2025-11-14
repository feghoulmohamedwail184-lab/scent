
import React from 'react';
import { PerfumeBottleIcon } from './Icons';

interface LoaderProps {
  message: string;
}

const Loader: React.FC<LoaderProps> = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center text-white animate-fade-in">
      <div className="relative w-24 h-24 mb-6">
        <PerfumeBottleIcon className="w-24 h-24 text-pink-400 animate-pulse" />
      </div>
      <h2 className="text-2xl font-serif mb-2">Crafting Your Scent Profile</h2>
      <p className="text-gray-300 w-full transition-opacity duration-500">{message}</p>
    </div>
  );
};

export default Loader;
