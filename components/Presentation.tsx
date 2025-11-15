import React, { useState, useEffect } from 'react';
import { slides, Slide } from '../presentationData';
import CubeFlowVisualization from './CubeFlowVisualization';

const Presentation: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      } else if (e.key === 'Home') {
        setCurrentSlide(0);
      } else if (e.key === 'End') {
        setCurrentSlide(slides.length - 1);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide]);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const slide = slides[currentSlide];

  const renderSlideContent = (slide: Slide) => {
    switch (slide.type) {
      case 'title':
        return (
          <div className="flex flex-col items-center justify-center h-full text-center px-12">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              {slide.title}
            </h1>
            {slide.content.map((line, i) => (
              <p key={i} className="text-2xl md:text-3xl text-blue-300 mb-4 font-light">
                {line}
              </p>
            ))}
          </div>
        );

      case 'content':
        return (
          <div className="flex flex-col h-full p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 border-b-4 border-blue-500 pb-4">
              {slide.title}
            </h2>
            <div className="flex-1 flex flex-col justify-center">
              {slide.equations && slide.equations.length > 0 && (
                <div className="bg-slate-800 bg-opacity-50 p-6 rounded-lg mb-6 text-center">
                  {slide.equations.map((eq, i) => (
                    <div key={i} className="text-3xl text-blue-300 font-mono mb-2">
                      {eq}
                    </div>
                  ))}
                </div>
              )}
              <div className="space-y-3">
                {slide.content.map((line, i) => (
                  <p
                    key={i}
                    className={`text-xl md:text-2xl ${
                      line.startsWith('•') ? 'text-gray-200' : 'text-gray-300'
                    } ${line.startsWith('  -') ? 'ml-8' : ''} ${
                      line === '' ? 'h-2' : ''
                    }`}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        );

      case 'two-column':
        return (
          <div className="flex flex-col h-full p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 border-b-4 border-blue-500 pb-4">
              {slide.title}
            </h2>
            <div className="flex-1 grid grid-cols-2 gap-8">
              <div className="bg-slate-800 bg-opacity-30 p-6 rounded-lg">
                <div className="space-y-3">
                  {slide.leftColumn?.map((line, i) => (
                    <p
                      key={i}
                      className={`text-lg md:text-xl ${
                        line.startsWith('•') ? 'text-gray-200' : 'text-blue-300 font-semibold text-xl'
                      } ${line === '' ? 'h-2' : ''}`}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
              <div className="bg-slate-800 bg-opacity-30 p-6 rounded-lg">
                <div className="space-y-3">
                  {slide.rightColumn?.map((line, i) => (
                    <p
                      key={i}
                      className={`text-lg md:text-xl ${
                        line.startsWith('•') ? 'text-gray-200' : 'text-blue-300 font-semibold text-xl'
                      } ${line === '' ? 'h-2' : ''}`}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'visual':
        return (
          <div className="flex flex-col h-full p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 border-b-4 border-blue-500 pb-4">
              {slide.title}
            </h2>
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <CubeFlowVisualization />
              </div>
              <div className="bg-slate-800 bg-opacity-30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-300 mb-4">Key Flow Features:</h3>
                <div className="space-y-3">
                  {slide.content.map((line, i) => (
                    <p key={i} className="text-lg text-gray-200">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'conclusion':
        return (
          <div className="flex flex-col h-full p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 border-b-4 border-green-500 pb-4">
              {slide.title}
            </h2>
            <div className="flex-1 flex flex-col justify-center bg-slate-800 bg-opacity-30 p-8 rounded-lg">
              <div className="space-y-3">
                {slide.content.map((line, i) => (
                  <p
                    key={i}
                    className={`text-xl md:text-2xl ${
                      line.startsWith('•') ? 'text-gray-200' : 'text-green-300 font-semibold'
                    } ${line.startsWith('  -') ? 'ml-8' : ''} ${
                      line === '' ? 'h-2' : ''
                    }`}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative">
      {/* Main slide area */}
      <div className="h-screen flex flex-col">
        {/* Slide content */}
        <div className="flex-1 overflow-hidden">
          <div className="h-full animate-fade-in">
            {renderSlideContent(slide)}
          </div>
        </div>

        {/* Navigation bar */}
        <div className="bg-slate-900 bg-opacity-90 px-8 py-4 flex items-center justify-between border-t-2 border-blue-500">
          <div className="flex items-center gap-4">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-6 py-2 rounded-lg transition-colors font-semibold"
            >
              ← Previous
            </button>
            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-6 py-2 rounded-lg transition-colors font-semibold"
            >
              Next →
            </button>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-gray-300 text-lg">
              Slide {currentSlide + 1} / {slides.length}
            </span>
            <button
              onClick={toggleFullscreen}
              className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition-colors"
              title="Toggle Fullscreen (F)"
            >
              {isFullscreen ? '⊗' : '⛶'}
            </button>
          </div>

          <div className="text-sm text-gray-400">
            <span className="hidden md:inline">
              Use ← → or Space to navigate | F for fullscreen
            </span>
          </div>
        </div>
      </div>

      {/* Slide thumbnails (optional - can be toggled) */}
      <div className="fixed bottom-20 left-4 bg-slate-900 bg-opacity-90 p-2 rounded-lg max-h-32 overflow-y-auto hidden lg:block">
        <div className="flex flex-col gap-1">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setCurrentSlide(i)}
              className={`text-left px-3 py-1 rounded text-xs transition-colors ${
                i === currentSlide
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
              }`}
            >
              {i + 1}. {s.title.substring(0, 30)}...
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Presentation;
