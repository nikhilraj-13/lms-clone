import React from 'react';
import Navbar from '../components/Navbar';
import { checkAuth } from '../utils/auth';

export default function Profile() {
  const user = checkAuth();

  if (!user) return null;

  return (
    <div className="min-h-screen pt-20 bg-black text-white selection:bg-blue-500/30">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-16 py-8 space-y-10">
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
            <p className="text-neutral-400 text-sm mt-1">View and update your personal information</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors shadow-lg shadow-blue-900/20">
              Reset Password
            </button>
            <button className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white text-sm font-semibold rounded-lg border border-neutral-700 transition-colors">
              Edit
            </button>
          </div>
        </div>

        {/* TOP SECTION: PROFILE CARD & MAIN INFO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Side: Profile Card */}
          <div className="lg:col-span-4 bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 flex flex-col items-center text-center space-y-6">
            <div className="relative">
              <img 
                src={user.image || "https://i.pravatar.cc/150"} 
                alt={user.name} 
                className="w-32 h-32 rounded-full border-4 border-neutral-800 object-cover shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight uppercase">{user.name}</h2>
              <p className="text-neutral-400 font-medium">Student</p>
              <p className="text-neutral-500 text-xs mt-1">{user.university} • {user.uid}</p>
            </div>
            <div className="flex flex-wrap justify-center gap-2 pt-2">
              <button className="px-4 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-xs font-semibold rounded-md border border-neutral-700 transition-colors">
                Edit Profile
              </button>
              <button className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-xs font-semibold rounded-md transition-colors shadow-lg shadow-blue-900/10">
                Reset Password
              </button>
            </div>
          </div>

          {/* Right Side: Quick Info Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InfoBox label="ENROLLMENT NUMBER" value="—" />
            <InfoBox label="COURSE" value="—" />
            <InfoBox label="BRANCH" value="—" />
            <InfoBox label="SEMESTER" value="—" />
            <InfoBox label="GENDER" value="—" />
            <InfoBox label="ALTERNATE EMAIL" value={user.email} isLink />
            <InfoBox label="ALTERNATE PHONE" value="—" />
            <InfoBox label="GUARDIAN" value="—" />
          </div>
        </div>

        {/* CONTACT & LINKS SECTION */}
        <section className="bg-neutral-900/30 border border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-8">
          <h3 className="text-xl font-bold tracking-tight">Contact & Links</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <InfoBox label="MOBILE" value={user.mobile} />
            <InfoBox label="PARENT MOBILE" value="—" />
            <InfoBox label="UNIVERSITY EMAIL" value={user.email} isLink />
            <InfoBox label="CURRENT EMAIL" value={user.email} isLink />
            <InfoBox label="ADDRESS" value="—" />
            <InfoBox label="PORTFOLIO" value="—" />
            <InfoBox label="RESUME" value="—" />
            <InfoBox label="GITHUB" value="—" />
            <InfoBox label="LINKEDIN" value="—" />
            <InfoBox label="TWITTER" value="—" />
            <InfoBox label="YOUTUBE" value="—" />
          </div>
        </section>

        {/* ACADEMICS SECTION */}
        <section className="bg-neutral-900/30 border border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-8">
          <h3 className="text-xl font-bold tracking-tight">Academics</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <InfoBox label="UNIVERSITY" value={user.university} />
            <InfoBox label="UNIVERSITY UID" value={user.uid} />
            <InfoBox label="DATE OF BIRTH" value="—" />
            <InfoBox label="ADMISSION YEAR" value="—" />
            <InfoBox label="CURRENT YEAR" value="—" />
            <InfoBox label="SECTION" value="—" />
            <InfoBox label="SUBJECTS" value={user.subjects.join(", ")} />
            <InfoBox label="MENTORS" value={user.mentors.map(m => m.name).join(", ")} />
          </div>
        </section>
      </div>
    </div>
  );
}

function InfoBox({ label, value, isLink = false }) {
  return (
    <div className="bg-black/40 border border-neutral-800/50 rounded-xl p-4 flex flex-col gap-1 transition-all hover:border-neutral-700/50 group">
      <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">{label}</span>
      <span className={`text-sm font-medium ${isLink ? 'text-blue-400 group-hover:text-blue-300' : 'text-neutral-200'} truncate`}>
        {value || "—"}
      </span>
    </div>
  );
}
