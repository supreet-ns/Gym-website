import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dumbbell, Activity, Flame, X } from 'lucide-react';

// --- SUBSCRIPTION / LOGIN MODAL COMPONENT ---
const SubscriptionForm = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-md bg-zinc-950 border border-zinc-800 p-8 shadow-2xl"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-3xl font-black uppercase tracking-tighter mb-2 text-white">
          {isLogin ? 'Access Account' : 'Join the Elite'}
        </h2>
        <p className="text-gray-400 text-sm mb-8">
          {isLogin ? 'Enter your credentials to continue.' : 'Select a plan and start pushing your limits.'}
        </p>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Email</label>
              <input 
                type="email" 
                className="w-full bg-zinc-900 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-red-600 transition-colors"
                placeholder="athlete@example.com"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Password</label>
              <input 
                type="password" 
                className="w-full bg-zinc-900 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-red-600 transition-colors"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          {!isLogin && (
            <div className="space-y-3 pt-4 border-t border-zinc-800">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Select Plan</label>
              <label className="flex items-center justify-between p-4 border border-zinc-800 cursor-pointer hover:border-red-600 transition-colors group">
                <div className="flex items-center gap-3">
                  <input type="radio" name="plan" className="accent-red-600 w-4 h-4" defaultChecked />
                  <span className="text-white font-bold tracking-wide">Monthly Pass</span>
                </div>
                <span className="text-gray-400 group-hover:text-white transition-colors">₹1,500/mo</span>
              </label>

              <label className="flex items-center justify-between p-4 border border-zinc-800 cursor-pointer hover:border-red-600 transition-colors group">
                <div className="flex items-center gap-3">
                  <input type="radio" name="plan" className="accent-red-600 w-4 h-4" />
                  <span className="text-white font-bold tracking-wide">Annual Protocol</span>
                </div>
                <span className="text-gray-400 group-hover:text-white transition-colors">₹12,000/yr</span>
              </label>
            </div>
          )}

          <button 
            type="submit"
            className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-widest transition-colors mt-6"
          >
            {isLogin ? 'Sign In' : 'Proceed to Payment'}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          {isLogin ? "Don't have an active pass? " : "Already an athlete here? "}
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="text-white hover:text-red-500 font-bold uppercase tracking-wider transition-colors"
          >
            {isLogin ? 'Join Now' : 'Log In'}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

// --- MAIN WEBSITE LANDING PAGE ---
const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-600 selection:text-white font-sans overflow-x-hidden">
      
      {/* Navbar */}
      <nav className="fixed w-full z-40 flex justify-between items-center px-8 py-6 mix-blend-difference">
        <div className="text-2xl font-black uppercase tracking-tighter">
          Apex<span className="text-red-600">.</span>Shivamogga
        </div>
        <div className="flex items-center gap-8 text-sm font-medium tracking-wide">
          <a href="#about" className="hidden md:inline hover:text-red-500 transition-colors">Philosophy</a>
          <a href="#facilities" className="hidden md:inline hover:text-red-500 transition-colors">Facilities</a>
          <button 
            onClick={() => setIsOpen(true)}
            className="px-5 py-2 bg-white text-black font-bold uppercase tracking-wider text-xs hover:bg-red-600 hover:text-white transition-colors duration-300"
          >
            Join Elite
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-0" />

        <motion.div 
          className="relative z-10 text-center px-4"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            variants={fadeUp}
            className="text-6xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter leading-none mb-4"
          >
            Redefine <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">Limits</span>
          </motion.h1>
          
          <motion.p 
            variants={fadeUp}
            className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light"
          >
            Elite equipment. Raw atmosphere. No distractions. <br/>
            The premier training facility in the heart of the city.
          </motion.p>
          
          <motion.div variants={fadeUp} className="mt-10">
            <button 
              onClick={() => setIsOpen(true)}
              className="group relative px-8 py-4 bg-white text-black font-bold uppercase tracking-widest overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Start Training</span>
              <div className="absolute inset-0 h-full w-full bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-8 bg-black relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            <motion.div variants={fadeUp} className="border-t border-gray-800 pt-8 group">
              <Dumbbell className="w-12 h-12 text-red-600 mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">Elite Gear</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Outfitted with competition-grade racks, calibrated plates, and specialized machines designed for optimal biomechanics.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="border-t border-gray-800 pt-8 group">
              <Flame className="w-12 h-12 text-red-600 mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">Unmatched Vibe</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                A dark, focused aesthetic engineered to eliminate distractions and push your nervous system to the absolute edge.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="border-t border-gray-800 pt-8 group">
              <Activity className="w-12 h-12 text-red-600 mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">Expert Coaching</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Data-driven programming and form correction from coaches who live and breathe high-performance training.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 border-t border-gray-900 text-center">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">Ready to Commit?</h2>
        <button 
          onClick={() => setIsOpen(true)}
          className="text-xl text-red-600 hover:text-white transition-colors uppercase tracking-widest font-bold bg-transparent border-none cursor-pointer"
        >
          Claim Your Pass
        </button>
      </footer>

      {/* Pop-up form controller */}
      <AnimatePresence>
        {isOpen && <SubscriptionForm onClose={() => setIsOpen(false)} />}
      </AnimatePresence>
    </div>
  );
};

export default App;