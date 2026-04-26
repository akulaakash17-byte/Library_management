export default function Books() {
  return (
    <div>
      <h2>Books</h2>

      <input
        placeholder="Search books..."
        style={{
          padding: "10px",
          width: "300px",
          marginBottom: "15px",
          borderRadius: "8px",
          border: "1px solid #ccc"
        }}
      />

      <div style={{
        background: "white",
        padding: "20px",
        borderRadius: "12px"
      }}>
        <table width="100%">
          <thead>
            <tr>
              <th align="left">Title</th>
              <th align="left">Author</th>
              <th align="left">Category</th>
              <th align="left">Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>React Basics</td>
              <td>Dan</td>
              <td>Tech</td>
              <td style={{ color: "green" }}>Available</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}