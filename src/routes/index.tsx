import { AuthenticatedLayout } from '@/components/layout/AuthenticatedLayout';
import { ProtectedRoute, PublicRoute } from '@/components/auth';
import { useAuth } from '@/context/AuthProvider/authContext';
import { Route, Routes } from 'react-router-dom';

import { AdminRoutes } from './AdminRoutes';
import { EmployeeRoutes } from './EmployeeRoutes';
import { HrRoutes } from './HrRoutes';
import LoginPage from '@/pages/login/_page';
import LogoutPage from '@/pages/logout/_page';
import ForgotPasswordPage from '@/pages/forgot-password/_page';
import ResetPasswordPage from '@/pages/reset-password/_page';
import ChangePasswordPage from '@/pages/change-password/_page';
import EmptyPage from '@/components/ui/EmptyPage';

const appRoutes = {
  admin: AdminRoutes,
  employee: EmployeeRoutes,
  hr: HrRoutes,
} as const;

const AppRoutes = () => {
  const { user } = useAuth();

  return (
    <Routes>
      {/* Public Routes - Redirect to home if already authenticated */}
      <Route
        path="/login"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />
      <Route
        path="/forgot-password"
        element={
          <PublicRoute>
            <ForgotPasswordPage />
          </PublicRoute>
        }
      />
      <Route
        path="/reset-password"
        element={
          <PublicRoute>
            <ResetPasswordPage />
          </PublicRoute>
        }
      />
      <Route path="/logout" element={<LogoutPage />} />

      {/* Protected Routes - Require authentication */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <AuthenticatedLayout />
          </ProtectedRoute>
        }
      >
        {/* Change Password - Available to all authenticated users */}
        <Route path="change-password" element={<ChangePasswordPage />} />

        {/* Role-based Routes */}
        {user &&
          appRoutes[user.role as keyof typeof appRoutes]?.map(
            (route: { path: string; element: JSX.Element }) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            )
          )}

        {/* 404 Page */}
        <Route
          path="*"
          element={<EmptyPage title="404" description="Page not found" />}
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
