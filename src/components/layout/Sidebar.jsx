import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div style={{
      width: "240px",
      height: "100vh",
      background: "#111827",
      color: "white",
      padding: "20px"
    }}>
      <h2 style={{ marginBottom: "30px" }}>📚 Library</h2>

      <nav style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <Link to="/" style={{ color: "white" }}>Dashboard</Link>
        <Link to="/books" style={{ color: "white" }}>Books</Link>
        <Link to="/students" style={{ color: "white" }}>Students</Link>
        <Link to="/issue" style={{ color: "white" }}>Issue</Link>
        <Link to="/return" style={{ color: "white" }}>Return</Link>
        <Link to="/fines" style={{ color: "white" }}>Fines</Link>
        <Link to="/reports" style={{ color: "white" }}>Reports</Link>
      </nav>
    </div>
  );
}