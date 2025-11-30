import React, { useState, useRef, useEffect } from 'react';
import { generateRecyclingIdeas } from '../services/geminiService';
import { ChatMessage } from '../types';
import { Send, Image as ImageIcon, Loader2, Bot, User, Trash2 } from 'lucide-react';

const AIAssistant: React.FC = () => {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: 'أهلاً بك! أنا مساعدك الذكي لإعادة التدوير. 🌿\n\nصور أي مادة أو أخبرني عنها (مثل "علب بلاستيك" أو "أوراق قديمة") وسأعطيك أفكاراً رائعة لإعادة استخدامها!'
    }
  ]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if ((!input.trim() && !selectedImage) || isLoading) return;

    const userMessage: ChatMessage = {
      role: 'user',
      text: input,
      image: selectedImage || undefined
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    const currentImage = selectedImage;
    setSelectedImage(null); // Clear image preview after sending
    setIsLoading(true);

    try {
      const responseText = await generateRecyclingIdeas(userMessage.text, currentImage || undefined);
      
      const botMessage: ChatMessage = {
        role: 'model',
        text: responseText
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error("Error generating response", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-[calc(100vh-5rem)] max-w-5xl mx-auto p-4 flex flex-col">
      <div className="flex-1 bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden flex flex-col shadow-2xl">
        
        {/* Header */}
        <div className="bg-slate-800 p-4 border-b border-slate-700 flex items-center gap-3">
          <div className="bg-gradient-to-tr from-cyan-500 to-blue-600 p-2 rounded-lg">
            <Bot className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-white font-bold">المساعد الذكي للتدوير</h3>
            <p className="text-slate-400 text-xs flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              مدعوم بواسطة Gemini 2.5
            </p>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-slate-900/50">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
              <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${
                msg.role === 'model' ? 'bg-slate-700 border border-slate-600' : 'bg-blue-600'
              }`}>
                {msg.role === 'model' ? <Bot className="h-5 w-5 text-cyan-400" /> : <User className="h-5 w-5 text-white" />}
              </div>
              
              <div className={`max-w-[80%] space-y-2`}>
                <div className={`p-4 rounded-2xl ${
                  msg.role === 'model' 
                    ? 'bg-slate-800 border border-slate-700 rounded-tr-none text-slate-200' 
                    : 'bg-blue-600 text-white rounded-tl-none'
                }`}>
                  {msg.image && (
                    <div className="mb-3 rounded-lg overflow-hidden border border-white/20">
                      <img src={msg.image} alt="Uploaded" className="max-h-60 w-full object-cover" />
                    </div>
                  )}
                  <div className="whitespace-pre-wrap leading-relaxed text-sm sm:text-base font-light">
                    {msg.text || (msg.image ? 'تم إرفاق صورة' : '')}
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex gap-4">
               <div className="flex-shrink-0 h-10 w-10 rounded-full bg-slate-700 border border-slate-600 flex items-center justify-center">
                <Bot className="h-5 w-5 text-cyan-400" />
              </div>
              <div className="bg-slate-800 border border-slate-700 p-4 rounded-2xl rounded-tr-none flex items-center gap-2">
                <Loader2 className="h-5 w-5 text-blue-400 animate-spin" />
                <span className="text-slate-400 text-sm">جاري التفكير وتوليد الأفكار...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-slate-800 border-t border-slate-700">
          {selectedImage && (
            <div className="mb-2 relative inline-block">
              <img src={selectedImage} alt="Preview" className="h-20 w-20 object-cover rounded-lg border border-blue-500/50" />
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition"
              >
                <Trash2 className="h-3 w-3" />
              </button>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="flex gap-2 items-center">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="p-3 text-slate-400 hover:text-white hover:bg-slate-700 rounded-xl transition-colors"
              title="رفع صورة"
            >
              <ImageIcon className="h-6 w-6" />
            </button>
            <input 
              type="file" 
              ref={fileInputRef} 
              className="hidden" 
              accept="image/*" 
              onChange={handleImageUpload}
            />
            
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="اكتب اسم المادة أو ارفع صورتها..."
              className="flex-1 bg-slate-900 border border-slate-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-slate-500"
            />
            
            <button
              type="submit"
              disabled={isLoading || (!input && !selectedImage)}
              className={`p-3 rounded-xl transition-all duration-200 ${
                isLoading || (!input && !selectedImage)
                  ? 'bg-slate-700 text-slate-500 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-500/20'
              }`}
            >
              {isLoading ? <Loader2 className="h-6 w-6 animate-spin" /> : <Send className="h-6 w-6 rtl:rotate-180" />}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;