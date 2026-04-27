import { Link, useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { to: "/", label: "Dashboard", icon: "⬡" },
  { to: "/books", label: "Books", icon: "◫" },
  { to: "/students", label: "Students", icon: "◎" },
  { to: "/issue", label: "Issue Book", icon: "↗" },
  { to: "/return", label: "Return Book", icon: "↩" },
  { to: "/fines", label: "Fines", icon: "◈" },
  { to: "/reports", label: "Reports", icon: "▤" },
];

export default function Sidebar({ collapsed, setCollapsed, user, onLogout }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/admin-login");
  };

  return (
    <div
      className={`min-h-screen bg-[#0d0f14] flex flex-col border-r border-white/5 transition-all duration-300 ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      {/* Logo */}
      <div className={`pt-8 pb-6 border-b border-white/5 flex items-center ${collapsed ? "justify-center px-3" : "px-6 gap-3"}`}>
        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-black font-black text-sm flex-shrink-0">
          L
        </div>
        {!collapsed && (
          <div>
            <p className="text-white font-semibold text-sm tracking-wide">Lexicon</p>
            <p className="text-white/30 text-[10px] tracking-widest uppercase">Library System</p>
          </div>
        )}
      </div>

      {/* Toggle button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="mx-auto mt-4 w-8 h-8 rounded-lg bg-white/[0.03] border border-white/8 flex items-center justify-center text-white/30 hover:text-white/70 hover:bg-white/[0.06] transition-all text-xs"
        title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {collapsed ? "»" : "«"}
      </button>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-0.5">
        {!collapsed && (
          <p className="text-white/20 text-[9px] tracking-[0.2em] uppercase px-3 mb-3 font-medium">Navigation</p>
        )}
        {navItems.map(({ to, label, icon }) => {
          const active = location.pathname === to;
          return (
            <Link
              key={to}
              to={to}
              title={collapsed ? label : undefined}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group ${
                collapsed ? "justify-center" : ""
              } ${
                active
                  ? "bg-amber-400/10 text-amber-400"
                  : "text-white/40 hover:text-white/80 hover:bg-white/5"
              }`}
            >
              <span
                className={`text-base leading-none flex-shrink-0 ${
                  active ? "text-amber-400" : "text-white/20 group-hover:text-white/40"
                }`}
              >
                {icon}
              </span>
              {!collapsed && (
                <>
                  <span className="text-sm font-medium tracking-wide">{label}</span>
                  {active && <div className="ml-auto w-1 h-1 rounded-full bg-amber-400" />}
                </>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className={`py-5 border-t border-white/5 ${collapsed ? "px-2 flex flex-col items-center gap-2" : "px-6"}`}>
        {collapsed ? (
          <>
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center text-xs text-white/60 font-bold">
              {user?.name?.[0] || "A"}
            </div>
            <div className="w-2 h-2 rounded-full bg-emerald-400" />
            <button
              onClick={handleLogout}
              title="Logout"
              className="text-white/20 hover:text-rose-400 transition-colors text-xs mt-1"
            >
              ⏻
            </button>
          </>
        ) : (
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center text-xs text-white/60 font-bold flex-shrink-0">
              {user?.name?.[0] || "A"}
            </div>
            <div className="min-w-0">
              <p className="text-white/60 text-xs font-medium truncate">{user?.name || "Admin"}</p>
              <p className="text-white/20 text-[10px]">Librarian</p>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0" />
              <button
                onClick={handleLogout}
                title="Logout"
                className="text-white/20 hover:text-rose-400 transition-colors text-xs"
              >
                ⏻
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}