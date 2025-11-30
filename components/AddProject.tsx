import React, { useState, useRef } from 'react';
import { Section } from '../types';
import { ArrowRight, Camera, Upload, X, CheckCircle2 } from 'lucide-react';

interface AddProjectProps {
  onNavigate: (section: Section) => void;
}

const AddProject: React.FC<AddProjectProps> = ({ onNavigate }) => {
  const [image, setImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!image) {
        alert('يرجى إضافة صورة للمشروع');
        return;
    }
    setLoading(true);
    
    // Simulate API call and success
    setTimeout(() => {
        setLoading(false);
        setIsSuccess(true);
        // Automatically redirect after showing success for a moment
        setTimeout(() => {
            onNavigate(Section.COMMUNITY);
        }, 2000);
    }, 1500);
  };

  if (isSuccess) {
      return (
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-4">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-6 animate-bounce">
                  <CheckCircle2 className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">تم النشر بنجاح!</h2>
              <p className="text-slate-400">شكراً لمشاركتنا إبداعك، سيظهر مشروعك في المجتمع قريباً.</p>
          </div>
      );
  }

  return (
    <div className="max-w-3xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      {/* Header with Back Button */}
      <div className="flex items-center gap-4 mb-8">
        <button 
            onClick={() => onNavigate(Section.COMMUNITY)}
            className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
        >
            <ArrowRight className="h-6 w-6" />
        </button>
        <h2 className="text-2xl font-bold text-white">إضافة مشروع جديد</h2>
      </div>

      <div className="bg-slate-800 rounded-2xl p-6 md:p-8 border border-slate-700 shadow-xl">
        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* Image Upload Area */}
          <div className="space-y-3">
            <label className="block text-base font-semibold text-slate-200">صورة العمل الفني</label>
            <div 
                onClick={() => fileInputRef.current?.click()}
                className={`
                    relative w-full aspect-video sm:aspect-[2/1] rounded-xl border-2 border-dashed 
                    flex flex-col items-center justify-center cursor-pointer transition-all group
                    ${image ? 'border-blue-500/50 bg-slate-900' : 'border-slate-600 hover:border-blue-500/50 hover:bg-slate-700/50'}
                `}
            >
                {image ? (
                    <>
                        <img src={image} alt="Preview" className="w-full h-full object-contain rounded-lg" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg">
                             <p className="text-white font-medium flex items-center gap-2">
                                <Camera className="h-5 w-5" />
                                تغيير الصورة
                             </p>
                        </div>
                        <button 
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                setImage(null);
                            }}
                            className="absolute top-2 right-2 p-1.5 bg-red-500 rounded-full text-white hover:bg-red-600 shadow-lg z-10"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    </>
                ) : (
                    <div className="text-center p-6">
                        <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                            <Camera className="h-8 w-8 text-blue-400 group-hover:text-white" />
                        </div>
                        <h3 className="text-lg font-medium text-white mb-1">التقط صورة أو اختر من المعرض</h3>
                        <p className="text-slate-400 text-sm">PNG, JPG بحد أقصى 10 ميجابايت</p>
                    </div>
                )}
                <input 
                    type="file" 
                    ref={fileInputRef}
                    className="hidden" 
                    accept="image/*"
                    capture="environment" 
                    onChange={handleImageUpload}
                />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Title */}
            <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-300">عنوان المشروع</label>
                <input 
                    required 
                    type="text" 
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder-slate-500" 
                    placeholder="مثلاً: مزهرية من الزجاج المكسور" 
                />
            </div>
            {/* Author */}
             <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-300">اسم المبدع</label>
                <input 
                    required 
                    type="text" 
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder-slate-500" 
                    placeholder="اسمك كما سيظهر للآخرين" 
                />
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-300">قصة المشروع والمواد المستخدمة</label>
            <textarea 
                required 
                rows={5} 
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder-slate-500 resize-none" 
                placeholder="اشرح كيف قمت بصناعة هذا العمل، وما هي النفايات التي قمت بإعادة تدويرها..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            disabled={loading}
            className={`
                w-full py-4 rounded-xl font-bold text-lg shadow-lg flex items-center justify-center gap-2
                transition-all duration-300
                ${loading 
                    ? 'bg-slate-700 text-slate-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-blue-500/25 hover:shadow-blue-500/40 transform hover:-translate-y-1'
                }
            `}
          >
            {loading ? (
                <>
                    <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    جاري النشر...
                </>
            ) : (
                <>
                    <Upload className="h-5 w-5" />
                    نشر الإبداع
                </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProject;
