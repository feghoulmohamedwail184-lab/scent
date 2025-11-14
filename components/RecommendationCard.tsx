import React from 'react';
import type { FragranceRecommendation } from '../types';

interface RecommendationCardProps {
  recommendation: FragranceRecommendation;
  imageUrl: string | null;
  onReset: () => void;
}

const NotesSection: React.FC<{ title: string; notes: string[] }> = ({ title, notes }) => (
  <div>
    <h4 className="text-sm font-bold uppercase tracking-widest text-pink-300 mb-2">{title}</h4>
    <ul className="space-y-1">
      {notes.map((note, i) => (
        <li key={i} className="text-gray-300">{note}</li>
      ))}
    </ul>
  </div>
);


const RecommendationCard: React.FC<RecommendationCardProps> = ({ recommendation, imageUrl, onReset }) => {
  return (
    <div className="bg-black/30 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden animate-fade-in w-full max-w-4xl mx-auto border border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-8 md:p-10 flex flex-col justify-between">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-3">{recommendation.fragranceName}</h2>
            <p className="text-gray-300 font-light leading-relaxed mb-8">{recommendation.description}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <NotesSection title="Top Notes" notes={recommendation.topNotes} />
                <NotesSection title="Middle Notes" notes={recommendation.middleNotes} />
                <NotesSection title="Base Notes" notes={recommendation.baseNotes} />
            </div>

            {recommendation.affordableAlternative && (
              <div className="mt-8 pt-6 border-t border-white/20">
                <h3 className="text-xl font-serif text-white mb-2">Affordable Alternative</h3>
                <h4 className="text-lg font-bold text-pink-300">{recommendation.affordableAlternative.fragranceName}</h4>
                <p className="text-gray-400 font-light leading-relaxed mt-1">{recommendation.affordableAlternative.description}</p>
              </div>
            )}
          </div>

          <button
            onClick={onReset}
            className="w-full md:w-auto mt-8 bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
          >
            Start Over
          </button>
        </div>
        <div className="relative min-h-[300px] md:min-h-0">
          {imageUrl ? (
            <img src={imageUrl} alt="Evocative scent visualization" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-gray-800 flex items-center justify-center">
              <div className="text-gray-400">Generating visual...</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecommendationCard;