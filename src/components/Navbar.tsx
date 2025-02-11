import Link from "next/link";

export default function Navbar() {
    return (
      <nav className="bg-white shadow-lg p-4">
        <div className="mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold">Evera Global</h1>
          
          <div className="flex space-x-8">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <Link href="/services" className="hover:text-blue-600">Services</Link>
            <Link href="/contact" className="hover:text-blue-600">Contact</Link>
          </div>
        </div>
      </nav>
    );
  }
  
  
