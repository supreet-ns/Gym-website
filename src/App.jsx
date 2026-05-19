import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Activity, Flame, ArrowRight, CheckCircle, Users, ArrowLeft } from 'lucide-react';

// ==========================================
// 1. FULL PAGE LOGIN COMPONENT
// ==========================================
const LoginPage = ({ onBack }) => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      {/* Left Side - Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-24 py-12 relative z-10 bg-white shadow-2xl">
        <button 
          onClick={onBack}
          className="absolute top-8 left-8 flex items-center gap-2 text-slate-500 hover:text-orange-500 transition-colors font-bold uppercase tracking-wider text-xs"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>

        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="max-w-md w-full mx-auto mt-12"
        >
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-2 text-slate-900">
            {isLogin ? 'Welcome Back' : 'Join Apex'}
          </h2>
          <p className="text-slate-500 mb-8 font-medium">
            {isLogin ? 'Enter your details to access your dashboard.' : 'Start your fitness journey today.'}
          </p>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-slate-50 border-2 border-slate-100 text-slate-900 px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors rounded-xl"
                  placeholder="athlete@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Password</label>
                <input 
                  type="password" 
                  className="w-full bg-slate-50 border-2 border-slate-100 text-slate-900 px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors rounded-xl"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500 text-white font-black uppercase tracking-widest transition-all rounded-xl shadow-lg shadow-orange-500/30"
            >
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          <div className="mt-8 text-center text-sm font-medium text-slate-500">
            {isLogin ? "Don't have an account? " : "Already a member? "}
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="text-orange-500 hover:text-orange-600 font-bold uppercase tracking-wider transition-colors"
            >
              {isLogin ? 'Sign Up' : 'Log In'}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Right Side - Visual */}
      <div className="hidden md:block w-1/2 relative bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-yellow-400/20 to-lime-400/20 z-10 mix-blend-overlay" />
        <img 
          src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop" 
          alt="Gym Training" 
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 flex items-center justify-center z-20">
           <h1 className="text-6xl font-black text-white uppercase tracking-tighter opacity-50">Apex.</h1>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 2. MAIN WEBSITE COMPONENT (6 SCROLLS)
