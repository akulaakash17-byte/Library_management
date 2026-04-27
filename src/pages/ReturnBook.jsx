import { useState } from "react";

const issuedBooks = [
  { id: 1, student: "Rahul Kumar", roll: "ME2020018", book: "Node.js Guide", issuedDate: "13 Apr 2026", dueDate: "27 Apr 2026", overdueDays: 0, fine: 0 },
  { id: 2, student: "Sneha Patel", roll: "CS2022012", book: "Clean Code", issuedDate: "08 Apr 2026", dueDate: "22 Apr 2026", overdueDays: 5, fine: 10 },
  { id: 3, student: "Vikram Singh", roll: "CE2021067", book: "Python Primer", issuedDate: "10 Apr 2026", dueDate: "24 Apr 2026", overdueDays: 3, fine: 6 },
  { id: 4, student: "Akash Sharma", roll: "CS2021001", book: "System Design", issuedDate: "20 Apr 2026", dueDate: "04 May 2026", overdueDays: 0, fine: 0 },
];

export default function ReturnBook() {
  const [search, setSearch] = useState("");
  const [returned, setReturned] = useState([]);

  const filtered = issuedBooks.filter(b =>
    !returned.includes(b.id) &&
    (b.student.toLowerCase().includes(search.toLowerCase()) ||
     b.book.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="p-8 space-y-6">
      <div>
        <h2 className="text-white/90 text-2xl font-semibold tracking-tight">Return Book</h2>
        <p className="text-white/30 text-sm mt-1">{issuedBooks.length - returned.length} books currently issued</p>
      </div>

      <div className="relative max-w-sm">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20 text-sm">⌕</span>
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search student or book..."
          className="w-full bg-white/[0.03] border border-white/8 rounded-xl pl-9 pr-4 py-2.5 text-sm text-white/70 placeholder:text-white/20 focus:outline-none focus:border-amber-400/40 transition-all"
        />
      </div>

      <div className="space-y-3">
        {filtered.map(b => (
          <div key={b.id} className={`bg-white/[0.03] border ${b.overdueDays > 0 ? "border-rose-400/20" : "border-white/8"} rounded-2xl p-5 flex items-center justify-between`}>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/30 text-lg">◫</div>
              <div>
                <p className="text-white/80 text-sm font-semibold">{b.book}</p>
                <p className="text-white/40 text-xs mt-0.5">{b.student} · {b.roll}</p>
                <div className="flex items-center gap-3 mt-1.5">
                  <span className="text-white/25 text-xs">Issued {b.issuedDate}</span>
                  <span className="text-white/10">·</span>
                  <span className={`text-xs ${b.overdueDays > 0 ? "text-rose-400" : "text-white/25"}`}>
                    Due {b.dueDate} {b.overdueDays > 0 && `(${b.overdueDays}d overdue)`}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {b.fine > 0 && (
                <div className="text-right">
                  <p className="text-rose-400 font-semibold text-sm">₹{b.fine}</p>
                  <p className="text-white/30 text-xs">Fine due</p>
                </div>
              )}
              <button
                onClick={() => setReturned(prev => [...prev, b.id])}
                className="bg-emerald-400/15 hover:bg-emerald-400/25 text-emerald-400 text-xs font-semibold px-4 py-2 rounded-lg transition-colors border border-emerald-400/20"
              >
                Mark Returned
              </button>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="text-center py-16 text-white/20 text-sm">No issued books found</div>
        )}
      </div>
    </div>
  );
}