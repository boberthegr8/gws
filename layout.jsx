import { isAuthed } from "@/lib/auth";
import AdminLogin from "@/components/AdminLogin";
import AdminDashboard from "@/components/AdminDashboard";
import "./admin.css";

export const dynamic = "force-dynamic";
export const metadata = { title: "Admin — GWS" };

export default function AdminPage() {
  const authed = isAuthed();
  return authed ? <AdminDashboard /> : <AdminLogin />;
}
