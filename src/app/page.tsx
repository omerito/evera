export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-blue-600">Welcome to Evera Global</h1>
      <p className="mt-4 text-lg text-gray-600">Helping businesses build scalable digital solutions.</p>
      <a href="/contact" className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700">
        Contact Us
      </a>
    </div>
  );
}
