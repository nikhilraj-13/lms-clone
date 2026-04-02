import { useState, useMemo } from "react";
import Nav from "../components/Navbar";

// Replace with your real data source (API call, props, context, etc.)
const MOCK_ASSIGNMENTS = [];

const FILTER_OPTIONS = ["All", "Pending", "Submitted on time", "Submitted late"];
const SORT_OPTIONS = ["Sort by deadline", "Sort by heading", "Sort by created date"];
const ORDER_OPTIONS = ["Asc", "Desc"];

const statusStyles = {
  Pending: "bg-yellow-950 text-yellow-400 border border-yellow-800",
  "Submitted on time": "bg-emerald-950 text-emerald-400 border border-emerald-800",
  "Submitted late": "bg-blue-950 text-blue-400 border border-blue-800",
};

export default function Assignments() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Sort by deadline");
  const [order, setOrder] = useState("Asc");

  const filtered = useMemo(() => {
    let list = [...MOCK_ASSIGNMENTS];

    if (search.trim()) {
      list = list.filter((a) =>
        a.heading.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (filter !== "All") {
      list = list.filter((a) => a.status === filter);
    }

    list.sort((a, b) => {
      let valA, valB;
      if (sortBy === "Sort by deadline") {
        valA = new Date(a.deadline);
        valB = new Date(b.deadline);
      } else if (sortBy === "Sort by heading") {
        valA = a.heading.toLowerCase();
        valB = b.heading.toLowerCase();
      } else {
        valA = new Date(a.createdAt);
        valB = new Date(b.createdAt);
      }
      if (valA < valB) return order === "Asc" ? -1 : 1;
      if (valA > valB) return order === "Asc" ? 1 : -1;
      return 0;
    });

    return list;
  }, [search, filter, sortBy, order]);

  return (
    <div className="min-h-screen bg-black text-white pt-20 pb-10">
      <Nav />
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        {/* Page Header */}
        <div className="flex justify-between items-start mb-7">
          <div>
            <h1 className="text-2xl font-bold text-white">Assignments</h1>
            <p className="text-sm text-gray-500 mt-1">
              Search, filter and sort your assignments.
            </p>
          </div>
          <a
            href="/student"
            className="text-sm text-gray-400 hover:text-white transition-colors mt-1"
          >
            ← Back to Dashboard
          </a>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap gap-3 items-center bg-neutral-900 border border-neutral-800 rounded-lg px-5 py-4 mb-5">
          <input
            type="text"
            placeholder="Search by heading"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 min-w-[200px] bg-black border border-neutral-700 rounded-md px-4 py-2 text-sm text-white placeholder-neutral-600 outline-none focus:border-neutral-500 transition-colors"
          />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-black border border-neutral-700 rounded-md px-3 py-2 text-sm text-white outline-none focus:border-neutral-500 cursor-pointer transition-colors"
          >
            {FILTER_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-black border border-neutral-700 rounded-md px-3 py-2 text-sm text-white outline-none focus:border-neutral-500 cursor-pointer transition-colors"
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <select
            value={order}
            onChange={(e) => setOrder(e.target.value)}
            className="w-20 bg-black border border-neutral-700 rounded-md px-3 py-2 text-sm text-white outline-none focus:border-neutral-500 cursor-pointer transition-colors"
          >
            {ORDER_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Assignments List */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden">
          <div className="px-5 py-4 text-sm font-semibold text-neutral-200">
            All Assignments
          </div>
          <div className="border-t border-neutral-800" />

          {filtered.length === 0 ? (
            <p className="px-5 py-5 text-sm text-neutral-500">
              No assignments found.
            </p>
          ) : (
            filtered.map((assignment, idx) => (
              <div
                key={assignment.id}
                className={`px-5 py-5 hover:bg-neutral-800/40 transition-colors ${
                  idx !== filtered.length - 1 ? "border-b border-neutral-800" : ""
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="text-sm font-semibold text-neutral-100">
                      {assignment.heading}
                    </p>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      {assignment.subject}
                    </p>
                  </div>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ml-4 shrink-0 ${
                      statusStyles[assignment.status]
                    }`}
                  >
                    {assignment.status}
                  </span>
                </div>
                <p className="text-xs text-neutral-500 leading-relaxed mb-3">
                  {assignment.description}
                </p>
                <p className="text-xs text-neutral-600">
                  📅 Deadline:{" "}
                  <span className="text-neutral-400 font-medium">
                    {new Date(assignment.deadline).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}