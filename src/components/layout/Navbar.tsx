import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Bell, Search, Zap, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useAuthStore, useUIStore } from "@/store";
import { useIsMobile } from "@/hooks";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const { user } = useAuthStore();
  const { sidebarOpen, setSidebarOpen } = useUIStore();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 right-0 z-40 h-16 bg-[#0a1628]/80 backdrop-blur-xl border-b border-white/5 transition-all duration-300",
        !isMobile && sidebarOpen ? "left-64" : !isMobile ? "left-20" : "left-0"
      )}
    >
      <div className="flex items-center justify-between h-full px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          {isMobile && (
            <>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="text-white/70"
              >
                <Menu className="h-5 w-5" />
              </Button>
              <Link to="/dashboard" className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-electric flex items-center justify-center">
                  <Zap className="h-4 w-4 text-white" />
                </div>
                <span className="text-xl font-bold text-white tracking-tight">
                  Cric<span className="text-electric">OP</span>
                </span>
              </Link>
            </>
          )}

          {!isMobile && (
            <div className="flex items-center gap-2 text-white/40">
              <span className="text-sm font-medium">Dashboard</span>
              <span className="text-xs">/</span>
              <span className="text-sm font-medium text-white capitalize">
                {window.location.pathname.split("/").pop()?.replace("-", " ") || "Home"}
              </span>
            </div>
          )}
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center relative mr-2">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
            <input
              type="text"
              placeholder="Search matches..."
              className="bg-white/5 border border-white/10 rounded-full py-1.5 pl-10 pr-4 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 w-48 lg:w-64 transition-all"
            />
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="text-white/70 sm:hidden"
            onClick={() => navigate("/history")}
          >
            <Search className="h-5 w-5" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white/70 relative"
              >
                <Bell className="h-5 w-5" />
                <Badge
                  variant="live"
                  className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center text-[10px]"
                >
                  3
                </Badge>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64">
              <div className="p-3 pb-2 border-b border-white/10">
                <h4 className="font-semibold text-white">Notifications</h4>
              </div>
              <DropdownMenuItem>Match started: MI vs CSK</DropdownMenuItem>
              <DropdownMenuItem>Rohit Sharma scored a fifty!</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="flex items-center gap-2 pl-2 border-l border-white/10">
            <Avatar
              className="h-8 w-8 cursor-pointer hover:ring-2 hover:ring-blue-500 transition-all"
              onClick={() => navigate("/settings")}
            >
              <AvatarImage src={user?.avatar} />
              <AvatarFallback>{user?.name?.charAt(0) || "U"}</AvatarFallback>
            </Avatar>
            {!isMobile && (
              <div className="hidden lg:block">
                <p className="text-sm font-medium text-white line-clamp-1">{user?.name}</p>
                <p className="text-[10px] text-white/50 uppercase tracking-wider">{user?.role}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.header>
  );
}

