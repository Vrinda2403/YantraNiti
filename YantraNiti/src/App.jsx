import React, { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Generator from './components/Generator';
import Login from './components/Login';
import Footer from './components/Footer';
import SavedYantras from './components/SavedYantras';
import './index.css';

// Custom hook for observing element intersection
const useIntersectionObserver = (options) => {
    const [entries, setEntries] = useState([]);
    const observer = useRef(new IntersectionObserver((observedEntries) => {
        setEntries(observedEntries);
    }, options));

    useEffect(() => {
        const currentObserver = observer.current;
        return () => currentObserver.disconnect();
    }, []);

    const observe = (element) => {
        if (element) observer.current.observe(element);
    };

    return [observe, entries];
};

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const generatorRef = useRef(null);
    const loginRef = useRef(null);
    const savedRef = useRef(null);

    const [observe, entries] = useIntersectionObserver({ threshold: 0.1 });
    useEffect(() => {
        const sections = document.querySelectorAll('.reveal-section');
        sections.forEach(section => observe(section));
    }, [observe, isLoggedIn]); 
    
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-8');
            entry.target.classList.add('opacity-100', 'translate-y-0');
        }
    });

    const handleScrollTo = (ref) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleLogin = () => {
        setIsLoggedIn(true);
        handleScrollTo(generatorRef);
    };

    const handleLogout = () => setIsLoggedIn(false);

    return (
        <>
            <Header
                isLoggedIn={isLoggedIn}
                onLogout={handleLogout}
                scrollToGenerator={() => handleScrollTo(generatorRef)}
                scrollToSaved={() => handleScrollTo(savedRef)}
                scrollToLogin={() => handleScrollTo(loginRef)}
            />
            <main>
                <div className="reveal-section opacity-0 translate-y-8 transition-all duration-700 ease-out">
                    <Home scrollToGenerator={() => handleScrollTo(generatorRef)} />
                </div>
                
                <div ref={generatorRef} className="reveal-section opacity-0 translate-y-8 transition-all duration-700 ease-out">
                    <Generator />
                </div>

                <div ref={savedRef} className="reveal-section opacity-0 translate-y-8 transition-all duration-700 ease-out">
                    <SavedYantras 
                        isLoggedIn={isLoggedIn} 
                        scrollToLogin={() => handleScrollTo(loginRef)} 
                    />
                </div>
                
                {!isLoggedIn && (
                    <div ref={loginRef} className="reveal-section opacity-0 translate-y-8 transition-all duration-700 ease-out">
                        <Login onLogin={handleLogin} />
                    </div>
                )}
            </main>
            <Footer />
        </>
    );
}

export default App;