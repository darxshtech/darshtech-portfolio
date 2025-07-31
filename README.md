# Darsh Tech - Personal Portfolio

![Darsh Tech Portfolio](public/og.webp)

A modern, responsive, and interactive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. This portfolio showcases my projects, skills, and experience in an engaging and visually appealing way.

## 🚀 Features

- **Modern UI/UX** with smooth animations and transitions
- **Responsive Design** that works on all devices
- **Interactive Resume Download** with crosshair animation
- **SEO Optimized** with Next.js metadata and OpenGraph
- **Performance Optimized** for fast loading
- **Secure** with Content Security Policy and security headers
- **Dark Mode** by default with elegant design

## 🛠️ Tech Stack

- **Framework**: [Next.js 13+](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: Custom components with [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Analytics**: Built-in Next.js Analytics
- **Deployment**: [Vercel](https://vercel.com/)
- **Package Manager**: npm

## 📂 Project Structure

```
.
├── app/                    # App Router
│   ├── about/              # About page
│   ├── projects/           # Projects page
│   ├── resume/             # Resume download page
│   ├── components/         # Reusable components
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── public/                 # Static files
│   ├── fonts/              # Custom fonts
│   └── images/             # Images and assets
├── styles/                 # Global styles
├── next.config.js          # Next.js config
├── package.json            # Dependencies
└── tsconfig.json           # TypeScript config
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/darshtech-portfolio.git
   cd darshtech-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory and add your environment variables:
   ```env
   NEXT_PUBLIC_SITE_URL=https://darshtech.com
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔧 Building for Production

1. Build the application:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

## 🛡️ Security

This project includes several security measures:

- **Content Security Policy (CSP)** to prevent XSS attacks
- **HTTP Strict Transport Security (HSTS)** to enforce HTTPS
- **X-Content-Type-Options** to prevent MIME sniffing
- **X-Frame-Options** to prevent clickjacking
- **X-XSS-Protection** for additional XSS protection
- **Secure Headers** for enhanced security

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)
- [Framer Motion Documentation](https://www.framer.com/motion/)

## 📬 Contact

- **Website**: [darshtech.com](https://darshtech.com)
- **GitHub**: [@yourusername](https://github.com/yourusername)
- **Twitter**: [@yourhandle](https://twitter.com/yourhandle)
- **Email**: your.email@example.com
