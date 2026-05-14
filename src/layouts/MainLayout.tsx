import { Outlet } from 'react-router-dom'
import { Navbar } from '@/components/layout/Navbar'
import { Sidebar } from '@/components/layout/Sidebar'
import { MobileNav } from '@/components/layout/MobileNav'
import { ToastContainer } from '@/components/shared/ToastContainer'
import { useIsMobile } from '@/hooks'
import { useUIStore } from '@/store'
import { cn } from '@/lib/utils'

export function MainLayout() {
  const isMobile = useIsMobile()
  const { sidebarOpen } = useUIStore()

  return (
    <div className="min-h-screen bg-[#0a1628]">
      <Navbar />

      <div className="flex">
        {!isMobile && <Sidebar />}

        <main
          className={cn(
            "flex-1 transition-all duration-300",
            !isMobile && sidebarOpen ? "ml-64" : !isMobile ? "ml-20" : "ml-0",
            "pb-20 md:pb-0"
          )}
        >
          <div className="p-4 md:p-6 lg:p-8 max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>

      {isMobile && <MobileNav />}
      <ToastContainer />
    </div>
  )
}
