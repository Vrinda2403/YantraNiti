import React, { useState } from 'react'; // Import useState
import { FaLock } from 'react-icons/fa';
import Samrat from '../assets/Samrat.png';
import RamaYantra from '../assets/RamaYantra.png';
import Jai from '../assets/JaiPrakash.png';

const savedData = [
    { id: 1, name: 'Samrat Yantra', location: 'Jaipur, India', lat: 26.92, lon: 75.82, img: Samrat },
    { id: 2, name: 'Rama Yantra', location: 'Delhi, India', lat: 28.61, lon: 77.20, img: RamaYantra },
    { id: 3, name: 'Jai Prakash Yantra', location: 'Varanasi, India', lat: 25.31, lon: 82.97, img: Jai },
];

const SavedYantras = React.forwardRef(({ isLoggedIn, scrollToLogin }, ref) => {
    // --- NEW STATE FOR MODAL ---
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    // --- END OF NEW STATE ---

    // --- NEW HANDLER FUNCTIONS ---
    const handleViewClick = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };
    // --- END OF NEW HANDLERS ---

    return (
        // Added a fragment to contain the section and the modal
        <>
            <section id="saved" ref={ref} className="max-w-7xl mx-auto px-4 sm:px-8 py-24 relative">
                
                {!isLoggedIn && (
                    <div className="absolute inset-0 bg-primary-dark/60 backdrop-blur-md z-10 flex flex-col items-center justify-center rounded-[2.5rem] p-4 text-center">
                        <FaLock className="text-5xl text-accent-teal mb-4" />
                        <h3 className="text-2xl font-bold text-text-light mb-2">Access Your Saved Yantras</h3>
                        <p className="text-text-light/80 mb-6">Log in to view and manage your personalized collection.</p>
                        <button onClick={scrollToLogin} className="bg-accent-teal hover:bg-opacity-80 text-primary-dark font-semibold py-2 px-6 rounded-lg transition-colors">
                            Login to View
                        </button>
                    </div>
                )}

                <h2 className="text-4xl sm:text-5xl font-semibold text-center mb-16">
                    Your <span className="bg-gradient-to-r from-accent- to-accent-gold bg-clip-text text-transparent">Saved</span> Yantras
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {savedData.map((yantra) => (
                        <div 
                            key={yantra.id} 
                            className="bg-primary-light rounded-2xl border border-primary-mid flex flex-col transition-transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent-teal/10 overflow-hidden"
                        >
                            <img src={yantra.img} alt={yantra.name} className="w-full h-48 object-cover" />
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex-grow">
                                    <h3 className="text-2xl text-accent-gold font-semibold mb-2">{yantra.name}</h3>
                                    <p className="text-text-light/80 mb-1">📍 {yantra.location}</p>
                                    <p className="text-text-light/60 text-sm mb-6">Lat: {yantra.lat}, Lon: {yantra.lon}</p>
                                </div>
                                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mt-4">
                                    {/* Updated onClick for the "View" button */}
                                    <button 
                                        onClick={() => handleViewClick(yantra.img)}
                                        className="w-full bg-accent-teal text-primary-dark font-semibold py-2 px-4 rounded-lg transition-colors hover:bg-opacity-80"
                                    >
                                        View
                                    </button>
                                    <button className="w-full bg-primary-mid text-text-light font-semibold py-2 px-4 rounded-lg transition-colors hover:bg-red-500/50">Delete</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- NEW MODAL JSX --- */}
            {isModalOpen && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm transition-opacity duration-300"
                    onClick={handleCloseModal}
                >
                    <div 
                        className="relative p-4 bg-primary-light border border-primary-mid rounded-lg shadow-xl"
                        onClick={(e) => e.stopPropagation()} // Prevents modal from closing when clicking on the image
                    >
                        <img 
                            src={selectedImage} 
                            alt="Enlarged Yantra" 
                            className="max-w-[85vw] max-h-[85vh] object-contain rounded-md" 
                        />
                        <button 
                            onClick={handleCloseModal}
                            className="absolute -top-5 -right-5 w-12 h-12 bg-accent-teal text-primary-dark rounded-full flex items-center justify-center text-3xl font-bold hover:scale-110 transition-transform"
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}
            {/* --- END OF MODAL JSX --- */}
        </>
    );
});

export default SavedYantras;