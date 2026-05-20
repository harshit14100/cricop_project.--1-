import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Play,
  History,
  BarChart3,
  Users,
  Settings,
  Shield,
  ChevronLeft,
  ChevronRight,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuthStore, useUIStore } from "@/store";
import { useIsMobile } from "@/hooks";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: Play, label: "Start Match", path: "/start-match" },
  { icon: History, label: "History", path: "/history" },
  { icon: BarChart3, label: "Statistics", path: "/statistics" },
  { icon: Users, label: "Players", path: "/players" },
];

const adminItems = [{ icon: Shield, label: "Admin", path: "/admin" }];

export function Sidebar() {
  const location = useLocation();
  const { sidebarOpen, setSidebarOpen } = useUIStore();
  const { user } = useAuthStore();
  const isMobile = useIsMobile();

  if (isMobile) return null;

  const items =
    user?.role === "admin" ? [...navItems, ...adminItems] : navItems;

  return (
    <motion.aside
      initial={false}
      animate={{ width: sidebarOpen ? 256 : 80 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed left-0 top-0 bottom-0 z-50 bg-[#0d1e36]/95 backdrop-blur-xl border-r border-white/5"
    >
      <div className="flex flex-col h-full">
        {/* Logo Area */}
        <div className={cn(
          "h-16 flex items-center border-b border-white/5 px-4 mb-2",
          sidebarOpen ? "justify-between" : "justify-center"
        )}>
          {sidebarOpen && (
            <Link to="/dashboard" className="flex items-center gap-2 overflow-hidden">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-electric flex items-center justify-center flex-shrink-0">
                <Zap className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Cric<span className="text-electric">OP</span>
              </span>
            </Link>
          )}
          {!sidebarOpen && (
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-electric flex items-center justify-center">
              <Zap className="h-4 w-4 text-white" />
            </div>
          )}
        </div>

        <nav className="flex-1 px-3 space-y-1">
          {items.map((item) => {
            const isActive =
              location.pathname === item.path ||
              location.pathname.startsWith(`${item.path}/`);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center rounded-xl transition-all duration-200 group relative",
                  sidebarOpen ? "gap-3 px-3 py-3" : "justify-center p-3",
                  isActive
                    ? "bg-gradient-to-r from-blue-600/20 to-blue-500/10 text-blue-400 border border-blue-500/20"
                    : "text-white/60 hover:text-white hover:bg-white/5",
                )}
              >
                <item.icon
                  className={cn(
                    "h-5 w-5 flex-shrink-0",
                    isActive && "text-electric",
                  )}
                />
                <AnimatePresence>
                  {sidebarOpen && (
                    <motion.span
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-sm font-medium whitespace-nowrap overflow-hidden"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-electric rounded-r-full"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="px-3 mt-auto mb-4 space-y-2">
          <Link
            to="/settings"
            className={cn(
              "flex items-center rounded-xl transition-all duration-200",
              sidebarOpen ? "gap-3 px-3 py-3" : "justify-center p-3",
              location.pathname === "/settings"
                ? "bg-white/10 text-white"
                : "text-white/60 hover:text-white hover:bg-white/5",
            )}
          >
            <Settings className="h-5 w-5 flex-shrink-0" />
            {sidebarOpen && (
              <span className="text-sm font-medium">Settings</span>
            )}
          </Link>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className={cn(
              "w-full flex items-center rounded-xl p-3 text-white/50 hover:text-white hover:bg-white/5 transition-all",
              sidebarOpen ? "gap-3" : "justify-center"
            )}
          >
            {sidebarOpen ? (
              <>
                <ChevronLeft className="h-5 w-5" />
                <span className="text-sm font-medium">Collapse</span>
              </>
            ) : (
              <ChevronRight className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
    </motion.aside>
  );
}

