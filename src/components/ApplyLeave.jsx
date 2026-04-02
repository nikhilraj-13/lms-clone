import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import { Plus, User, FileText, Send, Calendar, Clock, CheckCircle2, XCircle, AlertCircle } from "lucide-react";

const ApplyLeave = () => {
  const [form, setForm] = useState({
    category: "",
    fromDate: "",
    toDate: "",
    leaveTime: "",
    returnTime: "",
    remark: "",
  });

  // Mock data for leave requests
  const [leaveRequests, setLeaveRequests] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className='min-h-screen pt-20 bg-neutral-950 text-white'>
      <Navbar />
      <div className='max-w-7xl mx-auto pb-10 px-4 sm:px-6 lg:px-8 pt-5'>
        {/* header */}
        <div className='mb-8'>
          <h1 className='text-3xl font-bold mb-1'>Apply for Leave</h1>
          <p className='text-neutral-400'>Submit your leave application and track your requests</p>
        </div>

        {/* STATS */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8'>
          <Stat title="Total Applications" value="0" />
          <Stat title="Pending Review" value="0" color="text-amber-400" />
          <Stat title="Approved" value="0" color="text-emerald-400" />
          <Stat title="Rejected" value="0" color="text-rose-400" />
        </div>

        {/* MAIN GRID */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {/* FORM */}
          <div className='bg-neutral-900/50 border border-neutral-800 rounded-xl p-6'>
            <div className='flex items-center gap-3 mb-6'>
              <div className='w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center'>
                <Plus className='w-5 h-5 text-neutral-400' />
              </div>
              <div>
                <h2 className='text-xl font-semibold'>New Leave Application</h2>
                <p className="text-sm text-neutral-400 font-medium">Fill out the form to submit your leave request</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* CATEGORY */}
              <div>
                <label className="block text-sm font-semibold text-neutral-200 mb-2">Leave Category</label>
                <select 
                  name="category" 
                  value={form.category} 
                  onChange={handleChange} 
                  className="w-full px-4 py-2.5 bg-neutral-950 text-neutral-100 border border-neutral-800 rounded-lg focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all" 
                  required
                >
                  <option value="">Select category</option>
                  <option>Personal reasons</option>
                  <option>Festival celebration</option>
                  <option>Hackathon participation</option>
                  <option>College event</option>
                  <option>Sick Leave</option>
                  <option>Placement drives</option>
                  <option>Company work</option>
                  <option>Interviews</option>
                  <option>Family functions</option>
                  <option>Emergency situations</option>
                  <option>Travel-related reasons</option>
                  <option>Duty leave</option>
                  <option>Others</option>
                </select>
              </div>

              {/* DATES */}
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div>
                  <label className="block text-sm font-semibold text-neutral-200 mb-2">From Date</label>
                  <input 
                    type="date" 
                    name='fromDate'
                    value={form.fromDate} 
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-neutral-950 text-neutral-100 border border-neutral-800 rounded-lg focus:ring-1 focus:ring-blue-500 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-neutral-200 mb-2">To Date</label>
                  <input 
                    type="date" 
                    name='toDate'
                    value={form.toDate} 
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-neutral-950 text-neutral-100 border border-neutral-800 rounded-lg focus:ring-1 focus:ring-blue-500 focus:outline-none"
                    required
                  />
                </div>
              </div>

              {/* TIME */}
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div>
                  <label className="block text-sm font-semibold text-neutral-200 mb-2">Leave Time</label>
                  <input 
                    type="time" 
                    name='leaveTime'
                    value={form.leaveTime} 
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-neutral-950 text-neutral-100 border border-neutral-800 rounded-lg focus:ring-1 focus:ring-blue-500 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-neutral-200 mb-2">Return Time</label>
                  <input 
                    type="time" 
                    name='returnTime'
                    value={form.returnTime} 
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-neutral-950 text-neutral-100 border border-neutral-800 rounded-lg focus:ring-1 focus:ring-blue-500 focus:outline-none"
                    required
                  />
                </div>
              </div>

              {/* REMARK */}
              <div>
                <label className="block text-sm font-semibold text-neutral-200 mb-2">Additional Remarks (Optional)</label>
                <textarea 
                  name="remark" 
                  value={form.remark} 
                  onChange={handleChange} 
                  placeholder='Any additional information for your mentor or admin' 
                  className="w-full rounded-lg bg-neutral-950 border border-neutral-800 text-neutral-100 min-h-[100px] focus:outline-none focus:ring-1 focus:ring-blue-500 px-4 py-2.5 resize-none transition-all" 
                  rows={4} 
                />
              </div>

              {/* BUTTON */}
              <button 
                type="submit" 
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all"
              >
                <Send className='w-4 h-4' /> Submit Leave Application
              </button>
            </form>
          </div>

          {/* REQUEST LIST */}
          <div className='bg-neutral-900/50 border border-neutral-800 rounded-xl p-6'>
            <div className='flex items-center gap-3 mb-6'>
              <div className='w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center'>
                <User className='w-5 h-5 text-neutral-400' />
              </div>
              <div>
                <h2 className='text-xl font-semibold'>My Leave Requests</h2>
                <p className="text-sm text-neutral-400 font-medium">Track the status of your applications</p>
              </div>
            </div>

            <div className='space-y-4 max-h-[700px] overflow-y-auto pr-2 custom-scrollbar'>
              {leaveRequests.length === 0 ? (
                <div className='text-center py-12'>
                  <FileText className='w-12 h-12 mx-auto mb-4 text-neutral-700' />
                  <p className="text-neutral-400 font-medium">no leave requests yet.</p>
                  <div className='text-sm text-neutral-500 mt-1'>
                    Your submitted applications will appear here
                  </div>
                </div>
              ) : (
                leaveRequests.map((req) => (
                  <LeaveRequestCard key={req.id} req={req} />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const LeaveRequestCard = ({ req }) => {
  const getStatusStyle = (status) => {
    switch (status) {
      case 'approved': return 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20';
      case 'rejected': return 'bg-rose-500/10 text-rose-500 border-rose-500/20';
      default: return 'bg-amber-500/10 text-amber-500 border-amber-500/20';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'approved': return <CheckCircle2 className="w-3.5 h-3.5" />;
      case 'rejected': return <XCircle className="w-3.5 h-3.5" />;
      default: return <AlertCircle className="w-3.5 h-3.5" />;
    }
  };

  return (
    <div className='bg-neutral-950/40 border border-neutral-800 rounded-xl p-5 space-y-4'>
      <div className='flex justify-between items-start'>
        <div className='flex items-center gap-3'>
          <div className='w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center'>
            <FileText className='w-4.5 h-4.5 text-neutral-500' />
          </div>
          <div>
            <h3 className='font-bold text-neutral-100'>{req.category}</h3>
            <p className='text-xs text-neutral-500 font-medium'>Applied on {req.appliedDate}</p>
          </div>
        </div>
        <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-[11px] font-bold uppercase tracking-wider ${getStatusStyle(req.status)}`}>
          {getStatusIcon(req.status)} {req.status}
        </div>
      </div>

      <div className='grid grid-cols-2 gap-y-3 gap-x-4'>
        <div className='flex items-center gap-2 text-xs text-neutral-400'>
          <Calendar className='w-3.5 h-3.5' />
          <span>{req.startDate} - {req.endDate}</span>
        </div>
        <div className='flex items-center gap-2 text-xs text-neutral-400'>
          <Clock className='w-3.5 h-3.5' />
          <span>{req.startTime} - {req.returnTime}</span>
        </div>
        <div className='flex items-center gap-2 text-xs text-neutral-400'>
          <Clock className='w-3.5 h-3.5 opacity-60' />
          <span>{req.duration}</span>
        </div>
        <div className='flex items-center gap-2 text-xs text-neutral-400'>
          <CheckCircle2 className='w-3.5 h-3.5 opacity-60 text-emerald-500' />
          <span>{req.credits}</span>
        </div>
      </div>

      {(req.remark || req.feedback) && (
        <div className='bg-neutral-900/80 border border-neutral-800 rounded-lg p-3'>
          <p className='text-[11px] font-bold text-neutral-500 uppercase tracking-widest mb-1.5'>
            {req.feedback ? 'Teacher Feedback:' : 'Remark:'}
          </p>
          <p className='text-xs text-neutral-300 leading-relaxed font-medium'>
            {req.feedback || req.remark}
          </p>
        </div>
      )}
    </div>
  );
};

const Stat = ({ title, value, color = "text-neutral-100" }) => (
  <div className="bg-neutral-900/50 border border-neutral-800 p-5 rounded-xl flex flex-col gap-1.5">
    <div className={`text-2xl font-bold ${color || "text-white"}`}>{value}</div>
    <div className="text-neutral-500 text-xs font-semibold uppercase tracking-wider">{title}</div>
  </div>
);

export default ApplyLeave;
