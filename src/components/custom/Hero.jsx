import React from "react";
import { ContainerScroll } from "/workspaces/NVTC-12.A-AI-Trip-Planner/src/container-scroll-animation.jsx";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="bg-gray-50 flex items-center flex-col min-h-screen justify-center text-black">
      <div className="flex flex-col overflow-hidden text-center">
        <ContainerScroll
          titleComponent={
            <>
              <span className="text-4xl md:text-[5rem] text-blue-800 font-bold mt-1 leading-none">
                AI-Powered Trip Planner
                <br />
                <br />
              </span>
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                Explore the future of travel
              </h1>

              <Link to={'/create-trip'}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="mt-5 px-12 py-4 text-lg font-bold bg-gradient-to-r from-blue-500 to-cyan-500 hover:opacity-90 rounded-xl shadow-lg shadow-cyan-300/50 transform transition-all text-white">
                    Get Started – It's Free
                  </Button>
                </motion.div>
              </Link>
            </>
          }
        >
          <img
            src="src/assets/landing1.png"
            alt="Futuristic AI Travel"
            className="mx-auto rounded-2xl object-contain w-full h-auto mt-12 max-w-full"
            draggable={false}
          />
        </ContainerScroll>
        <p className="mt-6 text-xl sm:text-l text-gray-500 max-w-2xl mx-auto font-bold">
        Copyrights 2025 - AI Travel Planner - NCST 
        </p>
      </div>
    </section>
  );
}

export default Hero;