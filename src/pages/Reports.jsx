const monthlyData = [
  { month: "Nov", issues: 85, returns: 78 },
  { month: "Dec", issues: 72, returns: 80 },
  { month: "Jan", issues: 110, returns: 95 },
  { month: "Feb", issues: 98, returns: 102 },
  { month: "Mar", issues: 125, returns: 115 },
  { month: "Apr", issues: 142, returns: 130 },
];

const topBooks = [
  { title: "React Basics", issues: 45, category: "Technology" },
  { title: "System Design", issues: 38, category: "Engineering" },
  { title: "Python Primer", issues: 31, category: "Technology" },
  { title: "Clean Code", issues: 27, category: "Engineering" },
  { title: "Node.js Guide", issues: 22, category: "Technology" },
];

const max = Math.max(...monthlyData.map(d => d.issues));

export default function Reports() {
  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-white/90 text-2xl font-semibold tracking-tight">Reports</h2>
          <p className="text-white/30 text-sm mt-1">Library performance overview</p>
        </div>
        <button className="bg-white/[0.03] border border-white/8 text-white/50 text-xs px-4 py-2 rounded-lg hover:text-white/70 transition-colors flex items-center gap-2">
          ↓ Export PDF
        </button>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-4 gap-4">
        {[
          { label: "Total Issues This Month", value: "142", delta: "+13.6%", up: true },
          { label: "Total Returns", value: "130", delta: "+13.0%", up: true },
          { label: "New Members", value: "23", delta: "+4.5%", up: true },
          { label: "Fines Collected", value: "₹480", delta: "-8.2%", up: false },
        ].map(s => (
          <div key={s.label} className="bg-white/[0.03] border border-white/8 rounded-2xl p-5">
            <p className="text-white/80 text-2xl font-bold">{s.value}</p>
            <p className="text-white/30 text-xs mt-1 mb-2">{s.label}</p>
            <span className={`text-xs px-2 py-0.5 rounded-full ${s.up ? "bg-emerald-400/15 text-emerald-400" : "bg-rose-400/15 text-rose-400"}`}>
              {s.delta} vs last month
            </span>
          </div>
        ))}
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-5 gap-6">
        {/* Bar chart */}
        <div className="col-span-3 bg-white/[0.03] border border-white/8 rounded-2xl p-6">
          <h3 className="text-white/80 font-semibold text-sm tracking-wide mb-6">Monthly Issues vs Returns</h3>
          <div className="flex items-end gap-4 h-40">
            {monthlyData.map((d, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full flex gap-0.5 items-end" style={{ height: "120px" }}>
                  <div
                    className="flex-1 rounded-t-md bg-amber-400/70 hover:bg-amber-400 transition-colors"
                    style={{ height: `${(d.issues / max) * 100}%` }}
                    title={`Issues: ${d.issues}`}
                  />
                  <div
                    className="flex-1 rounded-t-md bg-sky-400/40 hover:bg-sky-400/60 transition-colors"
                    style={{ height: `${(d.returns / max) * 100}%` }}
                    title={`Returns: ${d.returns}`}
                  />
                </div>
                <span className="text-white/25 text-[10px]">{d.month}</span>
              </div>
            ))}
          </div>
          <div className="flex gap-4 mt-4 pt-4 border-t border-white/5">
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded bg-amber-400/70" /><span className="text-white/30 text-xs">Issues</span></div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded bg-sky-400/40" /><span className="text-white/30 text-xs">Returns</span></div>
          </div>
        </div>

        {/* Top books */}
        <div className="col-span-2 bg-white/[0.03] border border-white/8 rounded-2xl p-6">
          <h3 className="text-white/80 font-semibold text-sm tracking-wide mb-5">Most Popular Books</h3>
          <div className="space-y-4">
            {topBooks.map((b, i) => (
              <div key={i}>
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-white/20 text-xs font-mono w-4">{i + 1}</span>
                    <div>
                      <p className="text-white/60 text-xs font-medium">{b.title}</p>
                      <p className="text-white/20 text-[10px]">{b.category}</p>
                    </div>
                  </div>
                  <span className="text-amber-400 text-xs font-semibold">{b.issues}</span>
                </div>
                <div className="h-1 bg-white/5 rounded-full ml-6">
                  <div
                    className="h-full bg-gradient-to-r from-amber-400 to-orange-400 rounded-full"
                    style={{ width: `${(b.issues / 45) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Category breakdown */}
      <div className="bg-white/[0.03] border border-white/8 rounded-2xl p-6">
        <h3 className="text-white/80 font-semibold text-sm tracking-wide mb-5">Category Breakdown</h3>
        <div className="grid grid-cols-4 gap-4">
          {[
            { cat: "Technology", count: 42, pct: 62 },
            { cat: "Engineering", count: 18, pct: 26 },
            { cat: "Computer Science", count: 6, pct: 9 },
            { cat: "Other", count: 2, pct: 3 },
          ].map(c => (
            <div key={c.cat} className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full border-4 border-white/5 flex items-center justify-center relative">
                <svg className="absolute inset-0 -rotate-90" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="15.9155" fill="none" stroke="#ffffff08" strokeWidth="3" />
                  <circle
                    cx="18" cy="18" r="15.9155" fill="none"
                    stroke="#f59e0b" strokeWidth="3"
                    strokeDasharray={`${c.pct} ${100 - c.pct}`}
                    strokeLinecap="round"
                  />
                </svg>
                <span className="text-amber-400 text-xs font-bold">{c.pct}%</span>
              </div>
              <p className="text-white/60 text-xs font-medium">{c.cat}</p>
              <p className="text-white/30 text-xs">{c.count} issues</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}