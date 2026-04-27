import { useState } from "react";

const students = [
  { id: 1, name: "Akash Sharma", roll: "CS2021001", dept: "Computer Science", issued: 2, fines: 0, status: "active" },
  { id: 2, name: "Priya Mehta", roll: "EC2021045", dept: "Electronics", issued: 1, fines: 0, status: "active" },
  { id: 3, name: "Rahul Kumar", roll: "ME2020018", dept: "Mechanical", issued: 3, fines: 20, status: "overdue" },
  { id: 4, name: "Sneha Patel", roll: "CS2022012", dept: "Computer Science", issued: 0, fines: 0, status: "active" },
  { id: 5, name: "Vikram Singh", roll: "CE2021067", dept: "Civil Engg.", issued: 1, fines: 10, status: "overdue" },
  { id: 6, name: "Anjali Rao", roll: "CS2023004", dept: "Computer Science", issued: 2, fines: 0, status: "active" },
];

export default function Students() {
  const [search, setSearch] = useState("");
  const [showAdd, setShowAdd] = useState(false);

  const filtered = students.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.roll.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-white/90 text-2xl font-semibold tracking-tight">Students</h2>
          <p className="text-white/30 text-sm mt-1">{students.length} registered members</p>
        </div>
        <button
          onClick={() => setShowAdd(true)}
          className="bg-amber-400 hover:bg-amber-300 text-black text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors flex items-center gap-2"
        >
          <span>+</span> Add Student
        </button>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "Active Members", value: students.filter(s => s.status === "active").length, color: "text-emerald-400" },
          { label: "With Overdue", value: students.filter(s => s.status === "overdue").length, color: "text-rose-400" },
          { label: "Total Fines", value: `₹${students.reduce((a, b) => a + b.fines, 0)}`, color: "text-amber-400" },
        ].map(s => (
          <div key={s.label} className="bg-white/[0.03] border border-white/8 rounded-xl p-4">
            <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
            <p className="text-white/30 text-xs mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Search */}
      <div className="relative max-w-sm">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20 text-sm">⌕</span>
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search by name or roll number..."
          className="w-full bg-white/[0.03] border border-white/8 rounded-xl pl-9 pr-4 py-2.5 text-sm text-white/70 placeholder:text-white/20 focus:outline-none focus:border-amber-400/40 transition-all"
        />
      </div>

      {/* Table */}
      <div className="bg-white/[0.03] border border-white/8 rounded-2xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/5">
              {["Student", "Roll No.", "Department", "Books Issued", "Fines", "Status", ""].map(h => (
                <th key={h} className="text-left text-white/20 text-[9px] tracking-widest uppercase font-medium px-5 py-4">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((s) => (
              <tr key={s.id} className="border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors group">
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center text-xs text-white/60 font-bold flex-shrink-0">
                      {s.name[0]}
                    </div>
                    <p className="text-white/80 text-sm font-medium">{s.name}</p>
                  </div>
                </td>
                <td className="px-5 py-4 text-white/30 text-xs font-mono">{s.roll}</td>
                <td className="px-5 py-4 text-white/40 text-sm">{s.dept}</td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-0.5">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className={`w-2 h-2 rounded-sm ${i < s.issued ? "bg-sky-400" : "bg-white/10"}`} />
                      ))}
                    </div>
                    <span className="text-white/40 text-sm">{s.issued}</span>
                  </div>
                </td>
                <td className="px-5 py-4">
                  <span className={`text-sm font-medium ${s.fines > 0 ? "text-rose-400" : "text-white/30"}`}>
                    {s.fines > 0 ? `₹${s.fines}` : "—"}
                  </span>
                </td>
                <td className="px-5 py-4">
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                    s.status === "active" ? "bg-emerald-400/15 text-emerald-400" : "bg-rose-400/15 text-rose-400"
                  }`}>
                    {s.status === "active" ? "Active" : "Overdue"}
                  </span>
                </td>
                <td className="px-5 py-4">
                  <button className="opacity-0 group-hover:opacity-100 text-white/30 hover:text-white/70 transition-all text-xs px-2 py-1 rounded-lg hover:bg-white/5">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showAdd && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center" onClick={() => setShowAdd(false)}>
          <div className="bg-[#13151c] border border-white/10 rounded-2xl p-7 w-full max-w-md mx-4" onClick={e => e.stopPropagation()}>
            <h3 className="text-white/90 font-semibold text-lg mb-5">Register Student</h3>
            <div className="space-y-4">
              {["Full Name", "Roll Number", "Department", "Email"].map(f => (
                <div key={f}>
                  <label className="text-white/30 text-xs tracking-widest uppercase block mb-1.5">{f}</label>
                  <input
                    placeholder={`Enter ${f.toLowerCase()}...`}
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white/70 placeholder:text-white/20 focus:outline-none focus:border-amber-400/40 transition-all"
                  />
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={() => setShowAdd(false)} className="flex-1 py-2.5 rounded-xl border border-white/10 text-white/40 text-sm hover:text-white/60 transition-colors">Cancel</button>
              <button className="flex-1 py-2.5 rounded-xl bg-amber-400 text-black text-sm font-semibold hover:bg-amber-300 transition-colors">Register</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}