import React, { useState, useCallback, useEffect } from 'react';
import type { UserInput, FragranceRecommendation } from './types';
import { questions, colors, loadingMessages } from './constants';
import { getFragranceRecommendation, generateFragranceImage } from './services/geminiService';

import QuestionCard from './components/QuestionCard';
import RecommendationCard from './components/RecommendationCard';
import Loader from './components/Loader';
import { PerfumeBottleIcon } from './components/Icons';

const App: React.FC = () => {
  const [step, setStep] = useState(0);
  const [userInput, setUserInput] = useState<UserInput>({
    personality: '',
    color: '',
    gender: '',
    fruit: '',
    vegetable: '',
    age: '',
    budget: '',
  });
  const [recommendation, setRecommendation] = useState<FragranceRecommendation | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentLoadingMessage, setCurrentLoadingMessage] = useState(loadingMessages[0]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // FIX: Replaced NodeJS.Timeout with ReturnType<typeof setInterval> for browser compatibility.
    let interval: ReturnType<typeof setInterval>;
    if (isLoading) {
      interval = setInterval(() => {
        setCurrentLoadingMessage(prev => {
          const currentIndex = loadingMessages.indexOf(prev);
          const nextIndex = (currentIndex + 1) % loadingMessages.length;
          return loadingMessages[nextIndex];
        });
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isLoading]);

  const handleAnswer = (key: keyof UserInput, value: string) => {
    setUserInput(prev => ({ ...prev, [key]: value }));
    if (step < questions.length) {
      setTimeout(() => setStep(prev => prev + 1), 300);
    }
  };

  const handleSubmit = useCallback(async () => {
    if (Object.values(userInput).some(v => v === '')) {
      setError("Please fill out all fields.");
      return;
    }
    setIsLoading(true);
    setError(null);
    setStep(step + 1);

    try {
      const rec = await getFragranceRecommendation(userInput);
      setRecommendation(rec);
      
      setCurrentLoadingMessage("Generating visual essence...");
      const img = await generateFragranceImage(rec.description, userInput.color);
      setImageUrl(img);
      
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setError("Sorry, we couldn't create your scent profile. Please try again.");
      setIsLoading(false);
    }
  }, [userInput, step]);

  const handleReset = () => {
    setStep(0);
    setUserInput({ personality: '', color: '', gender: '', fruit: '', vegetable: '', age: '', budget: '' });
    setRecommendation(null);
    setImageUrl(null);
    setError(null);
    setIsLoading(false);
  };
  
  const renderContent = () => {
    if (step === 0) {
      return (
        <div className="text-center animate-fade-in">
          <div className="mb-8">
             <PerfumeBottleIcon className="w-24 h-24 text-pink-300 mx-auto" />
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">Welcome to ScentVibe AI</h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover your signature scent through a personalized journey into your senses and personality.
          </p>
          <button
            onClick={() => setStep(1)}
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Find Your Signature Scent
          </button>
        </div>
      );
    }

    if (step > 0 && step <= questions.length) {
      const currentQuestion = questions[step - 1];
      return (
        <QuestionCard
          key={step}
          question={currentQuestion}
          onAnswer={(value) => handleAnswer(currentQuestion.id as keyof UserInput, value)}
          colors={colors}
          onFinalSubmit={step === questions.length ? handleSubmit : undefined}
        />
      );
    }

    if (isLoading) {
        return <Loader message={currentLoadingMessage} />;
    }

    if (recommendation) {
        return <RecommendationCard recommendation={recommendation} imageUrl={imageUrl} onReset={handleReset} />;
    }

    if (error) {
        return (
            <div className="text-center text-white animate-fade-in">
                <h2 className="text-2xl font-serif text-red-400 mb-4">An Error Occurred</h2>
                <p className="text-gray-300 mb-6">{error}</p>
                <button onClick={handleReset} className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-full transition-colors">
                    Try Again
                </button>
            </div>
        );
    }
    
    return null;
  };

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800 text-white font-sans flex items-center justify-center p-4">
       <div className="w-full max-w-4xl mx-auto">
          {renderContent()}
       </div>
    </main>
  );
};

export default App;