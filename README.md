# SHC App - Symptom-Based Health Coaching

A modern, mobile-first web application for symptom-based health coaching built with Vite, React, React Router, and Tailwind CSS.

## Features

- Dark theme with green accent color inspired by the original iOS app
- Mobile-first responsive design (iPhone-friendly)
- Bottom navigation bar for easy navigation
- Modular component structure
- Section-based content organization
- Smooth page transitions and animations
- Safe area padding for notched devices

## Tech Stack

- **React** 18.3.1 - UI library
- **React Router DOM** 6.26.2 - Client-side routing
- **Vite** 5.4.8 - Build tool and dev server
- **Tailwind CSS** 3.4.13 - Utility-first CSS framework
- **PostCSS** 8.4.47 - CSS transformation
- **Autoprefixer** 10.4.20 - Browser compatibility

## Color Palette

- Dark background: `#212122`
- Card background: `#1B1B1D`
- Primary green: `#00B03C`
- Green hover: `#00CC45`
- Text: `#FFFFFF`
- Muted text: `#9CA3AF`
- Border: `#2D2D2F`

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Layout.jsx      # Main layout wrapper
│   ├── NavigationBar.jsx # Bottom navigation
│   ├── MenuButton.jsx   # Menu buttons
│   ├── ContentBlock.jsx  # Content sections
│   ├── QuestionCard.jsx  # Question components
│   ├── SectionHeader.jsx # Section headers
│   └── ...
├── hooks/               # Custom React hooks
│   └── useScrollToTop.js # Scroll behavior
├── pages/               # Page components
│   ├── HomePage.jsx    # Home/launcher
│   ├── DisclaimerPage.jsx
│   ├── fatigue/        # Fatigue section
│   ├── sleep/          # Sleep section
│   └── ...             # Other health coaching sections
├── App.jsx             # Main app with routing
├── main.jsx            # Entry point
└── index.css           # Global styles

```

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

```bash
cd shc-app
npm install
```

### Development

```bash
npm run dev
```

The app will open in your browser at `http://localhost:5173`.

### Build

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Preview Build

```bash
npm run preview
```

## Deployment

This app is configured for deployment on Vercel. The `vercel.json` file includes SPA rewrites to handle client-side routing.

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## Available Routes

- `/` - Home page with section launcher
- `/disclaimer` - Legal disclaimer
- `/fatigue/*` - Fatigue coaching section
- `/sleep/*` - Sleep coaching section
- `/mood/*` - Mood coaching section
- `/skin/*` - Skin health section
- `/headaches/*` - Headache management section
- `/body-pain/*` - Body pain section
- `/male-hormones/*` - Male hormone support
- `/female-hormones/*` - Female hormone support
- `/digestion/*` - Digestion support
- `/immune/*` - Immune system support
- `/landing/:pageId` - Shared landing pages

## Components

### MenuButton
Styled button for section navigation with optional emoji icon.

### ContentBlock
Display content sections with optional type styling (overview, lifestyle, supplements).

### QuestionCard
Interactive card for asking yes/no or multiple choice questions.

### SupplementCard
Card component for displaying supplement information.

### SectionHeader
Animated header for section introductions.

### NavigationBar
Fixed bottom navigation with section title and home button.

### Layout
Main wrapper providing layout structure and navigation integration.

## Styling

The app uses Tailwind CSS with custom color variables defined in `src/index.css`. Custom utility classes are available:

- `.btn-primary` - Green button style
- `.btn-secondary` - Secondary button style
- `.card` - Card component style
- `.text-shc` - Primary text color
- `.text-muted` - Muted text color

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile Safari on iOS 14+

## License

Proprietary - Symptom-Based Health Coaching
