import { useState } from "react";

const fines = [
  { id: 1, student: "Rahul Kumar", roll: "ME2020018", book: "Clean Code", days: 8, amount: 16, status: "pending" },
  { id: 2, student: "Vikram Singh", roll: "CE2021067", book: "Python Primer", days: 5, amount: 10, status: "pending" },
  { id: 3, student: "Sneha Patel", roll: "CS2022012", book: "Node.js Guide", days: 3, amount: 6, status: "paid" },
  { id: 4, student: "Akash Sharma", roll: "CS2021001", book: "React Basics", days: 12, amount: 24, status: "paid" },
];

export default function Fines() {
  const [tab, setTab] = useState("all");

  const filtered = fines.filter(f => tab === "all" || f.status === tab);
  const totalPending = fines.filter(f => f.status === "pending").reduce((a, b) => a + b.amount, 0);
  const totalCollected = fines.filter(f => f.status === "paid").reduce((a, b) => a + b.amount, 0);

  return (
    <div className="p-8 space-y-6">
      <div>
        <h2 className="text-white/90 text-2xl font-semibold tracking-tight">Fines</h2>
        <p className="text-white/30 text-sm mt-1">Track and collect library fines</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "Pending Fines", value: `₹${totalPending}`, sub: `${fines.filter(f => f.status === "pending").length} cases`, color: "text-rose-400", border: "border-rose-400/20", bg: "from-rose-400/10 to-transparent" },
          { label: "Collected", value: `₹${totalCollected}`, sub: "This month", color: "text-emerald-400", border: "border-emerald-400/20", bg: "from-emerald-400/10 to-transparent" },
          { label: "Fine Rate", value: "₹2/day", sub: "Per overdue day", color: "text-amber-400", border: "border-amber-400/20", bg: "from-amber-400/10 to-transparent" },
        ].map(s => (
          <div key={s.label} className={`bg-gradient-to-br ${s.bg} border ${s.border} rounded-2xl p-5`}>
            <p className={`text-3xl font-bold ${s.color}`}>{s.value}</p>
            <p className="text-white/50 text-sm mt-1 font-medium">{s.label}</p>
            <p className="text-white/20 text-xs mt-0.5">{s.sub}</p>
          </div>
        ))}
      </div>

      <div className="flex gap-1">
        {[["all", "All"], ["pending", "Pending"], ["paid", "Paid"]].map(([key, label]) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
              tab === key ? "bg-amber-400 text-black" : "bg-white/[0.03] border border-white/8 text-white/40 hover:text-white/60"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="bg-white/[0.03] border border-white/8 rounded-2xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/5">
              {["Student", "Roll No.", "Book", "Overdue Days", "Fine Amount", "Status", ""].map(h => (
                <th key={h} className="text-left text-white/20 text-[9px] tracking-widest uppercase font-medium px-5 py-4">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map(f => (
              <tr key={f.id} className="border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors group">
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center text-xs text-white/40 font-bold">{f.student[0]}</div>
                    <p className="text-white/70 text-sm font-medium">{f.student}</p>
                  </div>
                </td>
                <td className="px-5 py-4 text-white/30 text-xs font-mono">{f.roll}</td>
                <td className="px-5 py-4 text-white/50 text-sm">{f.book}</td>
                <td className="px-5 py-4 text-rose-400 text-sm font-medium">{f.days} days</td>
                <td className="px-5 py-4 text-white/80 text-sm font-semibold">₹{f.amount}</td>
                <td className="px-5 py-4">
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                    f.status === "paid" ? "bg-emerald-400/15 text-emerald-400" : "bg-rose-400/15 text-rose-400"
                  }`}>
                    {f.status === "paid" ? "Paid" : "Pending"}
                  </span>
                </td>
                <td className="px-5 py-4">
                  {f.status === "pending" && (
                    <button className="opacity-0 group-hover:opacity-100 bg-emerald-400/10 hover:bg-emerald-400/20 text-emerald-400 text-xs px-3 py-1.5 rounded-lg transition-all border border-emerald-400/20">
                      Collect
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}