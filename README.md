# Nelly-Food-Products
A website requested by client Nerf

I'll explain the structure and component relationships in this Next.js application.

1. Root Layout (app/layout.tsx)

- This is the main layout wrapper for all pages
- Includes:
    - ThemeProvider for dark/light mode
    - Navbar (persistent navigation)
    - Main content area
    - Footer (persistent footer)
- All pages are rendered inside this layout

2. Page Structure
app/
├── layout.tsx          # Root layout (wraps all pages)
├── page.tsx            # Homepage
├── about/
│   └── page.tsx       # About page
├── contact/
│   └── page.tsx       # Contact page
├── login/
│   └── page.tsx       # Login page
├── register/
│   └── page.tsx       # Registration page
├── dashboard/
│   └── page.tsx       # Admin dashboard
├── user-dashboard/
│   └── page.tsx       # User dashboard
└── products/
    ├── page.tsx       # Products listing
    └── sample/
        └── page.tsx   # Sample product details

3. Component Organization
components/
├── navbar.tsx         # Navigation bar component
├── footer.tsx         # Footer component
├── theme-provider.tsx # Theme context provider
└── ui/               # Reusable UI components (shadcn/ui)
    ├── button.tsx
    ├── input.tsx
    └── ...

4. Authentication Flow
- Login page handles authentication
- Uses localStorage to store:
    - isAuthenticated: Login status
    - userType: "admin" or "user"
    - userEmail: User's email

5. Layout (app/layout.tsx)
├── ThemeProvider
├── Navbar
│   └── Navigation Links (conditional based on auth)
├── Page Content (varies by route)
│   ├── Home (/)
│   ├── Products (/products)
│   ├── Product Details (/products/sample)
│   ├── Admin Dashboard (/dashboard)
│   └── User Dashboard (/user-dashboard)
└── Footer

6. Key Features
- Client-side navigation using Next.js's Link component
- Protected routes (dashboard pages)
- Responsive design using Tailwind CSS
- UI components from shadcn/ui library
- Icons from lucide-react
- Theme switching capability

7. State Management
- Uses React's useState for local component state
- Authentication state managed via localStorage
- No global state management (Redux/Context) implemented yet


This structure follows Next.js 13+ conventions with the App Router, where each page is a React component in a page.tsx file within its respective directory.