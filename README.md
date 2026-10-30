# Clyptus Enterprise Web Platform

[![Vite](https://img.shields.io/badge/Vite-6.1-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.0-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vitest](https://img.shields.io/badge/Vitest-5.0-FCC72B?logo=vitest&logoColor=black)](https://vitest.dev/)

Next-generation enterprise digital experience platform for **Clyptus IT Software Solutions**. Built with high-performance modern web technologies, responsive layouts, interactive telemetry consoles, and verified test suites.

---

## 🌟 Key Features

- **Enterprise Modern Design:** Dark/light responsive themes, high-contrast typography, and smooth micro-interactions.
- **Interactive Telemetry & Metrics:** Live telemetry console tabs, interactive bento grids, and real-time capability showcases.
- **Service Portfolio Architecture:**
  - SAP S/4HANA & SAP BRIM Architecture & Deployments
  - Cloud & Enterprise Infrastructure Services
  - Data Science & Advanced Analytics
  - Enterprise ERP Solutions & Managed Support
- **Mobile First & Zero-Defect Layouts:** Rigorously tested responsive layouts with zero text clipping, optimized hit areas, and touch-friendly controls.
- **Automated Verification:** Comprehensive unit and integration test suite via Vitest and Testing Library.

---

## 🛠️ Tech Stack

- **Framework:** React 19 (Hooks, Suspense, Modular Components)
- **Tooling & Bundler:** Vite 6 with ultra-fast Hot Module Replacement (HMR)
- **Type Safety:** TypeScript 5.7 (Strict mode enabled)
- **Styling:** Tailwind CSS 3.4 with custom enterprise tokens and responsive utilities
- **Icons & Graphics:** Lucide React, Three.js 3D capabilities
- **Testing:** Vitest 5.0 with `@testing-library/react` and jsdom

---

## 🚀 Getting Started

### Prerequisites

- **Node.js:** v18.0.0 or higher
- **npm:** v9.0.0 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/Srinija012/clyptus-website.git

# Navigate into the project directory
cd clyptus-website

# Install dependencies
npm install
```

### Development Server

Start the local development server with instant HMR:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🧪 Verification & Testing

Every commit and release is gated through automated checks:

```bash
# Run TypeScript typecheck (0 errors required)
npm run typecheck

# Run automated test suite
npm run test

# Production build
npm run build
```

---

## 📂 Project Structure

```
clyptus-web/
├── public/                 # Static assets, logos, and favicons
├── src/
│   ├── components/         # Reusable UI components & section views
│   │   └── ui/             # Core UI elements (Bento grid, showcases, modals)
│   ├── test/               # Vitest automated test suites
│   ├── App.tsx             # Main application orchestrator & router
│   ├── index.css           # Global Tailwind directives & custom CSS
│   └── main.tsx            # React application entrypoint
├── scripts/                # Deployment and verification automation scripts
├── tailwind.config.js      # Enterprise design tokens & theme configuration
├── tsconfig.json           # TypeScript compilation configuration
└── vite.config.ts          # Vite bundler & plugin configuration
```

---

## 📄 License

Proprietary & Confidential — All rights reserved by Clyptus IT Software Solutions.
