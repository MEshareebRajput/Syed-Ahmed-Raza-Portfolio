
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-dark relative border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          <div className="space-y-12">
            <div className="space-y-8">
              <span className="text-accent font-mono text-[10px] uppercase tracking-[0.6em]">Terminal.Uplink</span>
              <h2 className="text-6xl md:text-9xl font-display font-bold text-white tracking-tighter uppercase leading-none">
                Get In <span className="text-accent">Touch.</span>
              </h2>
              <p className="text-grayish text-xl font-light max-w-lg leading-relaxed">
                Open for high-impact AI collaborations, technical leadership, or high-level strategic consulting.
              </p>
            </div>
            
            <div className="space-y-12 pt-12 border-t border-white/5">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-mono text-accent/40 uppercase tracking-widest">Digital Channel</span>
                <a href="mailto:syed.ahmed@example.com" className="text-white text-2xl font-display font-bold hover:text-accent transition-colors">syed.ahmed@raza.ai</a>
              </div>
              <div className="flex gap-8">
                {['linkedin-in', 'github', 'x-twitter'].map((social) => (
                  <a key={social} href="#" className="w-12 h-12 border border-white/5 flex items-center justify-center text-white/40 hover:text-accent hover:border-accent/40 transition-all">
                    <i className={`fa-brands fa-${social}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-16 border border-accent/20 bg-surface/10">
                <div className="w-20 h-20 border border-accent flex items-center justify-center text-accent mb-8">
                  <i className="fa-solid fa-check text-4xl animate-pulse-fast"></i>
                </div>
                <h3 className="text-3xl font-display font-bold text-white mb-4 uppercase tracking-tighter">Signal Sent</h3>
                <p className="text-grayish font-light max-w-xs mx-auto mb-10">Data packet transmitted successfully. Expect synchronisation within 24 hours.</p>
                <button onClick={() => setStatus('idle')} className="text-accent font-bold text-[10px] uppercase tracking-widest border-b border-accent/40 pb-2 hover:text-white hover:border-white transition-all">Send New Query</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="border border-white/5 p-12 md:p-16 bg-surface/10 space-y-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-white/10">FORM_ID: XT-99</div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <label className="text-[10px] font-mono text-accent/40 uppercase tracking-widest">Identifier</label>
                    <input 
                      type="text" required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-transparent border-b border-white/10 px-0 py-4 text-white focus:outline-none focus:border-accent transition-all text-lg font-light placeholder:text-white/5"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-mono text-accent/40 uppercase tracking-widest">Return Route</label>
                    <input 
                      type="email" required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-transparent border-b border-white/10 px-0 py-4 text-white focus:outline-none focus:border-accent transition-all text-lg font-light placeholder:text-white/5"
                      placeholder="Email Address"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-mono text-accent/40 uppercase tracking-widest">Query Parameters</label>
                  <textarea 
                    rows={4} required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-transparent border-b border-white/10 px-0 py-4 text-white focus:outline-none focus:border-accent transition-all text-lg font-light resize-none placeholder:text-white/5"
                    placeholder="Enter message details..."
                  ></textarea>
                </div>

                <button 
                  type="submit" disabled={status === 'sending'}
                  className="w-full py-6 bg-accent text-dark font-black text-[11px] uppercase tracking-[0.5em] transition-all hover:bg-white active:scale-[0.98]"
                >
                  {status === 'sending' ? 'Transmitting...' : 'Establish Connection'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      
      <footer className="pt-40 pb-12 mt-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-white/5 pt-12">
           <div className="text-center md:text-left">
              <h4 className="text-sm font-display font-bold text-white uppercase tracking-[0.2em]">Syed Ahmed Raza</h4>
              <p className="text-accent/60 text-[9px] font-mono uppercase tracking-[0.4em] mt-1">Status: Active</p>
           </div>
           
           <p className="text-[8px] font-mono text-white/20 uppercase tracking-[0.8em]">© 2024 AHMED_RAZA_ARCHITECT // ALL RIGHTS RESERVED</p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
