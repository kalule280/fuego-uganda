import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from './Logo';
import SignupModal from './SignupModal';
import SigninModal from './SigninModal';

const Navbar = () => {
  const [showContact, setShowContact] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isSigninOpen, setIsSigninOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const getNavClass = ({ isActive }) => {
    return [
      'group relative px-3 py-2 text-sm font-medium tracking-[0.02em] transition-all duration-200',
      isActive
        ? 'text-white after:absolute after:left-3 after:right-3 after:-bottom-1 after:h-[2px] after:rounded-full after:bg-[#f97316] after:content-[""]'
        : 'text-white/70 hover:text-white after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:rounded-full after:bg-[#f97316] after:transition-all after:duration-300 after:content-[""] group-hover:after:left-3 group-hover:after:right-3 group-hover:after:w-auto'
    ].join(' ');
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#071b46] shadow-[0_8px_24px_rgba(7,27,70,0.10)] transition-all duration-300">
      <div className="mx-auto flex h-[78px] max-w-7xl items-center justify-between px-margin-mobile md:px-margin-desktop">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold tracking-tight text-white">
          <Logo className="h-14" inverted={true} />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-7 lg:flex">
          <NavLink to="/" className={getNavClass} end>Home</NavLink>
          <NavLink to="/categories" className={getNavClass}>Products</NavLink>
          <NavLink to="/about" className={getNavClass}>About</NavLink>
          <NavLink to="/support" className={getNavClass}>Contact</NavLink>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {user ? (
            <>
              <span className="text-white text-sm font-semibold hidden md:inline-block">Welcome, {user.username}!</span>
              <button onClick={handleSignout} className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/10">
                Sign out
              </button>
            </>
          ) : (
            <>
              <button onClick={() => setIsSigninOpen(true)} className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/10">
                Sign in
              </button>
              <button onClick={() => setIsSignupOpen(true)} className="inline-flex items-center justify-center rounded-lg bg-[#ed3c2d] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(237,60,45,0.30)] transition-all duration-200 hover:bg-[#ff5d4d] active:scale-[0.98]">
                Sign up
              </button>
            </>
          )}

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="relative z-50 p-2 text-white lg:hidden"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#071b46] px-margin-mobile pb-5 pt-3 lg:hidden">
          <div className="flex flex-col gap-1">
            <NavLink to="/" end onClick={() => setMenuOpen(false)} className={getNavClass}>Home</NavLink>
            <NavLink to="/categories" onClick={() => setMenuOpen(false)} className={getNavClass}>Products</NavLink>
            <NavLink to="/about" onClick={() => setMenuOpen(false)} className={getNavClass}>About</NavLink>
            <NavLink to="/support" onClick={() => setMenuOpen(false)} className={getNavClass}>Contact</NavLink>
          </div>
        </div>
      )}
      <SignupModal isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} onLogin={handleLogin} />
      <SigninModal isOpen={isSigninOpen} onClose={() => setIsSigninOpen(false)} onLogin={handleLogin} />
    </nav>
  );
};

export default Navbar;
