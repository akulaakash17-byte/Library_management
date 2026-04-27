import { useState } from "react";

const studentOptions = ["Akash Sharma (CS2021001)", "Priya Mehta (EC2021045)", "Rahul Kumar (ME2020018)", "Sneha Patel (CS2022012)"];
const bookOptions = ["React Basics", "Node.js Guide", "Python Primer", "System Design", "Clean Code", "The Pragmatic Programmer"];

const recentIssues = [
  { student: "Akash Sharma", book: "React Basics", date: "27 Apr 2026", due: "11 May 2026" },
  { student: "Priya Mehta", book: "Data Structures", date: "25 Apr 2026", due: "09 May 2026" },
  { student: "Rahul Kumar", book: "Node.js Guide", date: "22 Apr 2026", due: "06 May 2026" },
];

export default function IssueBook() {
  const [student, setStudent] = useState("");
  const [book, setBook] = useState("");
  const [issued, setIssued] = useState(false);

  const dueDate = new Date();
  dueDate.setDate(dueDate.getDate() + 14);
  const dueDateStr = dueDate.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

  const handleIssue = () => {
    if (student && book) {
      setIssued(true);
      setTimeout(() => {
        setIssued(false);
        setStudent("");
        setBook("");
      }, 2500);
    }
  };

  return (
    <div className="p-8 space-y-6">
      <div>
        <h2 className="text-white/90 text-2xl font-semibold tracking-tight">Issue Book</h2>
        <p className="text-white/30 text-sm mt-1">Assign a book to a student for 14 days</p>
      </div>

      <div className="grid grid-cols-5 gap-6">
        {/* Form */}
        <div className="col-span-2 space-y-5">
          <div className="bg-white/[0.03] border border-white/8 rounded-2xl p-6 space-y-5">
            <div>
              <label className="text-white/30 text-[9px] tracking-widest uppercase block mb-2 font-medium">Select Student</label>
              <select
                value={student}
                onChange={e => setStudent(e.target.value)}
                className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white/70 focus:outline-none focus:border-amber-400/40 transition-all appearance-none cursor-pointer"
              >
                <option value="" className="bg-[#1a1c24]">Choose student...</option>
                {studentOptions.map(s => <option key={s} value={s} className="bg-[#1a1c24]">{s}</option>)}
              </select>
            </div>

            <div>
              <label className="text-white/30 text-[9px] tracking-widest uppercase block mb-2 font-medium">Select Book</label>
              <select
                value={book}
                onChange={e => setBook(e.target.value)}
                className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white/70 focus:outline-none focus:border-amber-400/40 transition-all appearance-none cursor-pointer"
              >
                <option value="" className="bg-[#1a1c24]">Choose book...</option>
                {bookOptions.map(b => <option key={b} value={b} className="bg-[#1a1c24]">{b}</option>)}
              </select>
            </div>

            <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4">
              <p className="text-white/20 text-[9px] tracking-widest uppercase mb-2 font-medium">Issue Period</p>
              <p className="text-white/60 text-sm">14 days · Due <span className="text-amber-400">{dueDateStr}</span></p>
            </div>

            <button
              onClick={handleIssue}
              disabled={!student || !book}
              className={`w-full py-3 rounded-xl font-semibold text-sm transition-all ${
                student && book
                  ? "bg-amber-400 hover:bg-amber-300 text-black"
                  : "bg-white/5 text-white/20 cursor-not-allowed"
              }`}
            >
              {issued ? "✓ Book Issued Successfully!" : "Issue Book"}
            </button>
          </div>

          {/* Policy */}
          <div className="bg-sky-400/5 border border-sky-400/15 rounded-2xl p-5">
            <p className="text-sky-400 text-xs font-semibold mb-2">Issue Policy</p>
            <ul className="space-y-1.5 text-white/30 text-xs">
              <li>• Maximum 3 books per student</li>
              <li>• Return period: 14 days</li>
              <li>• Fine: ₹2/day after due date</li>
              <li>• Lost book: Full replacement cost</li>
            </ul>
          </div>
        </div>

        {/* Recent Issues */}
        <div className="col-span-3 bg-white/[0.03] border border-white/8 rounded-2xl p-6">
          <h3 className="text-white/80 font-semibold text-sm tracking-wide mb-5">Recent Issues</h3>
          <div className="space-y-3">
            {recentIssues.map((issue, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-white/[0.02] rounded-xl border border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-xs text-white/40 font-bold">
                    {issue.student[0]}
                  </div>
                  <div>
                    <p className="text-white/70 text-sm font-medium">{issue.student}</p>
                    <p className="text-white/30 text-xs">{issue.book}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-white/30 text-xs">Issued {issue.date}</p>
                  <p className="text-amber-400 text-xs mt-0.5">Due {issue.due}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}