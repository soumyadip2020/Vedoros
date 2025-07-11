# Replit.md

## Overview

VEDOROS is a 3D interactive web application showcasing divine relics from ancient civilizations. The application features an interactive Earth globe with hotspots representing different regions, each containing unique historical artifacts and cultural treasures. Users can explore civilizations like Ancient Egypt, Greece, India, Japan, and Rome through an immersive 3D experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

This is a full-stack web application built with a **monorepo structure** featuring:

- **Frontend**: React + TypeScript with Three.js for 3D rendering
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Build System**: Vite for frontend bundling and esbuild for server compilation
- **Styling**: TailwindCSS with Radix UI components
- **3D Graphics**: React Three Fiber ecosystem (@react-three/fiber, @react-three/drei, @react-three/postprocessing)

## Key Components

### Frontend Architecture
- **3D Scene Management**: Canvas-based rendering with OrbitControls for user interaction
- **Component Structure**:
  - `EarthGlobe`: Main 3D Earth representation with procedural textures
  - `RegionHotspot`: Interactive markers for different civilizations
  - `ParticleSystem`: Ambient space particles for atmosphere
  - `Header`: Navigation with VEDOROS branding
  - `RegionTooltip`: Interactive hover information displays
- **State Management**: Custom hooks for Earth interactions and Zustand stores for game state and audio
- **UI Framework**: Comprehensive Radix UI component library with custom theming

### Backend Architecture
- **Express.js Server**: RESTful API structure with middleware for logging and error handling
- **Storage Interface**: Abstracted storage layer with in-memory implementation (ready for database integration)
- **Development Setup**: Vite integration for hot module replacement and development middleware

### Database Schema
- **Users Table**: Basic user management with username/password authentication
- **Drizzle ORM**: Type-safe database operations with PostgreSQL dialect
- **Migration System**: Automated database schema management

## Data Flow

1. **Client Initialization**: React app loads with 3D scene setup
2. **Region Data**: Static region data defines civilization hotspots with coordinates
3. **User Interactions**: Mouse hover/click events on 3D hotspots trigger state updates
4. **API Communication**: Prepared for REST API calls to backend services
5. **Real-time Updates**: React state management handles UI updates and 3D scene changes

## External Dependencies

### Core Technologies
- **@neondatabase/serverless**: Database connection (Neon PostgreSQL)
- **React Three Fiber Ecosystem**: 3D rendering and post-processing
- **Radix UI**: Comprehensive component library
- **TanStack Query**: Data fetching and caching
- **Drizzle**: Type-safe ORM with PostgreSQL support

### Development Tools
- **Vite**: Fast development server and build tool
- **TypeScript**: Type safety across frontend and backend
- **TailwindCSS**: Utility-first styling
- **ESBuild**: Fast backend compilation

### 3D and Media Support
- **GLSL Support**: Custom shader integration via vite-plugin-glsl
- **Asset Types**: Support for 3D models (.gltf, .glb) and audio files

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds React app to `dist/public`
- **Backend**: ESBuild compiles server code to `dist/index.js`
- **Database**: Drizzle migrations handle schema updates

### Environment Configuration
- **Database URL**: Required environment variable for PostgreSQL connection
- **Development**: Hot reload with Vite middleware integration
- **Production**: Node.js server serving static assets and API routes

### Key Scripts
- `npm run dev`: Development server with hot reload
- `npm run build`: Production build for both frontend and backend
- `npm run start`: Production server startup
- `npm run db:push`: Database schema deployment

The application is designed as a cultural education platform with potential for e-commerce integration (shopping cart functionality is present in the UI). The 3D interactive experience makes ancient civilizations accessible through modern web technology.