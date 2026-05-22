import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import { MainLayout } from "@/layouts/MainLayout";
import { AuthLayout } from "@/layouts/AuthLayout";
import { ProtectedRoute } from "@/routes/ProtectedRoute";
import { LoadingScreen } from "@/components/shared/LoadingScreen";

// Lazy load pages for better performance
const SplashScreen = lazy(() => import("@/pages/SplashScreen"));
const LoginPage = lazy(() => import("@/pages/auth/LoginPage"));
const SignupPage = lazy(() => import("@/pages/auth/SignupPage"));
const ForgotPasswordPage = lazy(() => import("@/pages/auth/ForgotPasswordPage"));
const DashboardPage = lazy(() => import("@/pages/dashboard/DashboardPage"));
const StartMatchPage = lazy(() => import("@/pages/match/StartMatchPage"));
const LiveScoringPage = lazy(() => import("@/pages/scoring/LiveScoringPage"));
const MatchSummaryPage = lazy(() => import("@/pages/match/MatchSummaryPage"));
const MatchHistoryPage = lazy(() => import("@/pages/match/MatchHistoryPage"));
const MatchViewPage = lazy(() => import("@/pages/match/MatchViewPage"));
const StatisticsPage = lazy(() => import("@/pages/statistics/StatisticsPage"));
const PlayerProfilePage = lazy(
  () => import("@/pages/players/PlayerProfilePage"),
);
const PlayersListPage = lazy(() => import("@/pages/players/PlayersListPage"));
const AdminDashboardPage = lazy(
  () => import("@/pages/admin/AdminDashboardPage"),
);
const AdminUsersPage = lazy(() => import("@/pages/admin/AdminUsersPage"));
const AdminMatchesPage = lazy(() => import("@/pages/admin/AdminMatchesPage"));
const SettingsPage = lazy(() => import("@/pages/SettingsPage"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <SplashScreen />,
  },
  {
    path: "/login",
    element: (
      <AuthLayout>
        <Suspense fallback={<LoadingScreen />}>
          <LoginPage />
        </Suspense>
      </AuthLayout>
    ),
  },
  {
    path: "/signup",
    element: (
      <AuthLayout>
        <Suspense fallback={<LoadingScreen />}>
          <SignupPage />
        </Suspense>
      </AuthLayout>
    ),
  },
  {
    path: "/forgot-password",
    element: (
      <AuthLayout>
        <Suspense fallback={<LoadingScreen />}>
          <ForgotPasswordPage />
        </Suspense>
      </AuthLayout>
    ),
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "dashboard",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <DashboardPage />
          </Suspense>
        ),
      },
      {
        path: "start-match",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <StartMatchPage />
          </Suspense>
        ),
      },
      {
        path: "live-scoring/:matchId",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <LiveScoringPage />
          </Suspense>
        ),
      },
      {
        path: "match/:matchId",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <MatchViewPage />
          </Suspense>
        ),
      },
      {
        path: "match-summary/:matchId",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <MatchSummaryPage />
          </Suspense>
        ),
      },
      {
        path: "history",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <MatchHistoryPage />
          </Suspense>
        ),
      },
      {
        path: "statistics",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <StatisticsPage />
          </Suspense>
        ),
      },
      {
        path: "players",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <PlayersListPage />
          </Suspense>
        ),
      },
      {
        path: "player/:playerId",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <PlayerProfilePage />
          </Suspense>
        ),
      },
      {
        path: "admin",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <AdminDashboardPage />
          </Suspense>
        ),
      },
      {
        path: "admin/users",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <AdminUsersPage />
          </Suspense>
        ),
      },
      {
        path: "admin/matches",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <AdminMatchesPage />
          </Suspense>
        ),
      },
      {
        path: "settings",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <SettingsPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
