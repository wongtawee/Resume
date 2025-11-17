import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Resume', path: '/resume' },
    { name: 'Work', path: '/work' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-lg shadow-lg' 
          : 'bg-white/50 backdrop-blur-sm shadow-sm'
      }`}
    >
      <nav className="container-custom">
        <div className="flex justify-between items-center h-16">
          {/* Logo with Gradient */}
          <Link 
            to="/" 
            className="text-2xl font-heading font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
          >
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative px-4 py-2 font-medium group"
              >
                <span className={`relative z-10 transition-colors duration-300 ${
                  isActive(link.path)
                    ? 'text-blue-600'
                    : 'text-gray-600 group-hover:text-blue-600'
                }`}>
                  {link.name}
                </span>
                {/* Animated Underline */}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform origin-left transition-transform duration-300 ${
                  isActive(link.path) 
                    ? 'scale-x-100' 
                    : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
                {/* Hover Background */}
                <span className="absolute inset-0 bg-blue-50 rounded-lg transform scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button with Animation */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 text-gray-600 hover:text-blue-600 focus:outline-none group"
            aria-label="Toggle menu"
          >
            <div className="absolute inset-0 bg-blue-50 rounded-lg transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            <div className="relative">
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </div>
          </button>
        </div>

        {/* Mobile Navigation with Slide Animation */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 border-t space-y-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-3 px-4 font-medium rounded-lg transition-all duration-300 transform ${
                  isActive(link.path)
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50 hover:translate-x-2'
                }`}
                style={{ 
                  transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? 'translateX(0)' : 'translateX(-20px)'
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
