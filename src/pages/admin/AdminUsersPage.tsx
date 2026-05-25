import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Shield, UserX, UserCheck, MoreHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAdminUsers, useUpdateUserRole } from "@/hooks/useAdmin";
import { SkeletonCard } from "@/components/shared/SkeletonCard";
import type { User } from "@/types";

export default function AdminUsersPage() {
  const [search, setSearch] = useState("");
  const { data: response, isLoading } = useAdminUsers();
  const updateUserRole = useUpdateUserRole();

  const users = (response?.data as any)?.items || (response?.data as any) || [];
  
  const filtered = Array.isArray(users) ? users.filter(
    (u: User) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()),
  ) : [];

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          User Management
        </h1>
        <p className="text-sm text-white/50 mt-1">
          Manage users, roles, and permissions
        </p>
      </motion.div>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
          <Input
            placeholder="Search users..."
            className="pl-10"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Button variant="outline" className="gap-2">
          <Shield className="h-4 w-4" />
          Export
        </Button>
      </div>

      <Card className="glass-card overflow-hidden">
        {isLoading ? (
          <div className="p-8 space-y-4">
            <SkeletonCard className="h-12" />
            <SkeletonCard className="h-12" />
            <SkeletonCard className="h-12" />
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-white/40 font-medium">
                    User
                  </th>
                  <th className="text-left py-3 px-4 text-white/40 font-medium">
                    Role
                  </th>
                  <th className="text-left py-3 px-4 text-white/40 font-medium">
                    Status
                  </th>
                  <th className="text-right py-3 px-4 text-white/40 font-medium">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((user: User) => (
                  <tr
                    key={user.id}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                  >
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-white font-medium">{user.name}</p>
                          <p className="text-xs text-white/40">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <Badge
                        variant={
                          user.role === "admin"
                            ? "destructive"
                            : user.role === "host"
                              ? "warning"
                              : "secondary"
                        }
                      >
                        {user.role}
                      </Badge>
                    </td>
                    <td className="py-3 px-4">
                      <Badge
                        variant={user.isActive ? "success" : "destructive"}
                      >
                        {user.isActive ? "active" : "inactive"}
                      </Badge>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem 
                            className="gap-2"
                            onClick={() => updateUserRole.mutate({ userId: user.id, role: 'host' })}
                          >
                            <UserCheck className="h-4 w-4" /> Promote to Host
                          </DropdownMenuItem>
                          <DropdownMenuItem className="gap-2 text-red-400">
                            <UserX className="h-4 w-4" /> Deactivate
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>
    </div>
  );
}
