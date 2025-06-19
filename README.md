# ManagedV Website

[![Windsurf](https://img.shields.io/badge/Built%20with-Windsurf-0066CC.svg?style=flat)](https://codeium.com/windsurf)
[![Next.js](https://img.shields.io/badge/Next.js-14.2.30-black?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer-11.0-0055FF?style=flat&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-Proprietary-red?style=flat)](LICENSE)
[![ManagedV](https://img.shields.io/badge/By-ManagedV-4DFFD2.svg?style=flat)](https://www.managedv.com)

> Building AI-First Ventures - Turning visionary AI concepts into market-changing realities

## Features

- **Lightning Fast**: Built with Next.js 13.5 for optimal performance
- **Modern Design**: Sleek UI powered by Tailwind CSS
- **Smooth Animations**: Enhanced user experience with Framer Motion
- **Fully Responsive**: Perfect display on all devices
- **Type-Safe**: Written in TypeScript for reliability
- **SEO Optimized**: Built-in SEO best practices

## Quick Start

```bash
# Clone the repository
git clone git@github.com:jackccrawford/mvllc-new.git

# Navigate to the project
cd mvllc-new

# Install dependencies
npm install

# Start development server
npm run dev
```

The development server will start on `http://localhost:3090`

## 🛠 Tech Stack

- **Framework**: [Next.js 14.2.30](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **UI Components**: Custom components with Shadcn/ui
- **Development**:
  - ESLint for linting
  - Prettier for code formatting
  - PostCSS for CSS processing

## Project Structure

```
mvllc-new/
├── app/                   # Next.js 14 app directory
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page with ManagedV content
├── components/           # React components
│   └── ui/              # UI components (Shadcn/ui)
├── public/              # Static assets
│   └── images/          # Image files including mVara logos
├── styles/              # Global styles
└── lib/                 # Utility functions
```

## Configuration

The project uses several configuration files:

- `next.config.mjs` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `postcss.config.mjs` - PostCSS configuration
- `tsconfig.json` - TypeScript configuration

## Deployment

The site is configured for deployment on Netlify:

```bash
# Build for production
npm run build

# Deploy to Netlify using Netlify CLI
npm install -g netlify-cli  # Install Netlify CLI if not already installed
netlify login             # Login to your Netlify account
netlify init              # Initialize a new Netlify site
netlify deploy --prod     # Deploy to production
```

Alternatively, you can connect your GitHub repository to Netlify for automatic deployments on push.

## License

This project is proprietary. Copyright © 2025 Managed Ventures LLC. All rights reserved. See the [LICENSE](LICENSE) file for details.

## Mobile-First Design

The site is optimized for all devices with special attention to mobile responsiveness:
- Responsive typography and layout
- Touch-friendly navigation
- Optimized button sizing and spacing
- Properly spaced sections for mobile viewing


## SEO Optimization

Built with comprehensive SEO best practices:
- Rich meta descriptions and Open Graph tags
- Semantic HTML structure
- Optimized content with relevant keywords
- Dynamic sitemap generation
- Mobile performance optimization


<p align="center">
  <i>Copyright 2025 Managed Ventures LLC.</i><br>
  <i>Scottsdale, AZ, USA</i>
</p>
