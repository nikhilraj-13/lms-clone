import { useMemo } from "react";
import Nav from "../components/Navbar";
import EventDetailModal from "../components/EventDetailModal";


// Replace with your real data source (API call, props, context, etc.)
const MOCK_EVENTS = [
  {
    id: 1,
    title: "Diwali Vacation",
    startDate: "2025-10-18",
    endDate: "2025-10-26",
  },
];

function formatDate(dateStr) {
  const d = new Date(dateStr);
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
}

function categorizeEvents(events) {
  const now = new Date();
  now.setHours(0, 0, 0, 0);

  const ongoing = [];
  const upcoming = [];
  const past = [];

  events.forEach((event) => {
    const start = new Date(event.startDate);
    const end = new Date(event.endDate);
    start.setHours(0, 0, 0, 0);
    end.setHours(0, 0, 0, 0);

    if (start <= now && end >= now) {
      ongoing.push(event);
    } else if (start > now) {
      upcoming.push(event);
    } else {
      past.push(event);
    }
  });

  return { ongoing, upcoming, past };
}

function EventCard({ event, onClick }) {
  return (
    <div onClick={onClick} className="... cursor-pointer hover:bg-neutral-700 transition-colors">
      <p className="text-sm font-bold text-white">{event.title}</p>
      <p className="text-xs text-neutral-400 mt-1">
        {formatDate(event.startDate)} — {formatDate(event.endDate)}
      </p>
    </div>
  );
}

function Section({ title, events, emptyMessage }) {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden">
      <div className="px-6 py-4 font-bold text-white text-base">
        {title}
      </div>
      <div className="border-t border-neutral-800" />
      <div className="px-6 py-5">
        {events.length === 0 ? (
          <p className="text-sm text-neutral-500">{emptyMessage}</p>
        ) : (
          <div className="flex flex-wrap gap-4">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Events() {
  const { ongoing, upcoming, past } = useMemo(
    () => categorizeEvents(MOCK_EVENTS),
    []
  );

  return (
    <div className="min-h-screen bg-black text-white px-12 py-10">
        <Nav />
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-white">Events</h1>
        <a
          href="/dashboard"
          className="text-sm text-neutral-400 hover:text-white transition-colors"
        >
          Back to dashboard
        </a>
      </div>

      {/* Sections */}
      <div className="flex flex-col gap-5">
        <Section
          title="Ongoing"
          events={ongoing}
          emptyMessage="No ongoing events."
        />
        <Section
          title="Upcoming"
          events={upcoming}
          emptyMessage="No upcoming events."
        />
        <Section
          title="Past"
          events={past}
          emptyMessage="No past events."
        />
      </div>
    </div>
  );
}