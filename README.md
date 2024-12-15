# MorTru - Discover the True Value of Real Estate

MorTru is a cutting-edge real estate search application that provides accurate, transparent, and comprehensive property data to help users make informed decisions. Our platform combines advanced search functionality, real-time market insights, and verified property information to deliver an unparalleled user experience in the real estate market.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Architecture](#architecture)
- [Integrations](#integrations)
- [Component Library](#component-library)
- [API Documentation](#api-documentation)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Features

- Comprehensive property listings with detailed information
- Real-time market insights and trends analysis
- Advanced search functionality with map and list views
- Verified property information to ensure data accuracy
- Responsive design for seamless use across devices
- User-friendly interface with intuitive navigation
- Customizable property alerts and saved searches
- Interactive neighborhood data and statistics
- Integration with third-party services for additional property insights

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v18 or later)
- npm (v8 or later) or Yarn (v1.22 or later)
- Git

### Installation

1. Clone the repository:

<code>
git clone https://github.com/yourusername/mortru.git
cd mortru
</code>

2. Install the dependencies:

<code>
npm install
</code>
or if you're using Yarn:
<code>
yarn install
</code>

3. Set up environment variables:

Copy the `.env.example` file to `.env.local` and fill in the required values:

<code>
cp .env.example .env.local
</code>

4. Start the development server:

<code>
npm run dev
</code>
or with Yarn:
<code>
yarn dev
</code>

The application should now be running on [http://localhost:3000](http://localhost:3000).

## Project Structure

<code>
mortru/
├── app/
│   ├── api/
│   │   └── properties/
│   │       └── route.ts
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   └── textarea.tsx
│   │   ├── CTA.tsx
│   │   ├── FAQ.tsx
│   │   ├── Features.tsx
│   │   ├── Hero.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── LogoNav.tsx
│   │   ├── SearchDemo.tsx
│   │   ├── Section.tsx
│   │   ├── Testimonials.tsx
│   │   └── ThemeSwitcher.tsx
│   ├── connect/
│   │   └── page.tsx
│   ├── homeowner/
│   │   └── page.tsx
│   ├── mortgage-company/
│   │   └── page.tsx
│   ├── real-estate-agent/
│   │   └── page.tsx
│   ├── utils/
│   │   └── propertyUtils.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   ├── images/
│   └── favicon.ico
├── .env.example
├── .eslintrc.json
├── .gitignore
├── next.config.js
├── package.json
├── README.md
├── tailwind.config.js
└── tsconfig.json
</code>

### Key Files and Directories

- `app/`: Contains the main application code, including pages, components, and API routes.
- `app/api/`: Houses API routes for server-side functionality.
- `app/components/`: Contains reusable React components.
- `app/components/ui/`: Houses UI components from the component library.
- `app/utils/`: Contains utility functions used throughout the application.
- `app/globals.css`: Global CSS styles, including Tailwind CSS imports.
- `app/layout.tsx`: The root layout component for the entire application.
- `public/`: Static assets like images and favicon.
- `tailwind.config.js`: Configuration file for Tailwind CSS.
- `next.config.js`: Configuration file for Next.js.

## Architecture

MorTru follows a modern web application architecture using Next.js 13+ with the App Router. Here's an overview of the key architectural components:

1. **Frontend**: React with Next.js for server-side rendering and static site generation.
2. **Styling**: Tailwind CSS for utility-first styling and responsive design.
3. **State Management**: React Hooks for local state, Context API for global state when necessary.
4. **Routing**: Next.js App Router for file-based routing and nested layouts.
5. **API**: Next.js API Routes for serverless backend functionality.
6. **Authentication**: (To be implemented) NextAuth.js for secure user authentication.
7. **Database**: (To be implemented) Prisma ORM with a PostgreSQL database.
8. **Deployment**: Vercel for seamless deployment and hosting.

## Integrations

MorTru integrates with several third-party services and APIs to enhance its functionality:

1. **Mapping Service**: (To be implemented) Integration with Mapbox for interactive property maps.
2. **Property Data**: (To be implemented) Integration with a real estate data provider API for comprehensive property information.
3. **Analytics**: (To be implemented) Google Analytics for user behavior tracking and site performance monitoring.
4. **Email Service**: (To be implemented) SendGrid for transactional emails and property alerts.
5. **Payment Processing**: (To be implemented) Stripe for handling premium subscriptions and services.

## Component Library

MorTru uses a custom component library built with Radix UI primitives and styled with Tailwind CSS. Key components include:

- `Button`: Customizable button component with various styles and sizes.
- `Input`: Text input component with support for different states and variations.
- `Label`: Accessible label component for form inputs.
- `Textarea`: Multi-line text input component.
- `ThemeSwitcher`: Component for toggling between light, dark, and system color schemes.

For detailed usage and props, refer to the individual component files in the `app/components/ui/` directory.

## API Documentation

MorTru's API is built using Next.js API Routes. The main endpoints include:

1. `GET /api/properties`: Fetches a list of properties with optional filtering and pagination.

   Query Parameters:
   - `page` (number): Page number for pagination (default: 1)
   - `limit` (number): Number of items per page (default: 10)

   Response:
   <code>
   {
     properties: Array<Property>,
     currentPage: number,
     totalPages: number
   }
   </code>

   Where `Property` is defined as:
   <code>
   interface Property {
     id: number;
     address: string;
     price: number;
     bedrooms: number;
     bathrooms: number;
     sqft: number;
   }
   </code>

For more detailed API documentation, including request/response formats and authentication, please refer to our [API Documentation](docs/API.md) file.

## Testing

MorTru uses Jest and React Testing Library for unit and integration testing. To run the tests:

<code>
npm run test
</code>

For more information on our testing strategy and how to write tests, see our [Testing Guide](docs/TESTING.md).

## Deployment

MorTru is set up for easy deployment on Vercel. For detailed deployment instructions and best practices, refer to our [Deployment Guide](docs/DEPLOYMENT.md).

## Contributing

We welcome contributions to the MorTru project! Please read our [Contributing Guidelines](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Thanks to all the open-source projects that made this application possible
- Inspiration from leading real estate platforms and their innovative features
- Our dedicated team of developers, designers, and real estate experts
- The vibrant Next.js and React communities for their continuous support and inspiration

For any questions or support, please contact us at support@mortru.com or visit our [Support Center](https://www.mortru.com/support).

