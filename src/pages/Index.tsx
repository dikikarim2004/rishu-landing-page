import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Index = () => {
  const phoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!phoneRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = phoneRef.current.getBoundingClientRect();
      
      const x = (clientX - left - width / 2) / 25;
      const y = (clientY - top - height / 2) / 25;
      
      phoneRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen w-full bg-neo-black overflow-hidden">
      {/* Background Grid */}
      <div className="fixed inset-0 bg-grid opacity-20" />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-12 lg:py-0">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center lg:text-left order-2 lg:order-1"
          >
            <div className="inline-block">
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-neo-purple/10 text-neo-purple border border-neo-purple/20">
                Telegram Mini App
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Explore
              <span className="text-gradient block sm:inline"> Memecoins </span>
              <span className="block sm:inline">Like Never Before</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Join Rishu and become part of the memecoin revolution. Invest, manage, and track your crypto portfolio effortlessly from your mobile device.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a
                href="#download"
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-neo-purple text-white font-medium hover:bg-neo-purple/90 transition-colors duration-200 shadow-lg shadow-neo-purple/25 text-sm sm:text-base"
              >
                Get Started Now
              </a>
            </motion.div>
          </motion.div>
          
          {/* Right Content - Phone */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 lg:order-2"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-neo-purple/20 to-neo-pink/20 blur-3xl" />
            <div
              ref={phoneRef}
              className="relative transition-transform duration-75 ease-out"
            >
              <div className="glass-card rounded-[2.5rem] p-4 sm:p-0 max-w-[240px] sm:max-w-[280px] mx-auto h-[480px] sm:h-[580px] relative border border-white/10">
                {/* Phone Frame */}
                <div className="absolute top-0 left-0 right-0 h-5 sm:h-7 bg-black/0 rounded-t-[2.5rem] flex items-center justify-center">
                  <div className="w-14 sm:w-16 h-3 sm:h-4 bg-black/90 rounded-full relative">
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 sm:w-10 h-1.5 sm:h-2 bg-neo-black rounded-full"></div>
                  </div>
                </div>
                
                {/* Screen Content */}
                <div className="w-full h-full rounded-[2rem] overflow-hidden bg-gradient-to-b from-neo-purple/10 to-neo-pink/10 mt-1">
                  <img
                    src="/rishu.png"
                    alt="Rishu App Interface"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Bottom Home Button */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-white/20 rounded-full"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Index;