import React from 'react';
import { Section } from '../types';
import { ArrowLeft, PlayCircle, Sparkles } from 'lucide-react';

interface HeroProps {
  onStart: () => void;
  onExplore: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart, onExplore }) => {
  return (
    <div className="relative overflow-hidden bg-slate-900 py-20 sm:py-32">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/20 rounded-full blur-3xl opacity-30 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl opacity-20 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-right">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-6">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">الذكاء الاصطناعي من أجل البيئة</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            حول نفاياتك إلى <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              كنوز إبداعية
            </span>
          </h1>
          
          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            منصة "إيكو-صناع" تساعدك على اكتشاف طرق ذكية ومبتكرة لإعادة تدوير المخلفات المنزلية باستخدام قوة الذكاء الاصطناعي ومكتبة ضخمة من الفيديوهات التعليمية.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button 
              onClick={onStart}
              className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/25 gap-2"
            >
              جرب المساعد الذكي
              <ArrowLeft className="h-5 w-5" />
            </button>
            
            <button 
              onClick={onExplore}
              className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-slate-300 bg-slate-800 border border-slate-700 rounded-lg hover:bg-slate-700 hover:text-white transition-colors gap-2"
            >
              تصفح المكتبة
              <PlayCircle className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Visual Content */}
        <div className="flex-1 w-full max-w-md lg:max-w-full">
          <div className="relative">
             <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-30"></div>
             <div className="relative bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
                <img 
                    src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Workshop space" 
                    className="w-full h-auto object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 to-transparent p-6">
                    <div className="flex items-center gap-3">
                        <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-white font-medium">مجتمع نشط الآن</span>
                    </div>
                </div>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;