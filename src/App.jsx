import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import StudentDashboard from "./pages/studentDashboard";
import ApplyLeave from "./components/ApplyLeave";
import StudentAttendance from "./pages/StudentAttendance";
import StudentCalendar from "./components/StudentCalendar";
import SemesterAttendance from "./components/SemesterAttendance";
import Assignments from "./pages/Assignments";
import FeedBack from "./components/FeedBack";
import WeeklyFeedback from "./components/WeeklyFeedback";
import Profile from "./components/Profile";
import Chat from "./pages/Chat";
import Events from "./pages/Events";
import { checkAuth } from "./utils/auth";

function App() {
  const user = checkAuth();

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route 
        path="/login" 
        element={user ? <Navigate to="/student" replace /> : <Login />} 
      />
      
      {/* Student Routes */}
      <Route 
        path="/student" 
        element={user ? <StudentDashboard /> : <Login />} 
      />
      
      <Route 
        path="/student/attendance" 
        element={
            <StudentAttendance />
        } 
      />
      <Route 
        path="/student/calendar" 
        element={
            <StudentCalendar />
        } 
      />
      <Route 
        path="/student/semester-attendance" 
        element={
            <SemesterAttendance />
        } 
      />
      <Route 
        path="/student/assignments" 
        element={
            <Assignments />
        } 
      />
        <Route
        path="/student/events"
        element={<Events />}
      />
      <Route 
        path="/student/apply-leave" 
        element={
            <ApplyLeave />
        } 
      />
      <Route 
        path="/student/feedback" 
        element={
            <FeedBack />
        } 
      />
      <Route 
        path="/student/weekly-feedback" 
        element={
            <WeeklyFeedback />
        } 
      />
      <Route 
        path="/student/profile" 
        element={
            <Profile />
        } 
      />
      <Route 
        path="/student/chat" 
        element={
            <Chat />
        } 
      />

      {/* Redirect unknown routes */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;