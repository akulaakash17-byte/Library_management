import { useLocation } from "react-router-dom";

const titles = {
  "/": "Dashboard",
  "/books": "Books",
  "/students": "Students",
  "/issue": "Issue Book",
  "/return": "Return Book",
  "/fines": "Fines",
  "/reports": "Reports",
};

export default function Navbar({ user }) {
  const location = useLocation();
  const title = titles[location.pathname] || "Library";
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return (
    <div className="h-16 bg-[#0d0f14]/80 backdrop-blur-sm border-b border-white/5 px-8 flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center gap-3">
        <h1 className="text-white font-semibold text-lg tracking-tight">{title}</h1>
      </div>
      <div className="flex items-center gap-5">
        <p className="text-white/30 text-xs tracking-wide">{today}</p>
        <div className="flex items-center gap-2 bg-white/5 border border-white/8 rounded-lg px-3 py-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-white/50 text-xs">System Online</span>
        </div>
        <button className="w-8 h-8 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-white/40 hover:text-white/70 transition-colors text-sm">
          🔔
        </button>
      </div>
    </div>
  );
}