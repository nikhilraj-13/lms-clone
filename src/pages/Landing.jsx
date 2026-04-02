import React from "react";
import FeatureCard from "../components/FeatureCard";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen w-full bg-[#0a0a0a] flex flex-col items-center justify-center text-center px-4 selection:bg-white/20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center mt-12"
      >
        <h1 className="text-[70px] sm:text-[90px] md:text-[110px] font-black text-white leading-[0.9] tracking-tighter">Coding</h1>
        <h1 className="text-[70px] sm:text-[90px] md:text-[110px] font-black text-[#8a8a93] leading-[0.9] tracking-tighter">Gita</h1>
        <p className="text-[#9ca3af] mt-8 text-sm sm:text-base font-medium tracking-wide">
          Smart, simple, and reliable attendance for modern classrooms.
        </p>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        onClick={() => navigate("/login")}
        className="mt-10 px-8 py-2.5 bg-white text-black text-sm font-semibold rounded-lg hover:bg-gray-200 transition-colors"
      >
        Login
      </motion.button>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-16 grid gap-4 w-full max-w-[800px] sm:grid-cols-2"
      >
        <FeatureCard
          title="Role-based dashboards"
          description="Admin, Mentor, and Student experiences tailored to their needs."
        />

        <FeatureCard
          title="Fast and secure access"
          description="Encrypted sessions and streamlined navigation."
        />
      </motion.div>
    </div>
  );
};

export default Landing;