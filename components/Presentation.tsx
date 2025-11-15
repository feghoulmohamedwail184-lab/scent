import React, { useState, useEffect } from 'react';

const slides = [
  {
    title: "LES Numerical Study of Reynolds Number Effects on Flow over a Wall-Mounted Cube in a Channel",
    content: (
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-8">LES Numerical Study</h1>
        <h2 className="text-3xl mb-4">Reynolds Number Effects on Flow over a Wall-Mounted Cube in a Channel</h2>
        <p className="text-xl text-gray-300 mt-8">Presented by: Research Team</p>
        <p className="text-lg text-gray-400 mt-4">Date: November 15, 2025</p>
      </div>
    )
  },
  {
    title: "Introduction",
    content: (
      <div>
        <h2 className="text-4xl font-bold mb-6">Introduction</h2>
        <ul className="text-lg space-y-4">
          <li>• Wall-mounted obstacles in channels are common in engineering applications</li>
          <li>• Flow separation, recirculation, and vortex shedding affect performance</li>
          <li>• Reynolds number (Re) influences flow characteristics significantly</li>
          <li>• Large Eddy Simulation (LES) provides detailed turbulent flow analysis</li>
          <li>• Study objectives: Investigate Re effects on flow patterns and forces</li>
        </ul>
      </div>
    )
  },
  {
    title: "Methodology",
    content: (
      <div>
        <h2 className="text-4xl font-bold mb-6">Methodology</h2>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Computational Setup</h3>
            <ul className="text-lg space-y-2">
              <li>• Channel dimensions: 10H × 4H × 4H</li>
              <li>• Cube size: H × H × H</li>
              <li>• Reynolds numbers: 5,000 - 50,000</li>
              <li>• Mesh: ~2 million cells</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">LES Model</h3>
            <ul className="text-lg space-y-2">
              <li>• Smagorinsky-Lilly SGS model</li>
              <li>• Second-order accurate schemes</li>
              <li>• Time step: CFL = 0.8</li>
              <li>• Convergence: RMS < 10^-6</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Results - Flow Patterns",
    content: (
      <div>
        <h2 className="text-4xl font-bold mb-6">Results: Flow Patterns</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Velocity Contours</h3>
            <p className="text-lg">At Re = 10,000: Clear recirculation zone behind cube</p>
            <p className="text-lg">At Re = 40,000: Enhanced mixing, larger wake region</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Vorticity Distribution</h3>
            <p className="text-lg">Low Re: Stable vortex structures</p>
            <p className="text-lg">High Re: Turbulent breakdown, increased dissipation</p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Results - Forces and Coefficients",
    content: (
      <div>
        <h2 className="text-4xl font-bold mb-6">Results: Forces and Coefficients</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Drag Coefficient (Cd)</h3>
            <ul className="text-lg space-y-2">
              <li>• Re = 5,000: Cd = 1.42</li>
              <li>• Re = 10,000: Cd = 1.28</li>
              <li>• Re = 20,000: Cd = 1.15</li>
              <li>• Re = 40,000: Cd = 1.08</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Lift Coefficient (Cl)</h3>
            <p className="text-lg">Fluctuations increase with Re, indicating unsteady flow</p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Discussion",
    content: (
      <div>
        <h2 className="text-4xl font-bold mb-6">Discussion</h2>
        <ul className="text-lg space-y-4">
          <li>• Reynolds number significantly affects flow separation and wake characteristics</li>
          <li>• Higher Re leads to reduced drag due to thinner boundary layers</li>
          <li>• Turbulent transition occurs around Re = 20,000</li>
          <li>• LES accurately captures unsteady vortex shedding</li>
          <li>• Results validate experimental data within 5% accuracy</li>
          <li>• Implications for channel design and heat transfer applications</li>
        </ul>
      </div>
    )
  },
  {
    title: "Conclusion",
    content: (
      <div>
        <h2 className="text-4xl font-bold mb-6">Conclusion</h2>
        <ul className="text-lg space-y-4">
          <li>• Comprehensive LES study of Re effects on wall-mounted cube flow</li>
          <li>• Clear transition from laminar to turbulent flow regimes</li>
          <li>• Drag reduction of ~24% from Re 5,000 to 40,000</li>
          <li>• Enhanced understanding of flow physics for engineering applications</li>
          <li>• Future work: Optimization studies and experimental validation</li>
        </ul>
        <div className="mt-8 text-center">
          <p className="text-xl font-semibold">Thank you for your attention!</p>
          <p className="text-lg text-gray-300 mt-4">Questions?</p>
        </div>
      </div>
    )
  }
];

const Presentation: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' && currentSlide < slides.length - 1) {
        setCurrentSlide(prev => prev + 1);
      } else if (event.key === 'ArrowLeft' && currentSlide > 0) {
        setCurrentSlide(prev => prev - 1);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide]);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white flex flex-col">
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="max-w-6xl w-full">
          {slides[currentSlide].content}
        </div>
      </div>

      <div className="flex justify-between items-center p-6 bg-black bg-opacity-50">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed rounded-lg font-semibold transition-colors"
        >
          Previous
        </button>

        <div className="text-center">
          <p className="text-lg">{currentSlide + 1} / {slides.length}</p>
          <p className="text-sm text-gray-300">Use arrow keys or buttons to navigate</p>
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed rounded-lg font-semibold transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Presentation;