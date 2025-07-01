# Elina

A modern, full-featured e-commerce and product showcase web application built with Next.js, React, and Tailwind CSS. Elina provides a beautiful, responsive UI for product browsing, wishlists, shopping carts, and quote requests, with dark mode support and a modular component architecture.

---

## Features

- **Modern UI**: Responsive design with glassmorphism, dark/light themes, and animated UI elements.
- **Product Catalog**: Browse products by category, with filtering and search.
- **Wishlist**: Add products to a wishlist, with modal management.
- **Shopping Cart**: Add/remove products, view cart modal, and proceed to checkout.
- **Quote Requests**: Request custom quotes via modal forms.
- **Gallery**: Image gallery with lightbox support.
- **Theming**: Toggle between dark and light modes.
- **Mobile Support**: Optimized navigation and actions for mobile devices.
- **Reusable Components**: Built with a large set of modular, accessible UI components.
- **State Management**: Uses React context for cart, wishlist, and modal state.
- **SEO & Performance**: Next.js best practices, optimized images, and fast loading.

---

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **UI**: [React](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State Management**: React Context API
- **Forms**: [React Hook Form](https://react-hook-form.com/), [Zod](https://zod.dev/)
- **Other**: [Next Themes](https://github.com/pacocoursey/next-themes), [Sonner](https://sonner.emilkowal.ski/) for toasts

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- pnpm (or npm/yarn)

### Installation

\`\`\`bash
git clone https://github.com/axelgear/elina.git
cd elina
pnpm install
# or
npm install
# or
yarn install
\`\`\`

### Development

\`\`\`bash
pnpm dev
# or
npm run dev
# or
yarn dev
\`\`\`

Visit [http://localhost:3000](http://localhost:3000) to view the app.

### Production

\`\`\`bash
pnpm build
pnpm start
\`\`\`

---

## Project Structure

\`\`\`
.
├── app/                # Next.js app directory (pages, layouts, routes)
├── components/         # React components (UI, modals, header, footer, etc.)
│   └── ui/             # UI primitives (Button, Card, Modal, etc.)
├── context/            # React context providers (cart, quote modal, etc.)
├── hooks/              # Custom React hooks
├── lib/                # Utilities and data
├── public/             # Static assets (images, logos, etc.)
│   └── images/         # Product, gallery, and logo images
├── styles/             # Global and component styles
├── package.json        # Project metadata and dependencies
├── tailwind.config.ts  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── README.md           # This file
\`\`\`

---

## Key Components

- **Header & Footer**: Navigation, theme toggle, cart/wishlist/search modals.
- **CartModal, WishlistModal, QuoteModal**: Modal dialogs for cart, wishlist, and quote requests.
- **Product Cards**: Modern and classic product card components.
- **Gallery**: Lightbox-enabled image gallery.
- **UI Primitives**: Buttons, dropdowns, dialogs, forms, etc. in `components/ui/`.

---

## Configuration

- **Tailwind CSS**: See `tailwind.config.ts` for theme and animation customizations.
- **Next.js**: See `next.config.mjs` for build and image settings.
- **TypeScript**: Strict mode enabled, with path aliases (`@/*`).

---

## Assets

- Logos and images are in `public/images/`.
- Placeholder images are in `public/`.

---

## Scripts

- `dev`: Start development server
- `build`: Build for production
- `start`: Start production server
- `lint`: Run ESLint

---

## Contributing

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

---

## License

[MIT](LICENSE) (add your license file if not present)

---

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Lucide Icons](https://lucide.dev/)
- [React Hook Form](https://react-hook-form.com/)

---
