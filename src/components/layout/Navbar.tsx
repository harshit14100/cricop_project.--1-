import { useState, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Bell, Search, Zap, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useAuthStore } from "@/store";
import { useIsMobile } from "@/hooks";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useIsMobile();
  const { user } = useAuthStore();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location.pathname === "/dashboard" || location.pathname === "/";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300",
        scrolled
          ? "bg-[#0a1628]/95 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20"
          : "bg-[#0a1628]/60 backdrop-blur-md"
      )}
    >
      <div className="flex items-center justify-between h-full px-4 md:px-6 w-full">
        <div className="flex items-center gap-2 md:gap-4">
          {!isHome && (
            <Button
              variant="ghost"
              size="icon"
              className="text-white/70 hover:text-white -ml-2"
              onClick={() => navigate(-1)}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          )}
          <Link to="/dashboard" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ rotate: 15, scale: 1.1 }}
              className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-electric flex items-center justify-center"
            >
              <Zap className="h-4 w-4 text-white" />
            </motion.div>
            <span className="text-xl font-bold text-white tracking-tight">
              Cric<span className="text-electric">OP</span>
            </span>
          </Link>

          {!isMobile && (
            <div className="flex items-center gap-2 text-white/40 ml-4 border-l border-white/10 pl-4">
              <span className="text-sm font-medium">Home</span>
              <span className="text-xs">/</span>
              <span className="text-sm font-medium text-white capitalize">
                {window.location.pathname.split("/").pop()?.replace("-", " ") ||
                  "Home"}
              </span>
            </div>
          )}
        </div>

        <div className="flex items-center gap-3">
          <motion.div
            initial={false}
            whileFocus={{ scale: 1.02 }}
            className="hidden sm:flex items-center relative mr-2"
          >
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40 group-focus-within:text-electric transition-colors" />
            <input
              type="text"
              placeholder="Search matches..."
              className="bg-white/5 border border-white/10 rounded-full py-1.5 pl-10 pr-4 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 w-48 lg:w-64 transition-all focus:w-72"
            />
          </motion.div>

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
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      3
                    </motion.span>
                  </Badge>
                </Button>
              </motion.div>
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
            {user ? (
              <>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Avatar
                    className="h-8 w-8 cursor-pointer hover:ring-2 hover:ring-blue-500 transition-all"
                    onClick={() => navigate("/settings")}
                  >
                    <AvatarImage src={user?.avatar} />
                    <AvatarFallback className="bg-gradient-to-br from-blue-600 to-electric">
                      {user?.name?.charAt(0) || "U"}
                    </AvatarFallback>
                  </Avatar>
                </motion.div>
                {!isMobile && (
                  <div className="hidden lg:block">
                    <p className="text-sm font-medium text-white line-clamp-1">
                      {user?.name}
                    </p>
                    <p className="text-[10px] text-white/50 uppercase tracking-wider">
                      {user?.role}
                    </p>
                  </div>
                )}
              </>
            ) : (
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-white border-white/20 hover:bg-white/10"
                  onClick={() => navigate("/login")}
                >
                  Login
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.header>
  );
}

function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}
