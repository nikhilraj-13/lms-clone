import React from 'react';
import Navbar from '../components/Navbar';

export default function Chat() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white pt-20 pb-10">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Chat Groups</h1>
          <p className="text-neutral-400">Groups assigned to you and universal groups.</p>
        </div>
        
        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
          <p className="text-neutral-500">No groups assigned to you yet.</p>
        </div>
      </div>
    </div>
  );
}
