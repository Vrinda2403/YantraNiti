import React, { useState, useEffect } from 'react';
import { FaGlobe } from 'react-icons/fa';

const Header = ({ isLoggedIn, onLogout, scrollToGenerator, scrollToLogin, scrollToSaved }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [language, setLanguage] = useState('en');

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinkClasses = "relative text-text-light font-normal group pb-1.5";
    const navLinkUnderline = "absolute bottom-0 left-0 w-0 h-0.5 bg-accent-teal group-hover:w-full transition-all duration-300";

    const handleActionClick = (e, action) => {
        e.preventDefault();
        if (isLoggedIn) {
            action();
        } else {
            scrollToLogin();
        }
    };

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    };
    
    return (
        <header className={`fixed w-full top-0 left-0 z-50 flex justify-between items-center px-4 sm:px-8 py-4 transition-all duration-300 ${isScrolled ? 'bg-primary-dark/90 backdrop-blur-lg shadow-2xl' : ''}`}>
            <div className="text-4xl font-bold bg-gradient-to-r from-accent-teal to-accent-gold bg-clip-text text-transparent">
                Yantraniti
            </div>
            <nav className="flex items-center space-x-6 sm:space-x-8 text-sm sm:text-base">
                <a href="#home" className={navLinkClasses}>
                    Home
                    <span className={navLinkUnderline}></span>
                </a>
                <a href="#generate" onClick={(e) => handleActionClick(e, scrollToGenerator)} className={navLinkClasses}>
                    Generate
                    <span className={navLinkUnderline}></span>
                </a>
                 <a href="#saved" onClick={(e) => handleActionClick(e, scrollToSaved)} className={navLinkClasses}>
                    Saved
                    <span className={navLinkUnderline}></span>
                </a>

                {/* Language Dropdown Button */}
                <div className="relative inline-flex items-center bg-primary-light/50 px-3 py-1.5 rounded-md border border-accent-teal/25 hover:border-accent-teal/50 transition-colors">
                    <FaGlobe className="text-accent-teal mr-2" />
                    <select 
                        name="language" 
                        id="language-select"
                        value={language}
                        onChange={handleLanguageChange}
                        className="appearance-none bg-transparent text-text-light focus:outline-none cursor-pointer pr-4"
                    >
                        <option value="en" className="bg-primary-dark">English</option>
                        <option value="hi" className="bg-primary-dark">Hindi</option>
                    </select>
                </div>
                
                {isLoggedIn ? (
                    <button onClick={onLogout} className="bg-primary-light hover:bg-primary-mid text-text-light font-semibold py-2 px-4 rounded-lg transition-colors">
                        Logout
                    </button>
                ) : (
                    <button onClick={scrollToLogin} className="bg-accent-teal hover:bg-opacity-80 text-primary-dark font-semibold py-2 px-4 rounded-lg transition-colors">
                        Login
                    </button>
                )}
            </nav>
        </header>
    );
};

export default Header;