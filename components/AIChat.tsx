
import React, { useState, useRef, useEffect } from 'react';
import { gemini } from '../services/geminiService';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    { role: 'ai', text: "> Neural network online.\n> Syed Ahmed Raza interface ready.\n> Query technical background?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    const aiResponse = await gemini.askPortfolioQuestion(userMsg);
    
    setIsTyping(false);
    setMessages(prev => [...prev, { role: 'ai', text: aiResponse }]);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
      {isOpen && (
        <div className="mb-6 w-[350px] sm:w-[450px] h-[600px] bg-dark border border-accent/30 flex flex-col overflow-hidden animate-slide-up shadow-[0_40px_100px_-20px_rgba(0,141,146,0.2)]">
          {/* Header */}
          <div className="px-8 py-5 border-b border-white/5 flex items-center justify-between bg-surface/20">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 flex items-center justify-center border border-accent/40 bg-accent/5">
                <i className="fa-solid fa-microchip text-accent text-sm"></i>
              </div>
              <div>
                <h4 className="font-display font-bold text-white text-[10px] uppercase tracking-[0.2em] leading-none">Neural_Node.01</h4>
                <span className="text-[8px] text-accent/60 font-mono uppercase tracking-widest mt-1 block">Latency: 12ms</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/20 hover:text-white transition-colors">
              <i className="fa-solid fa-minus"></i>
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-grow overflow-y-auto p-8 space-y-8 no-scrollbar bg-dark/40 font-mono">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[90%] p-4 text-[11px] leading-relaxed tracking-wider border ${
                  m.role === 'user' 
                  ? 'bg-accent/10 border-accent/40 text-accent font-bold' 
                  : 'bg-white/5 text-grayish border-white/5'
                }`}>
                  <span className="opacity-40 mr-2">{m.role === 'user' ? 'USR>' : 'SYS>'}</span>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/5 border border-white/5 px-6 py-3 flex gap-2">
                  <div className="w-1.5 h-1.5 bg-accent animate-pulse"></div>
                  <div className="w-1.5 h-1.5 bg-accent animate-pulse [animation-delay:-0.15s]"></div>
                  <div className="w-1.5 h-1.5 bg-accent animate-pulse [animation-delay:-0.3s]"></div>
                </div>
              </div>
            )}
          </div>

          {/* Terminal Input */}
          <div className="p-8 border-t border-white/5 bg-surface/10">
            <div className="relative flex items-center">
              <span className="absolute left-0 text-accent/60 font-mono text-xs">P:</span>
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Request analysis..."
                className="w-full bg-transparent pl-8 pr-14 text-xs font-mono text-white focus:outline-none placeholder:text-white/10"
              />
              <button 
                onClick={handleSend}
                className="absolute right-0 text-accent hover:text-white transition-all p-2"
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 border flex items-center justify-center text-xl transition-all shadow-xl active:scale-95 z-[110] relative group overflow-hidden ${
          isOpen ? 'bg-accent border-accent text-dark' : 'bg-dark border-accent/40 text-accent hover:border-accent hover:bg-accent/10'
        }`}
      >
        <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-brain'} transition-all duration-500`}></i>
      </button>
    </div>
  );
};

export default AIChat;
