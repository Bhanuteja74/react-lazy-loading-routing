import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isAuthenticated = false;
  return isAuthenticated ? children : <Navigate to="/" />;
}
