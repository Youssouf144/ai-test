import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="text-6xl mb-4">🔍</div>
        <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
          The page might have been moved, deleted, or you entered the wrong URL.
        </p>
        <div className="space-y-4">
          <Link
            href="/"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block"
          >
            Go Home
          </Link>
          <div className="text-sm">
            <Link
              href="/products"
              className="text-blue-600 hover:text-blue-800 mr-4"
            >
              Browse Products
            </Link>
            <Link
              href="/contact"
              className="text-blue-600 hover:text-blue-800"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}