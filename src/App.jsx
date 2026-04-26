import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar";
import Navbar from "./components/layout/Navbar";

import Dashboard from "./pages/Dashboard";
import Books from "./pages/Books";
import Students from "./pages/Students";
import IssueBook from "./pages/IssueBook";
import ReturnBook from "./pages/ReturnBook";
import Fines from "./pages/Fines";
import Reports from "./pages/Reports";

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex" }}>
        <Sidebar />

        <div style={{ flex: 1 }}>
          <Navbar />

          <div style={{ padding: "20px" }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/books" element={<Books />} />
              <Route path="/students" element={<Students />} />
              <Route path="/issue" element={<IssueBook />} />
              <Route path="/return" element={<ReturnBook />} />
              <Route path="/fines" element={<Fines />} />
              <Route path="/reports" element={<Reports />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;