// ==========================================
const HomePage = ({ onLoginClick }) => {
  // Animation settings
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };
  
  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="bg-slate-50 text-slate-900 font-sans overflow-x-hidden selection:bg-lime-400 selection:text-slate-900">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed w-full z-50 flex justify-between items-center px-8 py-6 bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="text-2xl font-black uppercase tracking-tighter">
          Apex<span className="text-orange-500">.</span>
        </div>
        <div className="flex items-center gap-8 text-sm font-bold tracking-wide">
          <a href="#philosophy" className="hidden md:inline hover:text-orange-500 transition-colors">Philosophy</a>
          <a href="#programs" className="hidden md:inline hover:text-orange-500 transition-colors">Programs</a>
          <button 
            onClick={onLoginClick}
            className="px-6 py-2.5 bg-slate-900 text-white font-bold uppercase tracking-wider text-xs hover:bg-orange-500 transition-all rounded-full shadow-lg shadow-slate-200"
          >
            Member Login
          </button>
        </div>
      </nav>

      {/* --- SCROLL 1: HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center pt-20 px-8 max-w-7xl mx-auto">
        <motion.div 
          className="w-full md:w-3/5 z-10"
          variants={stagger} initial="hidden" animate="visible"
        >
          <motion.div variants={fadeUp} className="inline-block px-4 py-2 bg-lime-100 text-lime-600 font-bold uppercase tracking-widest text-xs rounded-full mb-6 border border-lime-200">
            New Facility in Shivamogga
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-6 text-slate-900">
            Energize <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-400 to-lime-400">Your Life.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg text-slate-500 max-w-lg mb-10 font-medium">
            Professional coaching, state-of-the-art equipment, and a vibrant community dedicated to helping you reach your peak physical condition.
          </motion.p>
          <motion.button variants={fadeUp} onClick={onLoginClick} className="flex items-center gap-3 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-black uppercase tracking-widest rounded-xl transition-all shadow-xl shadow-orange-500/20 group">
            Start Your Trial <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </motion.button>
        </motion.div>

        {/* Hero Abstract Graphic */}
        <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[80vh]">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-orange-500 rounded-3xl transform rotate-3 opacity-20"></div>
          <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" alt="Athlete" className="absolute inset-0 w-full h-full object-cover rounded-3xl shadow-2xl z-10" />
        </div>
      </section>

      {/* --- SCROLL 2: PHILOSOPHY & FEATURES --- */}
      <section id="philosophy" className="py-32 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={fadeUp} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-lime-400 transition-colors">
              <div className="w-14 h-14 bg-lime-100 flex items-center justify-center rounded-2xl mb-6 text-lime-500">
                <Dumbbell className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4">Premium Gear</h3>
              <p className="text-slate-500 font-medium leading-relaxed">Top-tier commercial equipment designed for biomechanical perfection and safety.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-yellow-400 transition-colors">
              <div className="w-14 h-14 bg-yellow-100 flex items-center justify-center rounded-2xl mb-6 text-yellow-500">
                <Activity className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4">Data Driven</h3>
              <p className="text-slate-500 font-medium leading-relaxed">Track your progress with advanced metrics and scientifically backed programming.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-orange-500 transition-colors">
              <div className="w-14 h-14 bg-orange-100 flex items-center justify-center rounded-2xl mb-6 text-orange-500">
                <Flame className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4">High Energy</h3>
              <p className="text-slate-500 font-medium leading-relaxed">A bright, motivating environment that pushes you to give your absolute best every session.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- SCROLL 3: PROGRAMS --- */}
      <section id="programs" className="py-32 px-8 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-5xl font-black uppercase tracking-tighter mb-4">Core Programs</h2>
            <p className="text-slate-400 font-medium">Tailored experiences for every fitness goal.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative h-96 rounded-3xl overflow-hidden cursor-pointer">
              <img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Strength" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <div className="text-orange-400 font-bold tracking-widest text-sm uppercase mb-2">Strength & Conditioning</div>
                <h3 className="text-3xl font-black uppercase">Power Building</h3>
              </div>
            </div>
            <div className="group relative h-96 rounded-3xl overflow-hidden cursor-pointer">
              <img src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="HIIT" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <div className="text-lime-400 font-bold tracking-widest text-sm uppercase mb-2">Cardio & Endurance</div>
                <h3 className="text-3xl font-black uppercase">High Intensity</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SCROLL 4: THE TEAM --- */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-5xl font-black uppercase tracking-tighter text-slate-900 mb-4">Elite Coaches</h2>
              <p className="text-slate-500 font-medium">Learn from professionals who walk the walk.</p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[1, 2, 3].map((item) => (
                <div key={item} className="bg-slate-50 rounded-3xl p-6 border border-slate-100 text-center">
                  <div className="w-32 h-32 mx-auto bg-slate-200 rounded-full mb-6 overflow-hidden">
                    <img src={`https://i.pravatar.cc/300?img=${item + 10}`} alt="Coach" className="w-full h-full object-cover" />
                  </div>
                  <h4 className="text-xl font-black uppercase mb-1">Coach {item === 1 ? 'Marcus' : item === 2 ? 'Sarah' : 'David'}</h4>
                  <p className="text-orange-500 font-bold text-sm uppercase tracking-widest mb-4">Head of Training</p>
                  <p className="text-slate-500 text-sm">Specializes in biomechanics, hyper-trophy, and sports nutrition.</p>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* --- SCROLL 5: TESTIMONIALS & STATS --- */}
      <section className="py-24 px-8 bg-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <Users className="w-12 h-12 text-lime-500 mx-auto mb-8" />
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-slate-900 mb-8 leading-tight">
            "Switching to Apex was the best decision I ever made. The energy here makes it impossible to fail."
          </h2>
          <p className="text-slate-500 font-bold uppercase tracking-widest">- Rahul S., Member since 2024</p>
        </div>
      </section>

      {/* --- SCROLL 6: FOOTER / CTA --- */}
      <section className="py-32 px-8 bg-gradient-to-br from-orange-500 via-yellow-400 to-lime-400 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-slate-900 mb-8">
            Ready to Start?
          </h2>
          <button onClick={onLoginClick} className="px-10 py-5 bg-slate-900 text-white font-black uppercase tracking-widest rounded-xl hover:bg-slate-800 transition-colors shadow-2xl hover:-translate-y-1">
            Join The Club
          </button>
        </motion.div>
      </section>
      
      <footer className="bg-slate-900 text-slate-500 text-center py-8 font-medium text-sm">
        © 2026 Apex Gym Shivamogga. All rights reserved.
      </footer>
    </div>
  );
};

// ==========================================
// MAIN APP CONTROLLER
// ==========================================
const App = () => {
  // This state controls whether we show the landing page or the full login page!
  const [currentView, setCurrentView] = useState('home');

  if (currentView === 'login') {
    return <LoginPage onBack={() => setCurrentView('home')} />;
  }

  return <HomePage onLoginClick={() => setCurrentView('login')} />;
};

export default App;