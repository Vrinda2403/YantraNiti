import React from 'react';

const Home = ({ scrollToGenerator }) => {
    return (
        <>
            {/* Hero Section */}
            <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center p-4 bg-cover bg-center bg-no-repeat" style={{backgroundImage: "linear-gradient(to bottom, rgba(15, 12, 41, 0.5), #0f0c29), url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&q=80&w=2071')"}}>
                <h1 className="text-6xl sm:text-8xl font-bold leading-tight mb-4">यंत्रनीति</h1>
                <p className="text-xl sm:text-2xl font-light text-text-light/80 mb-10">Reviving Ancient Astronomy with Modern Precision</p>
                <button 
                    onClick={scrollToGenerator} 
                    className="bg-gradient-to-r from-accent-teal to-blue-500 text-primary-dark py-3 px-10 sm:py-4 sm:px-12 rounded-full text-lg font-semibold cursor-pointer transition-all duration-300 shadow-teal-glow hover:-translate-y-1 hover:shadow-teal-glow-hover"
                >
                    Create Your Yantra
                </button>
            </section>
        </>
    );
};

export default Home;