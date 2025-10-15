import React, { useState } from 'react';

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        // --- MODIFIED LOGIC ---
        // Instead of checking for a specific email/password,
        // we'll just check if the fields are not empty.
        // This makes any login work for demonstration.
        if (email && password) {
            onLogin(); // Call the login function if both fields have text
        } else {
            setError('Please enter both email and password.');
        }
    };

    return (
        <section id="login" className="min-h-screen flex items-center justify-center py-24 px-4 sm:px-8 bg-primary-dark">
            <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16 bg-primary-light p-8 sm:p-12 rounded-3xl shadow-2xl border border-primary-mid">

                {/* Left Column: Descriptive Text */}
                <div className="text-center lg:text-left">
                    <h2 className="text-4xl lg:text-5xl font-bold text-text-light mb-6 leading-tight">
                        Unlock the <br />
                        <span className="bg-gradient-to-r from-accent-light to-accent-teal bg-clip-text text-transparent">Cosmos</span>
                    </h2>
                    <p className="text-lg text-text-light/70 mb-8">
                        Log in to access your personal dashboard. Here you can save your generated yantra designs, manage your parameters, and export them for fabrication.
                    </p>
                    <div className="p-6 bg-primary-dark rounded-xl border border-primary-mid">
                        <p className="text-accent-teal">"Astronomy compels the soul to look upwards and leads us from this world to another."</p>
                        <p className="text-right text-text-light/50 mt-2">- Plato</p>
                    </div>
                </div>

                {/* Right Column: Login Form */}
                <div className="w-full">
                    <h3 className="text-3xl font-semibold text-center text-text-light mb-8">
                        Member Login
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="sr-only">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full p-4 border border-primary-mid bg-primary-dark rounded-lg text-base text-text-light placeholder-text-light/50 focus:ring-2 focus:ring-accent-teal focus:outline-none transition-shadow"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full p-4 border border-primary-mid bg-primary-dark rounded-lg text-base text-text-light placeholder-text-light/50 focus:ring-2 focus:ring-accent-teal focus:outline-none transition-shadow"
                            />
                        </div>
                        {error && (
                            <p className="text-red-400 text-sm">{error}</p>
                        )}
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-accent-teal to-blue-500 text-primary-dark py-4 px-10 rounded-full text-lg font-semibold cursor-pointer transition-all duration-300 shadow-teal-glow hover:-translate-y-1 hover:shadow-teal-glow-hover"
                        >
                            Login
                        </button>
                    </form>
                    <p className="mt-8 text-text-light/60 text-sm text-center">
                        Don't have an account? <a href="#" className="text-accent-teal hover:underline transition-colors">Sign Up</a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Login;