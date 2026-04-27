import { useState } from "react";

const allBooks = [
  { id: 1, title: "React Basics", author: "Dan Abramov", category: "Technology", isbn: "978-0-13-468599-1", available: true, copies: 3 },
  { id: 2, title: "Node.js Guide", author: "Ryan Dahl", category: "Technology", isbn: "978-0-13-110362-7", available: false, copies: 0 },
  { id: 3, title: "Python Primer", author: "Guido van Rossum", category: "Technology", isbn: "978-0-13-444432-5", available: true, copies: 2 },
  { id: 4, title: "System Design", author: "Alex Xu", category: "Engineering", isbn: "978-1-7368702-3-2", available: true, copies: 1 },
  { id: 5, title: "Clean Code", author: "Robert C. Martin", category: "Engineering", isbn: "978-0-13-235088-4", available: false, copies: 0 },
  { id: 6, title: "The Pragmatic Programmer", author: "David Thomas", category: "Engineering", isbn: "978-0-13-595705-9", available: true, copies: 4 },
  { id: 7, title: "Introduction to Algorithms", author: "Cormen et al.", category: "Computer Science", isbn: "978-0-26-204630-5", available: true, copies: 2 },
];

export default function Books() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [showAdd, setShowAdd] = useState(false);

  const categories = ["All", "Technology", "Engineering", "Computer Science"];
  const filtered = allBooks.filter(b =>
    (filter === "All" || b.category === filter) &&
    (b.title.toLowerCase().includes(search.toLowerCase()) || b.author.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-white/90 text-2xl font-semibold tracking-tight">Book Catalog</h2>
          <p className="text-white/30 text-sm mt-1">{allBooks.length} books in collection</p>
        </div>
        <button
          onClick={() => setShowAdd(true)}
          className="bg-amber-400 hover:bg-amber-300 text-black text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors flex items-center gap-2"
        >
          <span>+</span> Add Book
        </button>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-sm">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20 text-sm">⌕</span>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search books or authors..."
            className="w-full bg-white/[0.03] border border-white/8 rounded-xl pl-9 pr-4 py-2.5 text-sm text-white/70 placeholder:text-white/20 focus:outline-none focus:border-amber-400/40 focus:bg-white/[0.05] transition-all"
          />
        </div>
        <div className="flex gap-1">
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                filter === c
                  ? "bg-amber-400 text-black"
                  : "bg-white/[0.03] border border-white/8 text-white/40 hover:text-white/70"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-white/[0.03] border border-white/8 rounded-2xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/5">
              <th className="text-left text-white/20 text-[9px] tracking-widest uppercase font-medium px-6 py-4">#</th>
              <th className="text-left text-white/20 text-[9px] tracking-widest uppercase font-medium px-4 py-4">Title</th>
              <th className="text-left text-white/20 text-[9px] tracking-widest uppercase font-medium px-4 py-4">Author</th>
              <th className="text-left text-white/20 text-[9px] tracking-widest uppercase font-medium px-4 py-4">Category</th>
              <th className="text-left text-white/20 text-[9px] tracking-widest uppercase font-medium px-4 py-4">ISBN</th>
              <th className="text-left text-white/20 text-[9px] tracking-widest uppercase font-medium px-4 py-4">Copies</th>
              <th className="text-left text-white/20 text-[9px] tracking-widest uppercase font-medium px-4 py-4">Status</th>
              <th className="px-4 py-4" />
            </tr>
          </thead>
          <tbody>
            {filtered.map((book, i) => (
              <tr key={book.id} className="border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors group">
                <td className="px-6 py-4 text-white/20 text-xs font-mono">{String(i + 1).padStart(2, "0")}</td>
                <td className="px-4 py-4">
                  <p className="text-white/80 text-sm font-medium">{book.title}</p>
                </td>
                <td className="px-4 py-4 text-white/40 text-sm">{book.author}</td>
                <td className="px-4 py-4">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-white/40 border border-white/8">{book.category}</span>
                </td>
                <td className="px-4 py-4 text-white/25 text-xs font-mono">{book.isbn}</td>
                <td className="px-4 py-4 text-white/50 text-sm">{book.copies}</td>
                <td className="px-4 py-4">
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                    book.available ? "bg-emerald-400/15 text-emerald-400" : "bg-rose-400/15 text-rose-400"
                  }`}>
                    {book.available ? "Available" : "Unavailable"}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <button className="opacity-0 group-hover:opacity-100 text-white/30 hover:text-white/70 transition-all text-xs px-2 py-1 rounded-lg hover:bg-white/5">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <div className="text-center py-12 text-white/20 text-sm">No books found</div>
        )}
      </div>

      {/* Add Modal */}
      {showAdd && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center" onClick={() => setShowAdd(false)}>
          <div className="bg-[#13151c] border border-white/10 rounded-2xl p-7 w-full max-w-md mx-4" onClick={e => e.stopPropagation()}>
            <h3 className="text-white/90 font-semibold text-lg mb-5">Add New Book</h3>
            <div className="space-y-4">
              {["Title", "Author", "ISBN", "Category"].map(f => (
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
              <button onClick={() => setShowAdd(false)} className="flex-1 py-2.5 rounded-xl border border-white/10 text-white/40 text-sm hover:text-white/60 transition-colors">
                Cancel
              </button>
              <button className="flex-1 py-2.5 rounded-xl bg-amber-400 text-black text-sm font-semibold hover:bg-amber-300 transition-colors">
                Add Book
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}