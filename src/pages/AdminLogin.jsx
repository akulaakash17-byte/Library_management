import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const mockAdmins = [
  { username: "admin", password: "admin123", name: "Admin" },
  { username: "librarian", password: "lib2026", name: "Head Librarian" },
];

export default function AdminLogin({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    setTimeout(() => {
      const admin = mockAdmins.find(
        (a) => a.username === username.trim() && a.password === password
      );
      if (admin) {
        onLogin({ role: "admin", name: admin.name, username: admin.username });
        navigate("/");
      } else {
        setError("Invalid username or password.");
      }
      setLoading(false);
    }, 900);
  };

  return (
    <div className="min-h-screen bg-[#0a0c11] flex items-center justify-center relative overflow-hidden">
      {/* Background ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-sm mx-4 relative z-10">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-10 justify-center">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-black font-black text-sm">
            L
          </div>
          <div>
            <p className="text-white font-semibold text-sm tracking-wide">Lexicon</p>
            <p className="text-white/30 text-[10px] tracking-widest uppercase">Library System</p>
          </div>
        </div>

        {/* Card */}
        <div className="bg-white/[0.04] border border-white/8 rounded-2xl p-8">
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center mx-auto mb-4 text-2xl">
              ⬡
            </div>
            <h1 className="text-white/90 text-xl font-semibold tracking-tight">Admin Login</h1>
            <p className="text-white/30 text-sm mt-1.5">Library staff portal</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-white/30 text-[9px] tracking-widest uppercase block mb-2 font-medium">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="e.g. admin"
                required
                className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white/80 placeholder:text-white/20 focus:outline-none focus:border-amber-400/40 focus:bg-white/[0.06] transition-all"
              />
            </div>

            <div>
              <label className="text-white/30 text-[9px] tracking-widest uppercase block mb-2 font-medium">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white/80 placeholder:text-white/20 focus:outline-none focus:border-amber-400/40 focus:bg-white/[0.06] transition-all"
              />
            </div>

            {error && (
              <div className="bg-rose-400/10 border border-rose-400/20 text-rose-400 text-xs px-4 py-3 rounded-xl">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-black text-sm font-semibold transition-all mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Signing in..." : "Sign In as Admin"}
            </button>
          </form>

          {/* Hint */}
          <div className="mt-6 bg-white/[0.02] border border-white/5 rounded-xl p-4">
            <p className="text-white/20 text-[9px] tracking-widest uppercase mb-2 font-medium">Demo Credentials</p>
            <p className="text-white/40 text-xs font-mono">Username: admin</p>
            <p className="text-white/40 text-xs font-mono">Password: admin123</p>
          </div>
        </div>

        {/* Switch link */}
        <div className="mt-5 text-center">
          <Link
            to="/student-login"
            className="text-white/30 text-xs hover:text-sky-400 transition-colors"
          >
            Are you a student? Student Login →
          </Link>
        </div>
      </div>
    </div>
  );
}