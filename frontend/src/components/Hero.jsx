import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] overflow-hidden bg-gray-100 mb-4 shadow-sm">
            {/* Background Gradient/Pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#2874f0] to-[#60a5fa] opacity-10"></div>

            <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between relative z-10">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-left max-w-lg"
                >
                    <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-800 mb-4 tracking-tight">
                        New Summer <br />
                        <span className="text-brand-blue">Collection 2024</span>
                    </h1>
                    <p className="text-gray-600 mb-6 text-sm sm:text-lg">
                        Get up to <span className="font-bold text-red-500">50% OFF</span> on top brands.
                        Free shipping on orders over $50.
                    </p>
                    <button className="bg-brand-blue text-white px-6 py-3 rounded-sm font-bold shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all">
                        Shop Now
                    </button>
                </motion.div>

                {/* Image/Graphic */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="hidden sm:block"
                >
                    <img
                        src="https://pngimg.com/uploads/headphones/headphones_PNG7645.png"
                        alt="Hero Product"
                        className="h-[200px] md:h-[350px] object-contain drop-shadow-2xl transform -rotate-12 hover:rotate-0 transition-all duration-700"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
