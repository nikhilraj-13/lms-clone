import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Feedback() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ title: "", message: "", category: "General" });

  const handleCreate = () => {
    if (!form.title.trim() || !form.message.trim()) return;
    setFeedbacks([...feedbacks, { ...form, id: Date.now(), date: new Date().toLocaleDateString() }]);
    setForm({ title: "", message: "", category: "General" });
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white font-sans">
      <Navbar />

      {/* Page Content */}
      <div className="max-w-6xl mx-auto px-8 py-10 pt-20">
        {/* Header Row */}
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-3xl font-bold text-white">Feedback</h1>
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold px-5 py-2.5 rounded-lg text-sm"
          >
            <span className="text-lg leading-none">+</span>
            Create Feedback
          </button>
        </div>

        {/* Empty State */}
        {feedbacks.length === 0 ? (
          <div className="flex flex-col items-center justify-center mt-32 gap-4">
            {/* Chat bubble icon */}
            <div className="mb-2">
              <svg
                width="72"
                height="72"
                viewBox="0 0 72 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="8"
                  y="8"
                  width="56"
                  height="44"
                  rx="8"
                  stroke="#4b5563"
                  strokeWidth="3"
                  fill="none"
                />
                <path
                  d="M8 48 L20 62 L20 48"
                  stroke="#4b5563"
                  strokeWidth="3"
                  fill="none"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="text-white text-lg font-medium">No feedback yet</p>
            <p className="text-gray-500 text-sm">Share your thoughts and help us improve!</p>
            <button
              onClick={() => setShowModal(true)}
              className="mt-3 bg-blue-600 hover:bg-blue-700 transition-colors text-white font-bold px-8 py-3 rounded-lg text-sm"
            >
              Submit Your First Feedback
            </button>
          </div>
        ) : (
          /* Feedback List */
          <div className="grid gap-4">
            {feedbacks.map((fb) => (
              <div
                key={fb.id}
                className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-5 flex flex-col gap-2"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-white text-base">{fb.title}</span>
                  <span className="text-xs text-gray-500">{fb.date}</span>
                </div>
                <span className="text-xs text-blue-400 bg-blue-900/30 px-2 py-0.5 rounded w-fit">
                  {fb.category}
                </span>
                <p className="text-gray-400 text-sm">{fb.message}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="bg-[#1a1a1a] border border-gray-700 rounded-2xl w-full max-w-md p-6 flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-white">Create Feedback</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-white transition-colors text-xl leading-none"
              >
                ×
              </button>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-400">Title</label>
              <input
                type="text"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                placeholder="Brief title for your feedback"
                className="bg-[#111] border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-400">Category</label>
              <select
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="bg-[#111] border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
              >
                <option value="" disabled>Select a category</option>
                <option value="Academics">Academics</option>
                <option value="Faculty">Faculty</option>
                <option value="Technical">Technical</option>
                <option value="Infrastructure">Infrastructure</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-400">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Share your thoughts in detail..."
                rows={4}
                className="bg-[#111] border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
              />
            </div>

            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="px-5 py-2 rounded-lg text-sm text-gray-400 hover:text-white border border-gray-700 hover:border-gray-500 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleCreate}
                className="px-5 py-2 rounded-lg text-sm bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}