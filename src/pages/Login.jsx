import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { loginDetails } from "../utils/auth";
import { motion } from "framer-motion";

export default function Login() {
  const [role, setRole] = useState("Student");
  const [uid, setUid] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith("/student")) {
      setRole("Student");
    }
  }, [location]);

  const roles = ["Student", "Mentor", "Admin"];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (role === "Student") {
      const success = loginDetails(uid, password);

      if (!success) {
        alert("Login failed. Please try again");
        return;
      }
      // Reload to update the user state in App.jsx
      window.location.href = "/student";
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 py-10 bg-black">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md rounded-2xl border border-white/10 bg-neutral-950/70 backdrop-blur-md shadow-xl"
      >
        {/* Header */}
        <div className="p-6 pb-2 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white">
            Welcome Back
          </h2>

          <p className="text-sm text-gray-400">Sign in to your account</p>
        </div>

        {/* Form */}
        <div className="p-6 pt-2">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Role */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200">Role</label>

              <div className="flex gap-2">
                {roles.map((r) => (
                  <button
                    type="button"
                    key={r}
                    onClick={() => setRole(r)}
                    className={`px-3 py-2 rounded-md border text-sm transition-colors ${
                      role === r
                        ? "bg-white text-black border-white"
                        : "bg-transparent text-gray-300 border-white/10 hover:bg-white/5"
                    }`}>
                    {r}
                  </button>
                ))}
              </div>
            </div>

            {/* UID / Email */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200">
                {role === "Student" ? "University UID" : "Email"}
              </label>

              <input
                type={role === "Student" ? "text" : "email"}
                placeholder={
                  role === "Student"
                    ? "Enter University UID"
                    : "Enter Email Address"
                }
                value={uid}
                onChange={(e) => setUid(e.target.value)}
                className="flex h-10 w-full rounded-md border border-white/10 bg-black/60 px-3 py-2 text-sm text-white placeholder:text-gray-400 shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                required
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-200">
                  Password
                </label>
              </div>

              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="flex h-10 w-full rounded-md border border-white/10 bg-black/60 px-3 py-2 text-sm text-white placeholder:text-gray-400 shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full h-10 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition-colors"
            >
              Sign In
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-gray-500">
            Use your role-based credentials. Contact admin if you need help.
          </p>
        </div>
      </motion.div>
    </div>
  );
}