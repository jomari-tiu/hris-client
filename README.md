# HRIS Frontend

A modern, responsive Human Resource Information System (HRIS) frontend built with React, TypeScript, TailwindCSS, and Vite.

## Features

- 🎨 Modern UI with Radix UI components and TailwindCSS
- 🔐 JWT-based authentication with refresh tokens
- 🎭 Role-based access control (Employee, HR, Admin)
- 📱 Fully responsive design
- 🎯 Type-safe with TypeScript
- 🚀 Fast development with Vite and HMR
- 📊 Data fetching with TanStack Query (React Query)
- 📝 Form handling with React Hook Form and Zod validation
- 🎨 Beautiful UI components from shadcn/ui
- 🧭 Client-side routing with React Router
- ⚡ Optimized builds with code splitting

## Prerequisites

- Node.js >= 18.0.0
- npm or pnpm >= 8.0.0
- HRIS Backend API running (see backend README)

## Getting Started

### 1. Install Dependencies

```bash
npm install
# or
pnpm install
```

### 2. Configure Environment

```bash
# Copy the example environment file
cp .env.example .env

# Edit .env with your backend API URL
```

`.env` file contents:

```env
VITE_API_BASE_URL=http://localhost:3000
```

### 3. Start Development Server

```bash
npm run dev
# or
pnpm dev
```

The application will be available at `http://localhost:5173`

### 4. Build for Production

```bash
# Type check and build
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
hris-frontend/
├── src/
│   ├── assets/           # Static assets (images, fonts)
│   ├── components/       # Reusable UI components
│   │   ├── form/        # Form components
│   │   ├── layout/      # Layout components (Header, Sidebar, etc.)
│   │   └── ui/          # Base UI components (Button, Input, etc.)
│   ├── context/         # React Context providers
│   │   ├── AuthProvider/      # Authentication context
│   │   └── ProfileProvider/   # User profile context
│   ├── lib/             # Utility libraries
│   ├── pages/           # Page components
│   │   ├── admin/       # Admin-only pages
│   │   ├── employee/    # Employee pages
│   │   ├── hr/          # HR pages
│   │   └── login/       # Login page
│   ├── routes/          # Route configurations
│   ├── shared/          # Shared constants and types
│   ├── styles/          # Global styles
│   ├── types/           # TypeScript type definitions
│   ├── utils/           # Utility functions
│   ├── App.tsx          # Root application component
│   └── main.tsx         # Application entry point
├── index.html           # HTML template
├── vite.config.ts       # Vite configuration
├── tailwind.config.ts   # TailwindCSS configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies and scripts
```

## Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Type check and build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Lint code with ESLint
- `npm run type-check` - Run TypeScript type checking

## User Roles & Features

### Employee Portal

- 👤 View and edit own profile
- 📅 Request time off / leave
- ⏰ Clock in/out for attendance
- 📄 View payslips
- 🔔 Receive notifications

### HR Portal

All Employee features plus:

- 👥 Manage all employees
- 🏢 Manage departments
- 💼 Manage positions
- ✅ Approve/reject leave requests
- 📊 View attendance reports
- 💰 Generate payroll

### Admin Portal

All HR features plus:

- 🔐 Manage users and roles
- ⚙️ System configuration
- 📈 View analytics and reports
- 🗑️ Delete records
- 📋 Access audit logs

## Default Login Credentials

After seeding the backend database, you can use these credentials:

**Admin:**

- Email: `admin@hris.com`
- Password: `Admin123!`

**HR Manager:**

- Email: `hr@hris.com`
- Password: `Hr123!`

**Employee:**

- Email: `employee@hris.com`
- Password: `Employee123!`

## API Integration

The frontend communicates with the backend API using Axios. The base URL is configured in the `.env` file.

### Authentication Flow

1. User logs in via `/login` page
2. Backend returns access token and refresh token
3. Access token is stored in memory (React Context)
4. Refresh token is stored in secure HTTP-only cookie (or localStorage)
5. Access token is included in all API requests via Authorization header
6. When access token expires, refresh token is used to get a new one

### API Configuration

The API client is configured to:

- Automatically add JWT tokens to requests
- Handle token refresh on 401 errors
- Redirect to login on authentication failures
- Show error notifications

## Key Technologies

### Core

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server

### Styling

- **TailwindCSS 4** - Utility-first CSS framework
- **Radix UI** - Accessible UI primitives
- **shadcn/ui** - Pre-built component library
- **Lucide React** - Icon library

### Data Management

- **TanStack Query** - Server state management
- **Axios** - HTTP client
- **React Hook Form** - Form management
- **Zod** - Schema validation

### Routing

- **React Router v6** - Client-side routing

### Development

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Static type checking

## Component Library

The project uses shadcn/ui components, which are:

- ✅ Copy-pasteable, not installed as dependencies
- 🎨 Built on Radix UI primitives
- ♿ Fully accessible (ARIA compliant)
- 🎯 Type-safe with TypeScript
- 🎨 Customizable with TailwindCSS

Available components in `src/components/ui/`:

- Avatar, Badge, Button, Calendar, Card
- Checkbox, Dialog, Dropdown Menu, Input
- Label, Popover, Radio Group, Select
- Separator, Switch, Toast, and more

## Styling Conventions

### TailwindCSS

The project uses Tailwind utility classes for styling:

```tsx
<Button className="bg-blue-500 hover:bg-blue-600 text-white">Click me</Button>
```

### Custom Styles

Global styles are in `src/styles/globals.css`

### Theme

The color scheme and design tokens are configured in `tailwind.config.ts`

## Environment Variables

| Variable            | Description          | Default                 |
| ------------------- | -------------------- | ----------------------- |
| `VITE_API_BASE_URL` | Backend API base URL | `http://localhost:3000` |

## Troubleshooting

### API Connection Issues

**Problem:** Cannot connect to backend API

**Solution:**

1. Ensure backend is running on the correct port
2. Check `VITE_API_BASE_URL` in `.env`
3. Verify CORS settings in backend allow `http://localhost:5173`

### Build Errors

**Problem:** TypeScript errors during build

**Solution:**

```bash
# Run type checking to see detailed errors
npm run type-check

# Fix any type errors before building
npm run build
```

### Hot Module Replacement Not Working

**Problem:** Changes not reflecting in browser

**Solution:**

1. Restart the dev server
2. Clear browser cache
3. Check for syntax errors in console

### Port Already in Use

**Problem:** Port 5173 is already in use

**Solution:**

```bash
# Vite will automatically try the next available port (5174, 5175, etc.)
# Or specify a different port in vite.config.ts:
export default defineConfig({
  server: {
    port: 3001
  }
})
```

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)

## Performance Optimization

The build is optimized with:

- ⚡ Code splitting
- 🗜️ Asset minification
- 🎯 Tree shaking
- 📦 Chunk optimization
- 🖼️ Image optimization

## Contributing

1. Follow the existing code style
2. Use TypeScript for all new components
3. Add proper type definitions
4. Test on different screen sizes
5. Run linter before committing

## Development Tips

### Hot Reload

The dev server supports Hot Module Replacement (HMR) for instant updates.

### React DevTools

Install React DevTools browser extension for debugging:

- [Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)

### TanStack Query DevTools

The React Query DevTools are automatically included in development mode. Look for the floating icon in the bottom-right corner.

## License

MIT
