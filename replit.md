# MIRA Intelligence - AI Agents for Mental Health Clinics

## Overview

MIRA Intelligence is a modern web application that provides AI-powered conversational agents for mental health clinics in Australia. The platform automates patient triage, booking, and follow-up across Web, Instagram, and Facebook Messenger channels. This is a full-stack TypeScript application built with React frontend and Express backend, featuring a PostgreSQL database for data persistence.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system and color variables
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database (PostgreSQL-compatible serverless)
- **Validation**: Zod schemas for request/response validation
- **Session Management**: Built-in memory storage with interface for future PostgreSQL sessions

### Database Schema
- **Users Table**: Basic user authentication (id, username, password)
- **Contact Submissions Table**: Stores contact form submissions with timestamp
- **Schema Location**: `/shared/schema.ts` for shared types between client and server

## Key Components

### Data Layer
- **Drizzle ORM**: Provides type-safe database queries and migrations
- **Shared Schema**: Common TypeScript types and Zod validators between frontend and backend
- **Storage Interface**: Abstracted storage layer supporting both memory and database implementations

### API Layer
- **RESTful Endpoints**: `/api/contact` for form submissions
- **Error Handling**: Centralized error handling with proper HTTP status codes
- **Request Logging**: Automatic API request/response logging with timing

### Frontend Components
- **Landing Page Sections**: Hero, Services, Benefits, How It Works, Pricing, Testimonials, Contact, Footer
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Component Library**: Comprehensive UI components from shadcn/ui
- **Form Components**: Contact form with real-time validation and submission

## Data Flow

1. **User Interaction**: Users interact with the landing page sections
2. **Contact Form**: Form submissions are validated client-side with Zod
3. **API Request**: TanStack Query manages API calls to `/api/contact`
4. **Server Processing**: Express server validates and stores contact submissions
5. **Database Storage**: Drizzle ORM handles database operations
6. **Response Handling**: Success/error states are managed and displayed via toast notifications

## External Dependencies

### Production Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **@tanstack/react-query**: Server state management and caching
- **@radix-ui/***: Accessible UI component primitives
- **drizzle-orm**: Type-safe SQL query builder
- **express**: Web application framework
- **zod**: TypeScript-first schema declaration and validation
- **tailwindcss**: Utility-first CSS framework
- **react-hook-form**: Performant forms with validation

### Development Dependencies
- **vite**: Build tool and development server
- **typescript**: Static type checking
- **@replit/vite-plugin-***: Replit-specific development plugins
- **drizzle-kit**: Database migration tool

## Deployment Strategy

### Development Environment
- **Platform**: Replit with Node.js 20, Web, and PostgreSQL 16 modules
- **Development Server**: Vite dev server on port 5000 with HMR
- **Database**: Neon Database with environment-based configuration
- **Hot Reload**: Full-stack hot reload with Vite middleware integration

### Production Build
- **Frontend Build**: Vite builds React app to `dist/public`
- **Backend Build**: esbuild bundles Express server to `dist/index.js`
- **Static Assets**: Express serves built frontend files in production
- **Database Migrations**: Drizzle Kit handles schema migrations

### Replit Configuration
- **Autoscale Deployment**: Configured for automatic scaling
- **Port Configuration**: External port 80 maps to internal port 5000
- **Environment Variables**: DATABASE_URL for Neon Database connection
- **Build Commands**: Automated build process for production deployment

## Changelog

```
Changelog:
- June 26, 2025: Initial setup with complete landing page
- June 26, 2025: Updated color palette to MIRA brand colors (Blue #4F7CAC, Gray #F5F7FA, White #FFFFFF, Green #A3C9A8, Deep Blue #273043, Soft Yellow #FCD581)
- June 26, 2025: Changed company name from MIRA INTELLIGENCE to COGNUS and updated 94% statistics bubble to green background (#A3C9A8)
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```