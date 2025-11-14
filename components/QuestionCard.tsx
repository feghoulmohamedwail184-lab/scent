
import React, { useState } from 'react';
import type { Question } from '../types';
import { MaleIcon, FemaleIcon, UnisexIcon } from './Icons';

interface QuestionCardProps {
  question: Question;
  colors: string[];
  onAnswer: (value: string) => void;
  onFinalSubmit?: () => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, colors, onAnswer, onFinalSubmit }) => {
  const [textValue, setTextValue] = useState('');

  const handleTextSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (textValue.trim()) {
      onAnswer(textValue);
      if (onFinalSubmit) {
          onFinalSubmit();
      }
    }
  };
  
  const renderInput = () => {
    switch (question.type) {
      case 'choice':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {question.options?.map(option => (
              <button
                key={option}
                onClick={() => onAnswer(option)}
                className="w-full text-left p-4 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                {option}
              </button>
            ))}
          </div>
        );
      case 'gender':
         const icons = { 'Masculine': <MaleIcon/>, 'Feminine': <FemaleIcon/>, 'Unisex': <UnisexIcon/> };
         return (
          <div className="flex justify-center gap-4 md:gap-8 mt-6">
            {question.options?.map(option => (
              <button
                key={option}
                onClick={() => onAnswer(option)}
                className="flex flex-col items-center gap-2 p-4 md:p-6 w-28 h-28 md:w-32 md:h-32 justify-center bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                {icons[option as keyof typeof icons]}
                <span>{option}</span>
              </button>
            ))}
          </div>
         );
      case 'color':
        return (
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-3 mt-6">
            {colors.map(color => (
              <button
                key={color}
                onClick={() => onAnswer(color)}
                className="w-12 h-12 md:w-16 md:h-16 rounded-full transition-transform transform hover:scale-110 border-2 border-transparent hover:border-white"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        );
      case 'text':
        return (
          <form onSubmit={handleTextSubmit} className="mt-6 flex flex-col items-center">
            <input
              type="text"
              value={textValue}
              onChange={(e) => setTextValue(e.target.value)}
              placeholder="Type your answer here..."
              className="w-full max-w-md bg-white/10 border border-white/20 rounded-full py-3 px-6 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
              autoFocus
            />
            <button
                type="submit"
                className="mt-4 bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-8 rounded-full transition-all duration-300 disabled:opacity-50"
                disabled={!textValue.trim()}
            >
              {onFinalSubmit ? 'Discover My Scent' : 'Next'}
            </button>
          </form>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto text-center p-4 animate-slide-in-up">
      <h2 className="text-3xl md:text-4xl font-serif text-white">{question.text}</h2>
      {renderInput()}
    </div>
  );
};

export default QuestionCard;
