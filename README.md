# The Appedemic

The Appedemic is a monorerpo structured next.js web app that houses the web app  production showcase of drjforrest.com.

**🏗 Project Structure Overview**

```
new-apps/  # Root of your monorepo  
├── apps/  # Contains multiple Next.js applications  
│   ├── citation-mgr/  # A Next.js app for managing citations  
│   ├── flag-quiz/  # A Next.js app for a flag quiz game  
│   ├── web/  # Your main Next.js web application  
├── packages/  # Contains shared code used across apps  
│   ├── ui/  # Reusable UI components and shared styles  
│   ├── citation-mgr/  # Logic related to citation management  
│   ├── flag-quiz/  # Shared logic related to flag quizzes  
│   ├── config/  # Shared configuration files (Tailwind, Next.js, etc.)  
│   ├── utils/  # Common helper functions  
├── node_modules/  # Installed dependencies  
├── package.json  # Monorepo dependencies and workspace setup  
├── tsconfig.json  # TypeScript configuration  
└── README.md  # Documentation for your project  
```

**🔥 Key Features of This Setup**

1. **Monorepo Structure** – Uses a single repository to manage multiple apps (apps/) and shared packages (packages/).
2. **Next.js App Router** – Each app inside apps/ follows the **Next.js 14+** App Router (app/ directory).
3. **Shared UI Components & Styles** – Located in packages/ui/, avoiding code duplication.
4. **Centralized Configurations** – packages/config/ holds Tailwind, ESLint, and other shared configurations.
5. **Reusable Logic** – packages/citation-mgr/ and packages/flag-quiz/ contain app-specific logic that can be imported across apps.
6. **Efficient Dependency Management** – Likely using **pnpm workspaces** or **Turborepo** for fast builds and dependency sharing.

**🚀 Why This Structure is Great?**

✅ **Scalable** – Easily add more apps without duplication.

✅ **Maintainable** – Shared code lives in packages/, reducing redundancy.

✅ **Optimized for Next.js** – Follows best practices for App Router and modular architecture.

✅ **Performance Boost** – Centralized configs and shared dependencies improve development speed.

## Getting Started

First, run the development server:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
