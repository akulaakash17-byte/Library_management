export default function IssueBook() {
  return (
    <div className="container">
      <h2>Issue Book</h2>

      <div className="card">
        <select>
          <option>Select Student</option>
          <option>Akash</option>
        </select>

        <br /><br />

        <select>
          <option>Select Book</option>
          <option>React Basics</option>
        </select>

        <br /><br />

        <button>Issue Book</button>
      </div>
    </div>
  );
}