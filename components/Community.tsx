import React from 'react';
import { PROJECT_DATA } from '../constants';
import { Heart, Share2, MessageCircle, Plus } from 'lucide-react';
import { Section } from '../types';

interface CommunityProps {
  onNavigate: (section: Section) => void;
}

const Community: React.FC<CommunityProps> = ({ onNavigate }) => {
  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">إبداعات المجتمع</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">شاهد كيف يقوم الآخرون بتحويل نفاياتهم إلى كنوز، وشاركنا إبداعاتك.</p>
        <button 
          onClick={() => onNavigate(Section.ADD_PROJECT)}
          className="mt-8 inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/30 font-semibold"
        >
          <Plus className="h-5 w-5" />
          أضف مشروعك
        </button>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {PROJECT_DATA.map((project) => (
          <div key={project.id} className="break-inside-avoid bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 shadow-xl hover:translate-y-[-4px] transition-transform duration-300">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-auto"
            />
            <div className="p-5">
              <h3 className="text-lg font-bold text-white mb-1">{project.title}</h3>
              <p className="text-sm text-slate-400 mb-4">بواسطة: <span className="text-cyan-400">{project.author}</span></p>
              
              <div className="flex items-center justify-between border-t border-slate-700 pt-3">
                <div className="flex items-center gap-4 text-slate-400">
                  <button className="flex items-center gap-1 hover:text-red-400 transition-colors">
                    <Heart className="h-5 w-5" />
                    <span className="text-sm">{project.likes}</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-blue-400 transition-colors">
                    <MessageCircle className="h-5 w-5" />
                  </button>
                </div>
                <button className="text-slate-400 hover:text-white transition-colors">
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
