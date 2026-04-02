import React, { useState, useMemo } from 'react';
import Nav from '../components/Navbar';
import { checkAuth } from '../utils/auth';
import { XCircle, CheckCircle2 } from 'lucide-react';

export default function SemesterAttendance() {
  const user = checkAuth();
  const [selectedSemester, setSelectedSemester] = useState(user?.attendance[0]);

  const attendanceData = useMemo(() => {
    if (!selectedSemester) return null;

    const { present, total, bonus, startDate, endDate } = selectedSemester;
    const absent = total - present;
    const attendancePercentage = Math.round((present / total) * 100);
    const attendanceWithBonus = Math.round(((present + bonus) / total) * 100);

    const getStatus = () => {
      if (attendancePercentage < 75) {
        return {
          message: 'Your attendance is critically low. Please prioritize attending classes.',
          color: 'text-red-500',
          Icon: XCircle,
        };
      }
      return {
        message: 'Your attendance is good. Keep up the consistent attendance!',
        color: 'text-green-500',
        Icon: CheckCircle2,
      };
    };

    const sDate = new Date(startDate.split('/').reverse().join('-'));
    const eDate = new Date(endDate.split('/').reverse().join('-'));
    const duration = Math.ceil((eDate - sDate) / (1000 * 60 * 60 * 24)) + 1;

    return {
      ...selectedSemester,
      absent,
      attendancePercentage,
      attendanceWithBonus,
      status: getStatus(),
      duration,
    };
  }, [selectedSemester]);

  if (!user || !attendanceData) {
    return (
      <div className='min-h-screen bg-neutral-950 text-white pt-20 pb-10'>
        <Nav />
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <p>No attendance data available.</p>
        </div>
      </div>
    );
  }

  const { 
    semester, 
    present, 
    total, 
    bonus, 
    startDate, 
    endDate, 
    absent, 
    attendancePercentage, 
    attendanceWithBonus, 
    status, 
    duration 
  } = attendanceData;

  return (
    <div className='min-h-screen bg-neutral-950 text-white pt-20 pb-10'>
      <Nav />
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Semester Attendance</h1>
          <p className="text-neutral-400">View your attendance statistics by semester</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
              <h2 className="text-lg font-semibold mb-4">Semesters</h2>
              <div className="space-y-2">
                {user.attendance.map((sem) => (
                  <button
                    key={sem.semester}
                    onClick={() => setSelectedSemester(sem)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      selectedSemester.semester === sem.semester
                        ? 'bg-blue-600 text-white'
                        : 'bg-neutral-800 hover:bg-neutral-700'
                    }`}>
                    <p className="font-semibold">{sem.semester}</p>
                    <p className="text-sm opacity-80">{sem.startDate} - {sem.endDate}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold">{semester}</h2>
                <p className="text-neutral-400">{startDate} - {endDate}</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold">{attendancePercentage}%</p>
                <p className="text-neutral-400">Attendance</p>
              </div>
            </div>

            {/* Overall Attendance */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Overall Attendance</h3>
                <p className="font-semibold">{attendancePercentage}%</p>
              </div>
              <div className="w-full bg-neutral-700 rounded-full h-2.5 mb-6">
                <div className={`h-2.5 rounded-full ${attendancePercentage < 75 ? 'bg-red-500' : 'bg-green-500'}`} style={{ width: `${attendancePercentage}%` }}></div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <StatCard title="Total Marked" value={total} />
                <StatCard title="Present Count" value={present} color="text-green-400" />
                <StatCard title="Absent Count" value={absent} color="text-red-400" />
                <StatCard title="Attendance %" value={`${attendancePercentage}%`} color={attendancePercentage < 75 ? 'text-red-400' : 'text-green-400'} />
              </div>
            </div>

            {/* Status Breakdown & Period Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
                <h3 className="font-semibold mb-4">Status Breakdown</h3>
                <div className="space-y-3">
                  <InfoRow label="Present Count" value={present} badgeColor="bg-green-500" />
                  <InfoRow label="Absent Count" value={absent} badgeColor="bg-red-500" />
                  <InfoRow label="Leave Days" value={0} badgeColor="bg-yellow-500" />
                  <InfoRow label="Intern Leave Days" value={0} badgeColor="bg-purple-500" />
                </div>
              </div>
              <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
                <h3 className="font-semibold mb-4">Period Information</h3>
                <div className="space-y-3">
                  <InfoRow label="Start Date" value={startDate} />
                  <InfoRow label="End Date" value={endDate} />
                  <InfoRow label="Duration" value={`${duration} days`} />
                </div>
              </div>
            </div>

            {/* Attendance Status */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <h3 className="font-semibold mb-4">Attendance Status</h3>
              <div className={`flex items-center gap-3 ${status.color}`}>
                <status.Icon className="w-5 h-5" />
                <p className="font-medium">{status.message}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const StatCard = ({ title, value, color = 'text-white' }) => (
  <div>
    <p className="text-neutral-400 text-sm">{title}</p>
    <p className={`text-2xl font-bold ${color}`}>{value}</p>
  </div>
);

const InfoRow = ({ label, value, badgeColor }) => (
  <div className="flex justify-between items-center text-sm">
    <p className="text-neutral-400">{label}</p>
    <div className="flex items-center gap-2">
      {badgeColor && <div className={`w-2.5 h-2.5 rounded-full ${badgeColor}`}></div>}
      <p className="font-semibold text-white">{value}</p>
    </div>
  </div>
);
