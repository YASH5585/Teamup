import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '../components/layout/RootLayout';
import { AppShell } from '../components/layout/AppShell';

// Public Pages
import { HomePage } from '../pages/public/HomePage';
import { NotFoundPage } from '../pages/public/NotFoundPage';

// Auth Pages
import { LoginPage } from '../pages/auth/LoginPage';
import { RegisterPage } from '../pages/auth/RegisterPage';
import { VerifyEmailPage } from '../pages/auth/VerifyEmailPage';

// Application Pages
import { DashboardPage } from '../pages/app/DashboardPage';
import { CompetitionsPage } from '../pages/app/CompetitionsPage';
import { CompetitionDetailsPage } from '../pages/app/CompetitionDetailsPage';
import { TeamPage } from '../pages/app/TeamPage';
import { MatchesPage } from '../pages/app/MatchesPage';
import { ConnectionsPage } from '../pages/app/ConnectionsPage';
import { MessagesPage } from '../pages/app/MessagesPage';
import { SettingsPage } from '../pages/app/SettingsPage';
import { ProfilePage } from '../pages/app/ProfilePage';

export const router = createBrowserRouter([
  // Authenticated Application Routes (Rendered inside AppShell)
  {
    element: <AppShell />,
    children: [
      {
        path: 'dashboard',
        element: <DashboardPage />,
      },
      {
        path: 'competitions',
        element: <CompetitionsPage />,
      },
      {
        path: 'competitions/:competitionId',
        element: <CompetitionDetailsPage />,
      },
      {
        path: 'teams',
        element: <TeamPage />,
      },
      {
        path: 'teams/:teamId',
        element: <TeamPage />,
      },
      {
        path: 'matches',
        element: <MatchesPage />,
      },
      {
        path: 'connections',
        element: <ConnectionsPage />,
      },
      {
        path: 'messages',
        element: <MessagesPage />,
      },
      {
        path: 'settings',
        element: <SettingsPage />,
      },
      {
        path: 'profiles/:userId',
        element: <ProfilePage />,
      },
    ],
  },
  // Public & Catch-All Routes (Rendered inside RootLayout with Navbar and Footer)
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
      {
        path: 'verify-email',
        element: <VerifyEmailPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
