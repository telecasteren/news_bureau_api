import { Outlet } from "react-router";
import Sidebar from "./components/sidebar/Sidebar";
import { Footer } from "./components/footer/Footer";

export default function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Sidebar />

      <main className="flex-1 sm:ml-64">
        <div className="mx-auto w-full max-w-5xl px-6 py-6 md:px-10 md:py-10">
          <Outlet />
        </div>
      </main>
      <Footer className="sm:ml-64" />
    </div>
  );
}
