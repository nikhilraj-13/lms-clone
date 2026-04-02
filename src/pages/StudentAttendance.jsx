import React from 'react';
import Nav from '../components/Navbar';
import AttendanceCard from '../components/AttendanceCard';
import { checkAuth } from '../utils/auth';

const StudentAttendance = () => {
  const user = checkAuth();

  if (!user) return null;

  return (
    <div className='min-h-screen bg-neutral-950 text-white pt-20 pb-10'>
      <Nav />
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Attendance</h1>
          <p className="text-neutral-400">View your complete attendance record.</p>
        </div>
        <AttendanceCard attendance={user.attendance} />
      </div>
    </div>
  );
};

export default StudentAttendance;
