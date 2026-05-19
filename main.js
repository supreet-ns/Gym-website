import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const SubscriptionForm = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative w-full max-w-md bg-zinc-950 border border-zinc-800 p-8 shadow-2xl"
      >
        {/* Close Button */}
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
          
          {/* Email & Password Fields */}
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

          {/* Subscription Plans (Only show if signing up) */}
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

          {/* Submit Button */}
          <button 
            type="submit"
            className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-widest transition-colors mt-6"
          >
            {isLogin ? 'Sign In' : 'Proceed to Payment'}
          </button>
        </form>

        {/* Toggle Login/Signup */}
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

export default SubscriptionForm;