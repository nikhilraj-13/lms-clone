import React from "react";

const FeatureCard = ({ title, description }) => {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-[#111111] p-6 text-left hover:bg-[#161616] transition-colors">
      <h3 className="text-[#e4e4e7] text-[15px] font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 text-[13px] text-[#a1a1aa] leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;