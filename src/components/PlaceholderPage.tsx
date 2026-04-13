import React from 'react';
import { motion } from 'motion/react';

export default function PlaceholderPage({ title, description }: { title: string, description: string }) {
  return (
    <div className="min-h-screen pt-36 pb-24 flex items-center justify-center text-center">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
            {title}
          </h1>
          <p className="text-xl text-gray-400 mb-10 leading-relaxed">
            {description}
          </p>
          <div className="w-24 h-1 bg-modina-red mx-auto rounded-full"></div>
        </motion.div>
      </div>
    </div>
  );
}
