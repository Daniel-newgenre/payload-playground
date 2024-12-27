New Genre Next.js Template
This is the official New Genre Next.js Template, a modern and extensible starting point for future projects at New Genre. It includes a thoughtfully curated stack of tools and best practices to accelerate project development while maintaining flexibility for customization.

Technologies Used
Next.js: The React framework for building performant web applications with server-side rendering and static site generation.
Payload CMS: A powerful headless CMS for managing dynamic content.
Tailwind CSS: A utility-first CSS framework for rapid UI development.
shadcn/ui: A set of accessible and customizable UI components for building consistent user interfaces.
Features
Modular and Scalable Architecture: A structure that promotes reusability, maintainability, and scalability.
Integration with Payload CMS: Seamless connection to manage and fetch dynamic content.
Tailwind CSS: Pre-configured for consistent styling and responsive design.
ShadCN Components: Pre-installed UI components for rapid development.
Future-Ready: Built with extensibility in mind, making it easy to add tools and features as required.
Getting Started
Follow these steps to get the project up and running:

Prerequisites
Make sure you have the following installed:

Node.js (v18 or later)
pnpm (preferred package manager)
Docker (for Payload CMS, if applicable)
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/newgenre/nextjs-template.git
cd nextjs-template
Install dependencies:

bash
Copy code
pnpm install
Set up environment variables:

Create a .env.local file in the root directory and populate it with the required variables. Example:

bash
Copy code
NEXT_PUBLIC_API_URL=https://your-payload-api-url.com
PAYLOAD_SECRET=your-secret-key
Run the development server:

bash
Copy code
pnpm dev
Open http://localhost:3000 in your browser to see the application.

Payload CMS Setup
If using Docker for Payload CMS:

Start the Payload CMS container:

bash
Copy code
docker-compose up -d
Access the Payload CMS admin panel at http://localhost:3001/admin.

Building for Production
To create a production build:

Build the application:

bash
Copy code
pnpm build
Start the production server:

bash
Copy code
pnpm start
Project Structure
plaintext
Copy code
├── public/          # Static assets
├── src/
│   ├── components/  # Reusable components
│   ├── pages/       # Next.js pages
│   ├── styles/      # Global and Tailwind CSS styles
│   ├── lib/         # Utility functions and libraries
│   ├── cms/         # Payload CMS configurations
│   └── ui/          # ShadCN components and custom UI elements
└── docker-compose.yml # Docker setup for Payload CMS
Adding Tools in the Future
As this template evolves, you can extend its capabilities by adding tools such as:

Analytics: Google Analytics, Plausible, or similar.
Testing: Jest, Playwright, or Cypress for unit and end-to-end testing.
Performance Optimization: Tools like @next/bundle-analyzer or Vercel's Edge Functions.