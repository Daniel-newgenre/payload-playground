'use client'

export default function HomePage() {
  return (
    <main className="min-h-screen w-full">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Welcome to Your Site</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">About Us</h2>
            <p className="text-gray-600">
              This is a modern web application built with Next.js and Payload CMS, providing a
              powerful and flexible foundation for your project.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Get Started</h2>
            <p className="text-gray-600">
              Begin by customizing this template to match your needs. Edit this page in
              src/app/(frontend)/page.tsx
            </p>
            <button
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              onClick={() => console.log('Clicked')}
              onKeyDown={(e) => e.key === 'Enter' && console.log('Clicked')}
              tabIndex={0}
              aria-label="Learn more about our services"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
