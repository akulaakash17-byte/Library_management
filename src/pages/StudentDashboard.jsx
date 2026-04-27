import { useNavigate } from "react-router-dom";

const myBooks = [
  { title: "React Basics", issuedDate: "20 Apr 2026", dueDate: "04 May 2026", status: "active" },
  { title: "System Design", issuedDate: "15 Apr 2026", dueDate: "29 Apr 2026", status: "overdue" },
];

export default function StudentDashboard({ user, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/student-login");
  };

  return (
    <div className="min-h-screen bg-[#0a0c11]">
      {/* Navbar */}
      <div className="h-16 bg-[#0d0f14]/80 backdrop-blur-sm border-b border-white/5 px-8 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-black font-black text-xs">L</div>
          <h1 className="text-white font-semibold text-sm tracking-wide">Lexicon · Student Portal</h1>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-white/30 text-xs">
            Welcome, <span className="text-white/60">{user?.name}</span>
          </span>
          <button
            onClick={handleLogout}
            className="bg-white/5 border border-white/10 text-white/40 text-xs px-3 py-1.5 rounded-lg hover:text-rose-400 hover:border-rose-400/20 transition-colors"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="p-8 max-w-3xl mx-auto space-y-6">
        {/* Welcome */}
        <div>
          <h2 className="text-white/90 text-2xl font-semibold tracking-tight">Hello, {user?.name} 👋</h2>
          <p className="text-white/30 text-sm mt-1">Roll No: <span className="text-white/50 font-mono">{user?.roll}</span></p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: "Books Issued", value: myBooks.length, color: "text-sky-400" },
            { label: "Overdue", value: myBooks.filter(b => b.status === "overdue").length, color: "text-rose-400" },
            { label: "Fine Due", value: "₹10", color: "text-amber-400" },
          ].map(s => (
            <div key={s.label} className="bg-white/[0.03] border border-white/8 rounded-xl p-5">
              <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
              <p className="text-white/30 text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* My Books */}
        <div className="bg-white/[0.03] border border-white/8 rounded-2xl p-6">
          <h3 className="text-white/80 font-semibold text-sm tracking-wide mb-5">My Issued Books</h3>
          <div className="space-y-3">
            {myBooks.map((b, i) => (
              <div key={i} className={`flex items-center justify-between p-4 bg-white/[0.02] rounded-xl border ${b.status === "overdue" ? "border-rose-400/20" : "border-white/5"}`}>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/30">◫</div>
                  <div>
                    <p className="text-white/70 text-sm font-medium">{b.title}</p>
                    <p className="text-white/30 text-xs">Issued {b.issuedDate}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`text-xs font-medium ${b.status === "overdue" ? "text-rose-400" : "text-amber-400"}`}>Due {b.dueDate}</p>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${b.status === "overdue" ? "bg-rose-400/15 text-rose-400" : "bg-emerald-400/15 text-emerald-400"}`}>
                    {b.status === "overdue" ? "Overdue" : "Active"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="bg-sky-400/5 border border-sky-400/15 rounded-2xl p-5">
          <p className="text-sky-400 text-xs font-semibold mb-2">Library Info</p>
          <ul className="space-y-1.5 text-white/30 text-xs">
            <li>• Max 3 books can be issued at once</li>
            <li>• Return period: 14 days</li>
            <li>• Fine: ₹2/day after due date</li>
            <li>• Contact librarian to report lost books</li>
          </ul>
        </div>
      </div>
    </div>
  );
}