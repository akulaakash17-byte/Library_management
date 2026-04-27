const stats = [
  { label: "Total Books", value: "1,284", change: "+12 this month", icon: "◫", color: "from-amber-400/20 to-orange-400/10", accent: "text-amber-400", border: "border-amber-400/20" },
  { label: "Issued Books", value: "342", change: "+28 this week", icon: "↗", color: "from-sky-400/20 to-blue-400/10", accent: "text-sky-400", border: "border-sky-400/20" },
  { label: "Available", value: "942", change: "73% of collection", icon: "✓", color: "from-emerald-400/20 to-teal-400/10", accent: "text-emerald-400", border: "border-emerald-400/20" },
  { label: "Overdue", value: "23", change: "Action needed", icon: "◈", color: "from-rose-400/20 to-red-400/10", accent: "text-rose-400", border: "border-rose-400/20" },
];

const recentActivity = [
  { student: "Akash Sharma", book: "React Basics", action: "Issued", time: "2h ago", status: "issued" },
  { student: "Priya Mehta", book: "Data Structures", action: "Returned", time: "4h ago", status: "returned" },
  { student: "Rahul Kumar", book: "Node.js Guide", action: "Issued", time: "6h ago", status: "issued" },
  { student: "Sneha Patel", book: "Python Primer", action: "Overdue", time: "2d ago", status: "overdue" },
  { student: "Vikram Singh", book: "System Design", action: "Returned", time: "1d ago", status: "returned" },
];

const topBooks = [
  { title: "React Basics", author: "Dan Abramov", issues: 45 },
  { title: "Node.js Guide", author: "Ryan Dahl", issues: 38 },
  { title: "Python Primer", author: "Guido et al.", issues: 31 },
  { title: "System Design", author: "Alex Xu", issues: 27 },
];

export default function Dashboard() {
  return (
    <div className="p-8 space-y-8">
      {/* Welcome */}
      <div>
        <h2 className="text-white/90 text-2xl font-semibold tracking-tight">Good morning, Admin</h2>
        <p className="text-white/30 text-sm mt-1">Here's what's happening at your library today.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className={`bg-gradient-to-br ${s.color} border ${s.border} rounded-2xl p-5`}>
            <div className="flex items-start justify-between mb-4">
              <span className={`text-xl ${s.accent}`}>{s.icon}</span>
              <span className="text-white/20 text-[9px] tracking-widest uppercase font-medium">{s.label}</span>
            </div>
            <p className={`text-3xl font-bold ${s.accent} mb-1`}>{s.value}</p>
            <p className="text-white/30 text-xs">{s.change}</p>
          </div>
        ))}
      </div>

      {/* Two columns */}
      <div className="grid grid-cols-5 gap-6">
        {/* Recent Activity */}
        <div className="col-span-3 bg-white/[0.03] border border-white/8 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-white/80 font-semibold text-sm tracking-wide">Recent Activity</h3>
            <button className="text-amber-400 text-xs hover:text-amber-300 transition-colors">View all →</button>
          </div>
          <div className="space-y-1">
            {recentActivity.map((a, i) => (
              <div key={i} className="flex items-center gap-4 px-3 py-3 rounded-xl hover:bg-white/[0.03] transition-colors group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-xs text-white/40 font-bold flex-shrink-0">
                  {a.student[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white/70 text-sm font-medium truncate">{a.student}</p>
                  <p className="text-white/30 text-xs truncate">{a.book}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    a.status === "issued" ? "bg-sky-400/15 text-sky-400" :
                    a.status === "returned" ? "bg-emerald-400/15 text-emerald-400" :
                    "bg-rose-400/15 text-rose-400"
                  }`}>
                    {a.action}
                  </span>
                  <p className="text-white/20 text-[10px] mt-1">{a.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Books */}
        <div className="col-span-2 bg-white/[0.03] border border-white/8 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-white/80 font-semibold text-sm tracking-wide">Top Issued Books</h3>
          </div>
          <div className="space-y-4">
            {topBooks.map((b, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-white/15 font-bold text-xs w-4">{String(i+1).padStart(2,'0')}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-white/70 text-sm font-medium truncate">{b.title}</p>
                  <p className="text-white/30 text-xs">{b.author}</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-1 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-amber-400"
                      style={{ width: `${(b.issues / 45) * 100}%` }}
                    />
                  </div>
                  <span className="text-white/40 text-xs w-6 text-right">{b.issues}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick summary */}
          <div className="mt-6 pt-5 border-t border-white/5">
            <p className="text-white/20 text-[9px] tracking-widest uppercase mb-3 font-medium">This Month</p>
            <div className="grid grid-cols-2 gap-3">
              {[["New Books", "48"], ["New Students", "23"]].map(([l, v]) => (
                <div key={l} className="bg-white/[0.03] rounded-xl p-3">
                  <p className="text-amber-400 font-bold text-lg">{v}</p>
                  <p className="text-white/30 text-xs">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}