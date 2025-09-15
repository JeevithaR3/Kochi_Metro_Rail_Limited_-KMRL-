import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe, Train } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTranslated, setIsTranslated] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/home', label: 'Home' },
    { path: '/upload', label: 'Upload' },
    { path: '/summaries', label: 'Summaries' },
    { path: '/departments', label: 'Departments' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
    { path: '/', label: 'Logout' }
  ];

  const toggleTranslator = () => {
    setIsTranslated(!isTranslated);
    // In a real app, this would trigger translation
    console.log('Translation toggled:', !isTranslated ? 'Malayalam' : 'English');
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/home" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="p-2 rounded-lg metro-gradient"
            >
              <Train className="h-6 w-6 text-white" />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                KMRL
              </span>
              <span className="text-xs text-muted-foreground">
                AI Document System
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-muted hover:text-primary'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Translator & Mobile Menu */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Button
                onClick={toggleTranslator}
                variant="metro-ghost"
                size="sm"
                className="hidden sm:flex bg-background border border-border hover:bg-muted z-20 relative"
              >
                <Globe className="h-4 w-4 mr-1" />
                {isTranslated ? 'English' : 'മലയാളം'}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              variant="metro-ghost"
              size="icon"
              className="md:hidden"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-border"
          >
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-muted hover:text-primary'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                onClick={toggleTranslator}
                variant="metro-ghost"
                size="sm"
                className="w-full justify-start sm:hidden mt-2 bg-background border border-border hover:bg-muted"
              >
                <Globe className="h-4 w-4 mr-2" />
                {isTranslated ? 'Switch to English' : 'മലയാളത്തിലേക്ക് മാറുക'}
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;