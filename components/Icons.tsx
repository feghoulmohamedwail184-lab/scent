
import React from 'react';

export const PerfumeBottleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M15 5.63L15 4a2 2 0 00-2-2h-2a2 2 0 00-2 2v1.63C8.36 6.22 8 7.06 8 8v12a2 2 0 002 2h4a2 2 0 002-2V8c0-.94-.36-1.78-.9-2.37zM10 4h4v1h-4V4z" />
  </svg>
);

export const MaleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 5.5A6.5 6.5 0 115.5 12 6.5 6.5 0 0112 5.5z" />
  </svg>
);

export const FemaleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 5.5A6.5 6.5 0 115.5 12 6.5 6.5 0 0112 5.5z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12v7m-3-3h6" />
  </svg>
);

export const UnisexIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
     <path strokeLinecap="round" strokeLinejoin="round" d="M12 5.5A6.5 6.5 0 115.5 12 6.5 6.5 0 0112 5.5z" />
     <path strokeLinecap="round" strokeLinejoin="round" d="M12 12v7m-3-3h6" />
     <path strokeLinecap="round" strokeLinejoin="round" d="M16 4l4 4" />
  </svg>
);
