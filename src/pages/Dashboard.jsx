export default function Dashboard() {
  const cardStyle = {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
    flex: 1
  };

  return (
    <div>
      <h2>Dashboard</h2>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <div style={cardStyle}>📚 Total Books: 120</div>
        <div style={cardStyle}>📤 Issued: 45</div>
        <div style={cardStyle}>✅ Available: 75</div>
        <div style={cardStyle}>⚠️ Overdue: 5</div>
      </div>
    </div>
  );
}