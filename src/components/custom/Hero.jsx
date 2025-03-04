import React from 'react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -50 }} 
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="flex flex-col items-center justify-center min-h-screen bg-white text-black px-6 relative overflow-hidden"
    >
      {/* Background Glow Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-200 to-cyan-200 opacity-50 rounded-full blur-3xl"></div>
      </div>
      
      <div className="text-center relative z-10">
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
          Explore the Future of Travel
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          Your personal AI-powered trip planner, crafting tailored itineraries just for you.
        </p>
        <Link to={'/create-trip'}>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="mt-8 px-8 py-3 text-lg font-bold bg-gradient-to-r from-blue-500 to-cyan-500 hover:opacity-90 rounded-xl shadow-lg shadow-cyan-300/50 transform transition-all text-white">
              Get Started – It's Free
            </Button>
          </motion.div>
        </Link>
      </div>
      
      {/* Floating AI-Themed Image */}
      <motion.div 
        initial={{ y: 20 }} 
        animate={{ y: -20 }} 
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="relative mt-10 sm:mt-16"
      >
        <img src='/src/assets/landing1.png' className='w-[900px] sm:w-[900px] drop-shadow-xl' alt='Futuristic AI Travel' />
      </motion.div>
      
      {/* Footer */}
      <footer className="mt-10 text-center text-gray-500 text-sm relative z-10">
        &copy; {new Date().getFullYear()} Made By Hassan Naeem - NCST. All rights reserved.
      </footer>
    </motion.div>
  );
}

export default Hero;