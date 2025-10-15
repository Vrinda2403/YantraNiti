import React from 'react';
import { FaTwitter, FaGithub, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const footerLinks = {
    services: [
        { name: 'Yantra Generator', href: '#' },
        { name: 'Heritage Map', href: '#' },
        { name: 'Astronomical Tracker', href: '#' },
        { name: 'CAD Exports', href: '#' },
    ],
    useful: [
        { name: 'About Us', href: '#' },
        { name: 'Research & Data', href: '#' },
        { name: 'Contact', href: '#' },
        { name: 'Privacy Policy', href: '#' },
    ],
};

const Footer = () => {
    return (
        <footer 
            className="bg-primary-dark border-t border-primary-mid text-text-light/70 font-poppins relative overflow-hidden"
            // Adding a subtle background SVG for texture
            style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23302b63\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Column 1: About Company */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-accent-teal uppercase tracking-wider">About Yantraniti</h3>
                        <p className="text-sm leading-relaxed">
                            Reviving ancient astronomical wisdom by generating precise, location-based yantras. We bridge heritage with technology for students, researchers, and makers worldwide.
                        </p>
                        <div className="flex space-x-3 pt-2">
                            <SocialIcon href="#" icon={<FaTwitter />} />
                            <SocialIcon href="#" icon={<FaGithub />} />
                            <SocialIcon href="#" icon={<FaLinkedinIn />} />
                            <SocialIcon href="#" icon={<FaYoutube />} />
                        </div>
                    </div>

                    {/* Column 2: Our Instruments */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-text-light uppercase tracking-wider">Instruments</h3>
                        <ul className="space-y-2">
                            {footerLinks.services.map(link => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-sm hover:text-accent-teal transition-colors duration-300">{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Useful Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-text-light uppercase tracking-wider">Useful Links</h3>
                        <ul className="space-y-2">
                            {footerLinks.useful.map(link => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-sm hover:text-accent-teal transition-colors duration-300">{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Newsletter */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-text-light uppercase tracking-wider">Newsletter</h3>
                        <p className="text-sm">
                            Stay updated with our latest research, events, and platform features.
                        </p>
                        <form>
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full p-3 bg-primary-light border border-primary-mid text-text-light placeholder-text-light/50 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-accent-teal transition-shadow"
                            />
                            <button
                                type="submit"
                                className="w-full bg-accent-teal text-primary-dark font-bold p-3 rounded-md hover:bg-opacity-80 transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>

                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-primary-mid text-center py-6">
                <div className="max-w-7xl mx-auto px-8">
                     <p className="font-bold text-lg text-accent-gold mb-1">SMART INDIA HACKATHON 2025</p>
                    <p className="text-sm text-text-light/50">
                        &copy; {new Date().getFullYear()} Yantraniti | Team: Mind Canvas | All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

// A helper component for social icons to avoid repetition
const SocialIcon = ({ href, icon }) => (
    <a href={href} className="w-10 h-10 bg-primary-light text-text-light rounded-full flex items-center justify-center hover:bg-accent-teal hover:text-primary-dark transition-all duration-300">
        {icon}
    </a>
);


export default Footer;