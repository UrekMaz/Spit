import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-6 shadow-md">
      {/* Logo */}
      <Link to={'/'} className="flex items-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 -rotate-90">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>
        <span className="font-bold text-xl">airbnb</span>
      </Link>

      {/* Navbar Links */}
      <nav className="flex gap-6 text-lg">
        <Link to="/page1" className="hover:text-red-500">Page 1</Link>
        <Link to="/page2" className="hover:text-red-500">Page 2</Link>
        <Link to="/page3" className="hover:text-red-500">Page 3</Link>
      </nav>

      {/* Profile & Menu */}
      <div className="flex items-center gap-3 border border-gray-300 rounded-full py-2 px-4 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        <Link to="/login" className="bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 relative top-1">
            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </header>
  );
}
