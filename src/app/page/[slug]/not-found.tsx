import Link from 'next/link';
import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-16 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
        <p className="text-lg mb-8">The page you are looking for does not exist.</p>
        <Link 
          href="/"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
        >
          Return Home
        </Link>
      </div>
      <Footer />
    </div>
  );
}
