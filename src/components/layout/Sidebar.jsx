import { Link, useLocation } from "react-router-dom";

const navItems = [
  { to: "/", label: "Dashboard", icon: "⬡" },
  { to: "/books", label: "Books", icon: "◫" },
  { to: "/students", label: "Students", icon: "◎" },
  { to: "/issue", label: "Issue Book", icon: "↗" },
  { to: "/return", label: "Return Book", icon: "↩" },
  { to: "/fines", label: "Fines", icon: "◈" },
  { to: "/reports", label: "Reports", icon: "▤" },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="w-64 min-h-screen bg-[#0d0f14] flex flex-col border-r border-white/5">
      {/* Logo */}
      <div className="px-6 pt-8 pb-6 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-black font-black text-sm">
            L
          </div>
          <div>
            <p className="text-white font-semibold text-sm tracking-wide">Lexicon</p>
            <p className="text-white/30 text-[10px] tracking-widest uppercase">Library System</p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-6 space-y-0.5">
        <p className="text-white/20 text-[9px] tracking-[0.2em] uppercase px-3 mb-3 font-medium">Navigation</p>
        {navItems.map(({ to, label, icon }) => {
          const active = location.pathname === to;
          return (
            <Link
              key={to}
              to={to}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group ${
                active
                  ? "bg-amber-400/10 text-amber-400"
                  : "text-white/40 hover:text-white/80 hover:bg-white/5"
              }`}
            >
              <span className={`text-base leading-none ${active ? "text-amber-400" : "text-white/20 group-hover:text-white/40"}`}>
                {icon}
              </span>
              <span className="text-sm font-medium tracking-wide">{label}</span>
              {active && (
                <div className="ml-auto w-1 h-1 rounded-full bg-amber-400" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-6 py-5 border-t border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center text-xs text-white/60 font-bold">
            A
          </div>
          <div>
            <p className="text-white/60 text-xs font-medium">Admin</p>
            <p className="text-white/20 text-[10px]">Librarian</p>
          </div>
          <div className="ml-auto w-2 h-2 rounded-full bg-emerald-400" />
        </div>
      </div>
    </div>
  );
}