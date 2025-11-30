import React, { useState } from 'react';
import { VIDEO_DATA } from '../constants';
import { Play, Filter, Clock, Eye, ExternalLink } from 'lucide-react';

const VideoLibrary: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('الكل');
  
  const categories = ['الكل', ...Array.from(new Set(VIDEO_DATA.map(v => v.category)))];
  
  const filteredVideos = selectedCategory === 'الكل' 
    ? VIDEO_DATA 
    : VIDEO_DATA.filter(v => v.category === selectedCategory);

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div>
           <h2 className="text-3xl font-bold text-white mb-2">مكتبة الفيديوهات الذكية</h2>
           <p className="text-slate-400">تعلم خطوة بخطوة كيفية تحويل المهملات إلى تحف فنية</p>
        </div>
        
        <div className="flex items-center bg-slate-800 p-1 rounded-lg border border-slate-700 overflow-x-auto max-w-full">
            <div className="flex gap-1">
                {categories.map(cat => (
                    <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${
                        selectedCategory === cat
                        ? 'bg-blue-600 text-white'
                        : 'text-slate-400 hover:text-white hover:bg-slate-700'
                    }`}
                    >
                    {cat}
                    </button>
                ))}
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.map((video) => (
          <a 
            key={video.id} 
            href={video.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
          >
            {/* Thumbnail */}
            <div className="relative aspect-video overflow-hidden">
              <img 
                src={video.thumbnail} 
                alt={video.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="bg-red-600 rounded-full p-3 shadow-lg transform scale-90 group-hover:scale-100 transition-all">
                    <Play className="h-6 w-6 text-white ml-1" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-2 left-2 bg-black/70 px-2 py-1 rounded text-xs text-white flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {video.duration}
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    video.difficulty === 'مبتدئ' ? 'bg-green-500/20 text-green-400' :
                    video.difficulty === 'متوسط' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                }`}>
                    {video.difficulty}
                </span>
                <span className="text-slate-500 text-xs flex items-center gap-1">
                    <Eye className="h-3 w-3" />
                    {video.views}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
                {video.title}
              </h3>
              
              <div className="flex items-center justify-between mt-4 border-t border-slate-700 pt-3">
                 <span className="text-sm text-slate-400">التصنيف: <span className="text-slate-200">{video.category}</span></span>
                 <span className="text-sm text-blue-400 group-hover:text-blue-300 font-medium flex items-center gap-1">
                    مشاهدة
                    <ExternalLink className="h-3 w-3" />
                 </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default VideoLibrary;