# New Genre Next.js Template

This is the official **New Genre Next.js Template**, a modern and extensible starting point for future projects at New Genre. It includes a thoughtfully curated stack of tools and best practices to accelerate project development while maintaining flexibility for customization.

## Technologies Used

- **[Next.js](https://nextjs.org/):** The React framework for building performant web applications with server-side rendering and static site generation.
- **[Payload CMS](https://payloadcms.com/):** A powerful headless CMS for managing dynamic content.
- **[Tailwind CSS](https://tailwindcss.com/):** A utility-first CSS framework for rapid UI development.
- **[shadcn/ui](https://ui.shadcn.dev/):** A set of accessible and customizable UI components for building consistent user interfaces.

## Features

- **Modular and Scalable Architecture:** A structure that promotes reusability, maintainability, and scalability.
- **Integration with Payload CMS:** Seamless connection to manage and fetch dynamic content.
- **Tailwind CSS:** Pre-configured for consistent styling and responsive design.
- **ShadCN Components:** Pre-installed UI components for rapid development.
- **Future-Ready:** Built with extensibility in mind, making it easy to add tools and features as required.

## Getting Started

Follow these steps to get the project up and running:

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v18 or later)
- **pnpm** (preferred package manager)
- **Docker** (for Payload CMS, if applicable)

### Installation

1. **Clone the repository:**

   - Run the following command in your terminal:
     ```bash
     git clone https://github.com/newgenre/newgenre-next-template.git
     cd newgenre-next-template
     ```

2. **Install dependencies:**

   - Use pnpm to install the necessary packages:
     ```bash
     pnpm install
     ```

3. **Set up environment variables:**

   - Create a `.env.local` file in the root directory.
   - Add the following environment variables to the file:
     ```bash
     NEXT_PUBLIC_API_URL=https://your-payload-api-url.com
     PAYLOAD_SECRET=your-secret-key
     ```

4. **Run the development server:**

   - Start the local development server:
     ```bash
     pnpm dev
     ```
   - Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

---

### Payload CMS Setup

1. **Start the Payload CMS container (if using Docker):**

   - Run the following command:
     ```bash
     docker-compose up -d
     ```

2. **Access the Payload CMS admin panel:**

   - Open [http://localhost:3001/admin](http://localhost:3001/admin) in your browser.

---

### Building for Production

1. **Build the application:**

   - Generate the production build:
     ```bash
     pnpm build
     ```

2. **Start the production server:**

   - Launch the production server:
     ```bash
     pnpm start
     ```
