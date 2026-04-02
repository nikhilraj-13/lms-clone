import React from "react";
import { BookOpen } from "lucide-react";
import Navbar from "../components/Navbar";

export default function WeeklySubjectFeedback() {
  // Replace with real data from your API/props
  const subjects = [];

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white font-sans">
      <Navbar />

      <div className="max-w-6xl mx-auto px-8 py-10 pt-20">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">Weekly Subject Feedback</h1>
          <p className="text-gray-500 text-sm mt-2">Share your thoughts on this week's subjects</p>
        </div>

        {/* Content Area */}
        {subjects.length === 0 ? (
          <div className="bg-[#181818] border border-gray-800 rounded-2xl flex flex-col items-center justify-center py-24 px-8">
            {/* Open Book Icon */}
            <div className="mb-5">
              <BookOpen size={68} strokeWidth={1.5} className="text-gray-600" />
            </div>
            <p className="text-white font-bold text-lg">All Caught Up!</p>
            <p className="text-gray-500 text-sm mt-1">
              No subjects available for feedback at this time.
            </p>
          </div>
        ) : (
          <div className="grid gap-4">
            {subjects.map((subject) => (
              <div
                key={subject.id}
                className="bg-[#181818] border border-gray-800 rounded-2xl p-6 flex items-center justify-between"
              >
                <div>
                  <h2 className="text-white font-semibold text-base">{subject.name}</h2>
                  <p className="text-gray-500 text-sm mt-0.5">{subject.teacher}</p>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 transition-colors text-white text-sm font-semibold px-5 py-2 rounded-lg">
                  Give Feedback
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}