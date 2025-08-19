export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-bg-color-dark">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-black dark:text-white mb-4">
            Welcome to React Static App
          </h1>
          <p className="text-lg text-body-color dark:text-body-color-dark mb-8">
            A modern React application built with Next.js, TypeScript, and Tailwind CSS. 
            This project is configured for static export and includes dark mode support.
          </p>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-stroke-stroke dark:border-stroke-dark p-6 hover:shadow-two dark:hover:shadow-submit-dark transition-shadow">
              <h2 className="text-xl font-semibold text-black dark:text-white mb-2">
                Static Export
              </h2>
              <p className="text-body-color dark:text-body-color-dark">
                Configured for static site generation with optimized build output.
              </p>
            </div>
            
            <div className="rounded-lg border border-stroke-stroke dark:border-stroke-dark p-6 hover:shadow-two dark:hover:shadow-submit-dark transition-shadow">
              <h2 className="text-xl font-semibold text-black dark:text-white mb-2">
                TypeScript
              </h2>
              <p className="text-body-color dark:text-body-color-dark">
                Full TypeScript support with path aliases and type safety.
              </p>
            </div>
            
            <div className="rounded-lg border border-stroke-stroke dark:border-stroke-dark p-6 hover:shadow-two dark:hover:shadow-submit-dark transition-shadow">
              <h2 className="text-xl font-semibold text-black dark:text-white mb-2">
                Dark Mode
              </h2>
              <p className="text-body-color dark:text-body-color-dark">
                Built-in dark mode support with Tailwind CSS and next-themes.
              </p>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-gray-light dark:bg-dark rounded-lg">
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
              Getting Started
            </h2>
            <ul className="space-y-2 text-body-color dark:text-body-color-dark">
              <li>• Edit <code className="px-2 py-1 bg-white dark:bg-black rounded">src/app/page.tsx</code> to modify this page</li>
              <li>• Add components to <code className="px-2 py-1 bg-white dark:bg-black rounded">src/components/</code></li>
              <li>• Configure styles in <code className="px-2 py-1 bg-white dark:bg-black rounded">src/styles/index.css</code></li>
              <li>• Build for production with <code className="px-2 py-1 bg-white dark:bg-black rounded">npm run build</code></li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
