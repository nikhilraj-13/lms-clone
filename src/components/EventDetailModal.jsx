export default function EventDetailModal({ event, onClose }) {
  if (!event) return null;

  function formatDate(dateStr) {
    const d = new Date(dateStr);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  }

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Modal */}
      <div
        className="bg-neutral-900 border border-neutral-700 rounded-2xl w-full max-w-lg mx-4 p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-lg font-bold text-white">{event.title}</h2>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white transition-colors text-xl leading-none"
          >
            ✕
          </button>
        </div>

        <div className="border-t border-neutral-700 mb-5" />

        {/* Details */}
        <div className="flex flex-col gap-3 text-sm text-neutral-300">
          <p>
            Dates:{" "}
            <span className="font-bold text-white">
              {formatDate(event.startDate)} — {formatDate(event.endDate)}
            </span>
          </p>
          <p>
            Type: <span className="font-bold text-white">{event.type ?? "—"}</span>
          </p>
          <p>
            Audience: <span className="font-bold text-white">{event.audience ?? "—"}</span>
          </p>
          <p>
            University: <span className="font-bold text-white">{event.university ?? "—"}</span>
          </p>
          <p>
            Section: <span className="font-bold text-white">{event.section ?? "—"}</span>
          </p>
          <p>
            Counts Attendance:{" "}
            <span className="font-bold text-white">
              {event.countsAttendance ? "Yes" : "No"}
            </span>
          </p>
          <p>
            Created By: <span className="font-bold text-white">{event.createdBy ?? "—"}</span>
          </p>
        </div>

        <div className="border-t border-neutral-700 my-5" />

        {/* Description */}
        <p className="text-sm font-bold text-white mb-2">Details</p>
        <p className="text-sm text-neutral-400">
          {event.description || "No description provided."}
        </p>

        {/* Close Button */}
        <div className="flex justify-end mt-6">
          <button
            onClick={onClose}
            className="bg-neutral-800 hover:bg-neutral-700 text-white text-sm font-medium px-5 py-2 rounded-lg border border-neutral-600 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}