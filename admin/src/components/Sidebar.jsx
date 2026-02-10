import { NavLink } from "react-router-dom";

export default function Sidebar({ open, setOpen }) {
  return (
    <>
      {/* Overlay (mobile only) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-20 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-screen w-64 bg-white border-r border-slate-200 z-30
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* Header */}
        <div className="p-6 text-xl font-bold text-slate-800 border-b flex justify-between items-center">
          Vivacious Admin
          <button
            className="md:hidden text-xl"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>
        </div>

        {/* Menu */}
        <nav className="mt-6 flex flex-col px-4 space-y-1">
          <NavLink
            to="/dashboard"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `px-4 py-3 rounded-lg text-sm font-medium transition-all ${isActive
                ? "bg-orange-100 text-orange-600"
                : "text-slate-600 hover:bg-slate-100"
              }`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/queries"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `px-4 py-3 rounded-lg text-sm font-medium transition-all ${isActive
                ? "bg-orange-100 text-orange-600"
                : "text-slate-600 hover:bg-slate-100"
              }`
            }
          >
            Query List
          </NavLink>



          <NavLink
            to="/services"
            className={({ isActive }) =>
              `px-4 py-3 rounded-lg text-sm font-medium transition-all
    ${isActive
                ? "bg-orange-100 text-orange-600"
                : "text-slate-600 hover:bg-slate-100"
              }`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/reviews"
            className={({ isActive }) =>
              `px-4 py-3 rounded-lg text-sm font-medium transition-all
    ${isActive
                ? "bg-orange-100 text-orange-600"
                : "text-slate-600 hover:bg-slate-100"
              }`
            }
          >
            ⭐ All Reviews
          </NavLink>
          
          <NavLink
            to="/team"
            className={({ isActive }) =>
              `px-4 py-3 rounded-lg text-sm font-medium transition-all
    ${isActive
                ? "bg-orange-100 text-orange-600"
                : "text-slate-600 hover:bg-slate-100"
              }`
            }
          >
            Team Members
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `px-4 py-3 rounded-lg text-sm font-medium transition-all
    ${isActive
                ? "bg-orange-100 text-orange-600"
                : "text-slate-600 hover:bg-slate-100"
              }`
            }
          >
            Our Projects
          </NavLink>
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              `px-4 py-3 rounded-lg text-sm font-medium transition-all
    ${isActive
                ? "bg-orange-100 text-orange-600"
                : "text-slate-600 hover:bg-slate-100"
              }`
            }
          >
            Our Blogs
          </NavLink>
          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              `px-4 py-3 rounded-lg text-sm font-medium transition-all
    ${isActive
                ? "bg-orange-100 text-orange-600"
                : "text-slate-600 hover:bg-slate-100"
              }`
            }
          >
            Our Pricing Plans
          </NavLink>
          <NavLink
            to="/partners"
            className={({ isActive }) =>
              `px-4 py-3 rounded-lg text-sm font-medium transition-all
    ${isActive
                ? "bg-orange-100 text-orange-600"
                : "text-slate-600 hover:bg-slate-100"
              }`
            }
          >
            Our Partners
          </NavLink>
          <NavLink
            to="/history"
            className={({ isActive }) =>
              `px-4 py-3 rounded-lg text-sm font-medium transition-all
    ${isActive
                ? "bg-orange-100 text-orange-600"
                : "text-slate-600 hover:bg-slate-100"
              }`
            }
          >
            Our History
          </NavLink>
          <NavLink
            to="/faq"
            className={({ isActive }) =>
              `px-4 py-3 rounded-lg text-sm font-medium transition-all
    ${isActive
                ? "bg-orange-100 text-orange-600"
                : "text-slate-600 hover:bg-slate-100"
              }`
            }
          >
            FAQs
          </NavLink>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `px-4 py-3 rounded-lg text-sm font-medium transition-all
    ${isActive
                ? "bg-orange-100 text-orange-600"
                : "text-slate-600 hover:bg-slate-100"
              }`
            }
          >
            Settings
          </NavLink>




        </nav>

        {/* Footer */}
        <div className="absolute bottom-4 w-full text-center text-xs text-slate-400">
          © 2026 Vivacious Solutions
        </div>
      </div>
    </>
  );
}
