import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <nav>
        <Link to="settings">Settings</Link>
        <Link to="profile">Profile</Link>
      </nav>
      <p>Welcome to Dashboard</p>
      {/* The Outlet component renders the child routes wherever we write Outlet tag*/}
      <Outlet />
    </>
  );
}
