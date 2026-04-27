import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar";
import Navbar from "./components/layout/Navbar";

import Dashboard from "./pages/Dashboard";
import Books from "./pages/Books";
import Students from "./pages/Students";
import IssueBook from "./pages/IssueBook";
import ReturnBook from "./pages/ReturnBook";
import Fines from "./pages/Fines";
import Reports from "./pages/Reports";
import StudentLogin from "./pages/StudentLogin";
import AdminLogin from "./pages/AdminLogin";
import StudentDashboard from "./pages/StudentDashboard";

function AdminLayout({ user, onLogout, children }) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="flex min-h-screen bg-[#0a0c11]">
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        user={user}
        onLogout={onLogout}
      />
      <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
        <Navbar user={user} />
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
}

function ProtectedAdminRoute({ user, children }) {
  if (!user || user.role !== "admin") return <Navigate to="/admin-login" replace />;
  return children;
}

function ProtectedStudentRoute({ user, children }) {
  if (!user || user.role !== "student") return <Navigate to="/student-login" replace />;
  return children;
}

export default function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => setUser(userData);
  const handleLogout = () => setUser(null);

  return (
    <BrowserRouter>
      <Routes>
        {/* Auth routes */}
        <Route path="/student-login" element={<StudentLogin onLogin={handleLogin} />} />
        <Route path="/admin-login" element={<AdminLogin onLogin={handleLogin} />} />

        {/* Student portal */}
        <Route
          path="/student-dashboard"
          element={
            <ProtectedStudentRoute user={user}>
              <StudentDashboard user={user} onLogout={handleLogout} />
            </ProtectedStudentRoute>
          }
        />

        {/* Admin routes */}
        <Route
          path="/"
          element={
            <ProtectedAdminRoute user={user}>
              <AdminLayout user={user} onLogout={handleLogout}>
                <Dashboard />
              </AdminLayout>
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/books"
          element={
            <ProtectedAdminRoute user={user}>
              <AdminLayout user={user} onLogout={handleLogout}>
                <Books />
              </AdminLayout>
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/students"
          element={
            <ProtectedAdminRoute user={user}>
              <AdminLayout user={user} onLogout={handleLogout}>
                <Students />
              </AdminLayout>
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/issue"
          element={
            <ProtectedAdminRoute user={user}>
              <AdminLayout user={user} onLogout={handleLogout}>
                <IssueBook />
              </AdminLayout>
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/return"
          element={
            <ProtectedAdminRoute user={user}>
              <AdminLayout user={user} onLogout={handleLogout}>
                <ReturnBook />
              </AdminLayout>
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/fines"
          element={
            <ProtectedAdminRoute user={user}>
              <AdminLayout user={user} onLogout={handleLogout}>
                <Fines />
              </AdminLayout>
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/reports"
          element={
            <ProtectedAdminRoute user={user}>
              <AdminLayout user={user} onLogout={handleLogout}>
                <Reports />
              </AdminLayout>
            </ProtectedAdminRoute>
          }
        />

        {/* Default redirect */}
        <Route path="*" element={<Navigate to="/admin-login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}