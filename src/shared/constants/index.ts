// API endpoints
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    REFRESH: "/auth/refresh",
    LOGOUT: "/auth/logout",
    FORGOT_PASSWORD: "/auth/forgot-password",
    RESET_PASSWORD: "/auth/reset-password",
    CHANGE_PASSWORD: "/auth/change-password",
  },
  EMPLOYEES: {
    LIST: "/employees",
    CREATE: "/employees",
    GET: (id: string) => `/employees/${id}`,
    UPDATE: (id: string) => `/employees/${id}`,
    DELETE: (id: string) => `/employees/${id}`,
    DOCUMENTS: (id: string) => `/employees/${id}/documents`,
  },
  DEPARTMENTS: {
    LIST: "/departments",
    CREATE: "/departments",
    GET: (id: string) => `/departments/${id}`,
    UPDATE: (id: string) => `/departments/${id}`,
    DELETE: (id: string) => `/departments/${id}`,
  },
  POSITIONS: {
    LIST: "/positions",
    CREATE: "/positions",
    GET: (id: string) => `/positions/${id}`,
    UPDATE: (id: string) => `/positions/${id}`,
    DELETE: (id: string) => `/positions/${id}`,
  },
  LEAVE: {
    TYPES: "/leave/types",
    BALANCE: "/leave/balance",
    REQUESTS: "/leave/requests",
    APPROVE: (id: string) => `/leave/requests/${id}/approve`,
    CALENDAR: "/leave/calendar",
  },
  ATTENDANCE: {
    CLOCK_IN: "/attendance/clock-in",
    CLOCK_OUT: "/attendance/clock-out",
    TODAY: "/attendance/today",
    STATUS: "/attendance/status",
    HISTORY: "/attendance/history",
    REPORTS: "/attendance/reports",
  },
  PAYROLL: {
    SALARY: "/payroll/salary",
    ALLOWANCES: "/payroll/allowances",
    DEDUCTIONS: "/payroll/deductions",
    GENERATE: "/payroll/generate",
    RUNS: "/payroll/runs",
    PAYSLIP: (id: string) => `/payroll/payslip/${id}`,
  },
  NOTIFICATIONS: {
    LIST: "/notifications",
    UNREAD_COUNT: "/notifications/unread-count",
    MARK_READ: "/notifications/mark-read",
  },
} as const;

// User roles with permissions
export const USER_ROLES = {
  EMPLOYEE: "employee",
  HR: "hr",
  ADMIN: "admin",
} as const;

// Permission levels
export const PERMISSIONS = {
  READ_OWN: "read_own",
  READ_ALL: "read_all",
  WRITE_OWN: "write_own",
  WRITE_ALL: "write_all",
  DELETE: "delete",
  ADMIN: "admin",
} as const;

// Role permissions mapping
export const ROLE_PERMISSIONS = {
  [USER_ROLES.EMPLOYEE]: [PERMISSIONS.READ_OWN, PERMISSIONS.WRITE_OWN],
  [USER_ROLES.HR]: [
    PERMISSIONS.READ_OWN,
    PERMISSIONS.READ_ALL,
    PERMISSIONS.WRITE_OWN,
    PERMISSIONS.WRITE_ALL,
  ],
  [USER_ROLES.ADMIN]: [
    PERMISSIONS.READ_OWN,
    PERMISSIONS.READ_ALL,
    PERMISSIONS.WRITE_OWN,
    PERMISSIONS.WRITE_ALL,
    PERMISSIONS.DELETE,
    PERMISSIONS.ADMIN,
  ],
} as const;

// Default pagination
export const DEFAULT_PAGINATION = {
  PAGE: 1,
  LIMIT: 10,
  MAX_LIMIT: 100,
} as const;

// File upload limits
export const FILE_UPLOAD = {
  MAX_SIZE: 10 * 1024 * 1024, // 10MB
  ALLOWED_TYPES: [
    "image/jpeg",
    "image/png",
    "image/gif",
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "text/plain",
  ],
} as const;

// Date formats
export const DATE_FORMATS = {
  DISPLAY: "MMM dd, yyyy",
  INPUT: "yyyy-MM-dd",
  DATETIME: "MMM dd, yyyy HH:mm",
  TIME: "HH:mm",
} as const;
