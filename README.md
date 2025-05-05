# Memory Game

A modern, responsive Memory Game built with React, TypeScript, and Tailwind CSS.

<img width="1425" alt="Screenshot 2025-05-05 at 18 47 00" src="https://github.com/user-attachments/assets/cbd4df4f-3fbb-4f07-b721-aeeeb6ab2d02" />
<img width="1425" alt="Screenshot 2025-05-05 at 18 47 37" src="https://github.com/user-attachments/assets/a395a9bf-f372-4d2e-9f10-61c3372de2b5" />
<img width="1425" alt="Screenshot 2025-05-05 at 18 49 02" src="https://github.com/user-attachments/assets/37b3161a-8bc2-4006-9983-8ab5fbc97993" />

## Features

- 🎮 Classic Memory Game gameplay with smooth animations
- 🎨 Modern and responsive UI with Tailwind CSS
- ⚡ Built with React 19 and TypeScript
- 🎨 Styled with Tailwind CSS 4 and utility-first approach
- 🚀 Optimized for performance with Vite 6
- 📱 Mobile-friendly design
- 🎯 Accessibility features with ESLint JSX A11y
- 🛠️ Comprehensive development tools (ESLint, Prettier, TypeScript)

## Tech Stack

- [React 19](https://react.dev/) - A JavaScript library for building user interfaces
- [TypeScript 5.7](https://www.typescriptlang.org/) - Typed JavaScript
- [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS framework
- [Vite 6](https://vitejs.dev/) - Next Generation Frontend Tooling
- [ESLint 9](https://eslint.org/) - Code linting with React and accessibility plugins
- [Prettier 3](https://prettier.io/) - Code formatting with Tailwind CSS plugin
- [Motion](https://motion.dev/) - Animation library
- [Lucide React](https://lucide.dev/) - Beautiful icons
- [clsx](https://github.com/lukeed/clsx) & [tailwind-merge](https://github.com/dcastil/tailwind-merge) - Utility for managing class names

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/igortullio/memory-game.git
   cd memory-game
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Available Scripts

- `pnpm dev` - Start the development server with hot reload
- `pnpm build` - Build the project for production with TypeScript compilation
- `pnpm preview` - Preview the production build locally
- `pnpm lint` - Run ESLint to check code quality and accessibility

## Project Structure

```
memory-game/
├── src/
│   ├── components/    # React components
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utility functions and shared logic
│   ├── constants.ts   # Application constants
│   ├── types.ts       # TypeScript type definitions
│   ├── App.tsx        # Main application component
│   ├── main.tsx       # Application entry point
│   └── index.css      # Global styles
├── public/            # Static assets
├── index.html         # HTML entry point
├── vite.config.ts     # Vite configuration
├── tsconfig.json      # TypeScript configuration
├── eslint.config.js   # ESLint configuration
└── package.json       # Project dependencies and scripts
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
