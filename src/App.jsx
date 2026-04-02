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
import ProtectedRoute from "./components/ProtectedRoute";
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
          <ProtectedRoute>
            <StudentAttendance />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/student/calendar" 
        element={
          <ProtectedRoute>
            <StudentCalendar />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/student/semester-attendance" 
        element={
          <ProtectedRoute>
            <SemesterAttendance />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/student/assignments" 
        element={
          <ProtectedRoute>
            <Assignments />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/student/apply-leave" 
        element={
          <ProtectedRoute>
            <ApplyLeave />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/student/feedback" 
        element={
          <ProtectedRoute>
            <FeedBack />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/student/weekly-feedback" 
        element={
          <ProtectedRoute>
            <WeeklyFeedback />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/student/profile" 
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/student/chat" 
        element={
          <ProtectedRoute>
            <Chat />
          </ProtectedRoute>
        } 
      />

      {/* Redirect unknown routes */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;