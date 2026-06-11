import { useLocation, Outlet } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Navbar } from '@/components/layout/Navbar'
import { Sidebar } from '@/components/layout/Sidebar'
import { MobileNav } from '@/components/layout/MobileNav'
import { ToastContainer } from '@/components/shared/ToastContainer'
import { useIsMobile } from '@/hooks'
import { useUIStore } from '@/store'
import { cn } from '@/lib/utils'

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2 } },
}

export function MainLayout() {
  const location = useLocation()
  const isMobile = useIsMobile()
  const { sidebarOpen } = useUIStore()

  return (
    <div className="min-h-screen bg-[#0a1628]">
      <Navbar />

      <div className="flex">
        {!isMobile && <Sidebar />}

        <main
          className={cn(
            "flex-1 transition-all duration-300 pt-16",
            !isMobile && sidebarOpen ? "ml-64" : !isMobile ? "ml-20" : "ml-0",
            "pb-20 md:pb-0"
          )}
        >
          <div className="p-3 xs:p-4 md:p-6 lg:p-8 max-w-7xl mx-auto overflow-x-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Outlet />
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>

      {isMobile && <MobileNav />}
      <ToastContainer />
    </div>
  )
}
