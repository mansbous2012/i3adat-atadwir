import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoLibrary from './components/VideoLibrary';
import AIAssistant from './components/AIAssistant';
import Community from './components/Community';
import AddProject from './components/AddProject';
import { Section } from './types';
import { RECYCLING_TIPS } from './constants';
import { Lightbulb } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState<Section>(Section.HOME);

  const renderSection = () => {
    switch (activeSection) {
      case Section.HOME:
        return (
          <>
            <Hero 
              onStart={() => setActiveSection(Section.ASSISTANT)} 
              onExplore={() => setActiveSection(Section.VIDEOS)} 
            />
            {/* Quick Teaser of Videos */}
            <div className="bg-slate-900 border-t border-slate-800">
                <VideoLibrary />
            </div>
          </>
        );
      case Section.VIDEOS:
        return <VideoLibrary />;
      case Section.ASSISTANT:
        return <AIAssistant />;
      case Section.COMMUNITY:
        return <Community onNavigate={setActiveSection} />;
      case Section.ADD_PROJECT:
        return <AddProject onNavigate={setActiveSection} />;
      default:
        return <Hero onStart={() => setActiveSection(Section.ASSISTANT)} onExplore={() => setActiveSection(Section.VIDEOS)} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 font-sans selection:bg-blue-500/30">
      <Navbar activeSection={activeSection} onNavigate={setActiveSection} />
      
      <main className="fade-in">
        {renderSection()}
      </main>

      {/* Footer / Daily Tip */}
      <footer className="border-t border-slate-800 bg-slate-950 py-8 px-4 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-start gap-3 bg-blue-900/20 p-4 rounded-lg border border-blue-500/20 max-w-lg">
             <div className="bg-blue-600 p-2 rounded-full mt-1">
                <Lightbulb className="h-4 w-4 text-white" />
             </div>
             <div>
                <h4 className="font-bold text-blue-400 text-sm mb-1">نصيحة اليوم</h4>
                <p className="text-slate-400 text-sm">{RECYCLING_TIPS[Math.floor(Math.random() * RECYCLING_TIPS.length)]}</p>
             </div>
          </div>
          
          <div className="text-center md:text-left text-slate-500 text-sm">
            <p>&copy; {new Date().getFullYear()} إيكو-صناع. جميع الحقوق محفوظة.</p>
            <p className="mt-1">منصة لدعم البيئة والاستدامة</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
