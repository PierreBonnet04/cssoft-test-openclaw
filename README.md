# CSSOFT - Crypto Portfolio Management Platform

A modern, full-stack crypto management platform built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- **Dashboard**: Overview of wallets, gains, and trending coins
- **Wallet Management**: Cold wallet, hot wallet, and funding wallet management
- **Transaction History**: Comprehensive transaction tracking
- **Affiliate Program**: Referral system with commissions and revenue tracking
- **Dark Theme**: Professional dark UI optimized for crypto trading

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 3
- **State Management**: React Context + Hooks
- **API Client**: Custom fetch-based HTTP client
- **Authentication**: Token-based (JWT)

## Project Structure

```
src/
├── app/                 # Next.js app directory
├── components/          # React components
│   ├── layout/         # Layout components (Sidebar, Header)
│   ├── pages/          # Page components
│   ├── ui/             # UI components
│   └── modals/         # Modal components
├── types/              # TypeScript interfaces
├── api/                # API client and services
├── hooks/              # Custom React hooks
├── context/            # React Context providers
├── utils/              # Utilities (formatters, validators)
├── constants/          # App constants
├── styles/             # Global styles
└── middleware.ts       # Next.js middleware
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/PierreBonnet04/cssoft-test-openclaw.git
cd cssoft-test-openclaw
```

2. Install dependencies
```bash
npm install
```

3. Setup environment variables
```bash
cp .env.example .env.local
# Edit .env.local with your configuration
```

4. Start development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## API Integration

The app uses a custom API client in `src/api/client.ts`. Services are organized in `src/api/services.ts`:

```typescript
import { walletService, transactionService, affiliateService } from '@/api/services'

// Fetch wallets
const response = await walletService.getWallets()
```

## Authentication

Authentication is handled via token-based system. Tokens are stored in localStorage and sent in Authorization headers.

```typescript
import { useAuth } from '@/hooks'

const { user, isAuthenticated, login, logout } = useAuth()
```

## State Management

Uses React Context for global state:

- **AuthContext**: User authentication state
- **UiContext**: UI state (modals, toasts, etc.)

```typescript
import { useAuthContext, useUiContext } from '@/context'

const { user, isAuthenticated } = useAuthContext()
const { toasts, addToast } = useUiContext()
```

## Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit changes (`git commit -m 'Add amazing feature'`)
3. Push to branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## License

MIT License - see LICENSE file for details

## Support

For support, email support@cssoft.io or open an issue on GitHub.
