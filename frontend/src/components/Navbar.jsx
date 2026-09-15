import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from './Logo';
import SignupModal from './SignupModal';
import SigninModal from './SigninModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isSigninOpen, setIsSigninOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    const handleOpenSignup = () => setIsSignupOpen(true);
    const handleOpenSignin = () => setIsSigninOpen(true);

    window.addEventListener('openSignup', handleOpenSignup);
    window.addEventListener('openSignin', handleOpenSignin);

    return () => {
      window.removeEventListener('openSignup', handleOpenSignup);
      window.removeEventListener('openSignin', handleOpenSignin);
    };
  }, []);

  const handleSignout = () => {
    localStorage.removeItem('user');
    setUser(null);
    window.dispatchEvent(new Event('userChanged'));
  };

  const handleLogin = (username) => {
    setUser({ username });
    window.dispatchEvent(new Event('userChanged'));
  };

  const navLinkClass = ({ isActive }) =>
    `hover:text-orange-400 transition font-medium ${isActive ? 'text-orange-400' : 'text-white'}`;

  const mobileLinkClass = ({ isActive }) =>
    `block py-2 text-base font-medium hover:text-orange-400 transition ${isActive ? 'text-orange-400' : 'text-white'}`;

  return (
    <header className="sticky top-0 z-50 bg-[#071b46] text-white shadow-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[78px]">

          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2">
            <Logo className="h-14" inverted={true} />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink to="/" className={navLinkClass} end>Home</NavLink>
            <NavLink to="/categories" className={navLinkClass}>Products</NavLink>
            <NavLink to="/gallery?category=videos" className={navLinkClass}>Videos</NavLink>
            <NavLink to="/about" className={navLinkClass}>About</NavLink>
            <NavLink to="/support" className={navLinkClass}>Contact</NavLink>
          </nav>

          {/* Desktop User Section */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <span className="text-xs text-gray-300 truncate max-w-[150px]">Welcome, {user.username}!</span>
                <button
                  onClick={handleSignout}
                  className="px-3 py-1.5 text-xs font-semibold bg-white/5 border border-white/20 hover:bg-white/10 rounded-lg transition"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setIsSigninOpen(true)}
                  className="px-3 py-1.5 text-xs font-semibold bg-white/5 border border-white/20 hover:bg-white/10 rounded-lg transition"
                >
                  Sign In
                </button>
                <button
                  onClick={() => setIsSignupOpen(true)}
                  className="px-3 py-1.5 text-xs font-semibold bg-[#ed3c2d] hover:bg-[#ff5d4d] rounded-lg shadow-[0_8px_20px_rgba(237,60,45,0.30)] transition"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#071b46] px-4 pt-2 pb-4 space-y-1 border-t border-white/10">
          <NavLink to="/" end onClick={() => setIsOpen(false)} className={mobileLinkClass}>Home</NavLink>
          <NavLink to="/categories" onClick={() => setIsOpen(false)} className={mobileLinkClass}>Products</NavLink>
          <NavLink to="/gallery?category=videos" onClick={() => setIsOpen(false)} className={mobileLinkClass}>Videos</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)} className={mobileLinkClass}>About</NavLink>
          <NavLink to="/support" onClick={() => setIsOpen(false)} className={mobileLinkClass}>Contact</NavLink>

          <div className="pt-3 border-t border-white/10 flex flex-col space-y-2">
            {user ? (
              <>
                <span className="text-xs text-gray-400">Signed in as: {user.username}</span>
                <button
                  onClick={() => { handleSignout(); setIsOpen(false); }}
                  className="w-full text-center py-2 text-sm font-semibold bg-white/5 border border-white/20 hover:bg-white/10 rounded-lg transition"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => { setIsSigninOpen(true); setIsOpen(false); }}
                  className="w-full text-center py-2 text-sm font-semibold bg-white/5 border border-white/20 hover:bg-white/10 rounded-lg transition"
                >
                  Sign In
                </button>
                <button
                  onClick={() => { setIsSignupOpen(true); setIsOpen(false); }}
                  className="w-full text-center py-2 text-sm font-semibold bg-[#ed3c2d] hover:bg-[#ff5d4d] rounded-lg transition"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      )}

      <SignupModal isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} onLogin={handleLogin} />
      <SigninModal isOpen={isSigninOpen} onClose={() => setIsSigninOpen(false)} onLogin={handleLogin} />
    </header>
  );
};

export default Navbar;
