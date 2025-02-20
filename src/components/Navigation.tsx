
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { BookOpen, User, MessageSquare } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Blog', icon: BookOpen },
    { path: '/about', label: 'About', icon: User },
    { path: '/contact', label: 'Contact', icon: MessageSquare },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-serif text-xl font-semibold">
            PM Journal
          </Link>
          <div className="flex items-center space-x-8">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={cn(
                  'flex items-center space-x-2 text-sm font-medium transition-colors',
                  location.pathname === path
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-primary'
                )}
              >
                <Icon size={16} />
                <span>{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
