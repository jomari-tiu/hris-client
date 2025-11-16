import EmptyPage from '@/components/ui/EmptyPage';
import { DashboardPage } from '@/pages/admin/dashboard/_page';
import { EmployeesPage } from '@/pages/admin/employees/_page';
import { SandboxPage } from '@/pages/sandbox/_page';

export const AdminRoutes = [
  {
    path: '/',
    element: <DashboardPage />,
  },
  {
    path: '/employees',
    element: <EmployeesPage />,
  },
  {
    path: '/departments',
    element: (
      <EmptyPage
        title="Departments"
        description="Departments management features coming soon..."
      />
    ),
  },
  {
    path: '/leave',
    element: (
      <EmptyPage
        title="Leave"
        description="Leave management features coming soon..."
      />
    ),
  },
  {
    path: '/attendance',
    element: (
      <EmptyPage
        title="Attendance"
        description="Attendance management features coming soon..."
      />
    ),
  },
  {
    path: '/payroll',
    element: (
      <EmptyPage
        title="Payroll"
        description="Payroll management features coming soon..."
      />
    ),
  },
  {
    path: '/reports',
    element: (
      <EmptyPage
        title="Reports"
        description="Reports management features coming soon..."
      />
    ),
  },
  {
    path: '/documents',
    element: (
      <EmptyPage
        title="Documents"
        description="Documents management features coming soon..."
      />
    ),
  },
  {
    path: '/notifications',
    element: (
      <EmptyPage
        title="Notifications"
        description="Notifications management features coming soon..."
      />
    ),
  },
  {
    path: '/settings',
    element: (
      <EmptyPage
        title="Settings"
        description="Settings management features coming soon..."
      />
    ),
  },
  {
    path: '/sandbox',
    element: <SandboxPage />,
  },
];
