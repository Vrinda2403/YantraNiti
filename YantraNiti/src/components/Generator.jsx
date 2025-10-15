import React, { useEffect, useRef, useState, forwardRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const FormInput = ({ id, label, placeholder, value, onChange }) => (
    <div className="mb-6">
        <label htmlFor={id} className="block mb-2 font-normal text-text-light/80">{label}</label>
        <input 
            type="text" id={id} placeholder={placeholder} value={value} onChange={onChange} 
            className="w-full p-3 border border-primary-mid bg-primary-dark rounded-lg text-base text-text-light focus:ring-2 focus:ring-accent-teal focus:outline-none transition-shadow"
        />
    </div>
);

const Generator = forwardRef((props, ref) => {
    const mountRef = useRef(null);
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [message, setMessage] = useState({ text: '', type: '' });
    const [isLoading, setIsLoading] = useState(false);
    const [isSceneInitialized, setIsSceneInitialized] = useState(false);

    useEffect(() => {
        
        let renderer, scene, camera, controls;

        const initThreeJS = () => {
            const container = mountRef.current;
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 1000);
            camera.position.set(0, 5, 12);

            renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setSize(container.clientWidth, container.clientHeight);
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.shadowMap.enabled = true;
            container.appendChild(renderer.domElement);

            controls = new OrbitControls(camera, renderer.domElement);
            controls.enableDamping = true;
            controls.dampingFactor = 0.05;
            controls.minDistance = 5;
            controls.maxDistance = 50;
            
            const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
            scene.add(ambientLight);
            const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
            directionalLight.position.set(10, 15, 5);
            directionalLight.castShadow = true;
            scene.add(directionalLight);

           
            const model = new THREE.Group();
            const stoneMaterial = new THREE.MeshStandardMaterial({
                color: 0xcccccc,
                metalness: 0.1,
                roughness: 0.8
            });

            const gnomonShape = new THREE.Shape();
            gnomonShape.moveTo(0, 0);
            gnomonShape.lineTo(4, 0);
            gnomonShape.lineTo(0, 2);
            gnomonShape.lineTo(0, 0);
            const extrudeSettings = { depth: 0.4, bevelEnabled: false };
            const gnomonGeometry = new THREE.ExtrudeGeometry(gnomonShape, extrudeSettings);
            const gnomon = new THREE.Mesh(gnomonGeometry, stoneMaterial);
            gnomon.position.set(-2, 0, -0.2);
            gnomon.castShadow = true;
            model.add(gnomon);

            const arcRadius = 4;
            const arcTube = 0.2;
            const quadrantGeometry = new THREE.TorusGeometry(arcRadius, arcTube, 16, 100, Math.PI / 2);
            
            const quadrantWest = new THREE.Mesh(quadrantGeometry, stoneMaterial);
            quadrantWest.rotation.z = -Math.PI / 4;
            quadrantWest.position.x = -0.5;
            quadrantWest.receiveShadow = true;
            model.add(quadrantWest);

            const quadrantEast = new THREE.Mesh(quadrantGeometry, stoneMaterial);
            quadrantEast.rotation.z = Math.PI + Math.PI / 4;
            quadrantEast.position.x = 0.5;
            quadrantEast.receiveShadow = true;
            model.add(quadrantEast);
            
            const baseGeometry = new THREE.BoxGeometry(10, 0.2, 5);
            const base = new THREE.Mesh(baseGeometry, stoneMaterial);
            base.position.y = -arcTube;
            base.receiveShadow = true;
            model.add(base);

            scene.add(model);
            model.rotation.y = -0.2;

            const animate = () => {
                if (!renderer) return; // Stop animation if cleaned up
                requestAnimationFrame(animate);
                controls.update();
                renderer.render(scene, camera);
            };
            animate();

            const handleResize = () => {
                camera.aspect = container.clientWidth / container.clientHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(container.clientWidth, container.clientHeight);
            };
            window.addEventListener('resize', handleResize);

            // Cleanup function
            return () => {
                window.removeEventListener('resize', handleResize);
                if (container && renderer.domElement) {
                   container.removeChild(renderer.domElement);
                }
                renderer = null;
            };
        };

        if (isSceneInitialized) {
           return initThreeJS();
        }
    }, [isSceneInitialized]);

    const handleGenerate = () => {
        if (!latitude || !longitude) {
            setMessage({ text: 'Please enter valid coordinates.', type: 'error' });
            return;
        }
        setMessage({ text: '', type: '' });
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            if (!isSceneInitialized) setIsSceneInitialized(true);
            setMessage({ text: 'Model Generated Successfully!', type: 'success' });
        }, 2000);
    };


    return (
        <section id="solution" ref={ref} className="max-w-7xl mx-auto px-4 sm:px-8 py-24">
            <h2 className="text-4xl sm:text-5xl font-semibold text-center mb-16">The <span className="bg-gradient-to-r from-accent-light to-accent-teal bg-clip-text text-transparent">Solution</span>: A Dynamic Generator</h2>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 bg-primary-light p-6 sm:p-12 rounded-3xl border border-accent-teal/20">
                
                {/* Controls Column */}
                <div className="lg:col-span-2">
                    <h3 className="text-2xl text-accent-teal font-semibold mb-6">1. Define Your Location</h3>
                    <FormInput id="latitude" label="Latitude (e.g., 28.7041)" value={latitude} onChange={(e) => setLatitude(e.target.value)} />
                    <FormInput id="longitude" label="Longitude (e.g., 77.1025)" value={longitude} onChange={(e) => setLongitude(e.target.value)} />
                    <div className="mb-6">
                        <label htmlFor="yantra-select" className="block mb-2 font-normal text-text-light/80">Select Yantra</label>
                        <select id="yantra-select" className="w-full p-3 border border-primary-mid bg-primary-dark rounded-lg text-base text-text-light focus:ring-2 focus:ring-accent-teal focus:outline-none transition-shadow">
                            <option>Samrat Yantra</option>
                            <option>Rama Yantra</option>
                        </select>
                    </div>
                    <button onClick={handleGenerate} className="w-full bg-gradient-to-r from-accent-teal to-blue-500 text-primary-dark py-3 px-10 rounded-full text-lg font-semibold cursor-pointer transition-all duration-300 shadow-teal-glow hover:-translate-y-1 hover:shadow-teal-glow-hover">
                        Generate & Visualize
                    </button>
                    {message.text && (
                        <div className={`mt-6 p-4 rounded-lg text-center font-semibold ${message.type === 'success' ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`}>
                            {message.text}
                        </div>
                    )}
                </div>

                {/* Viewer Column */}
                <div className="lg:col-span-3">
                    <h3 className="text-2xl font-semibold mb-6 text-center sm:text-left">2. Interactive 3D Model</h3>
                    <div ref={mountRef} className="w-full min-h-[450px] rounded-xl relative bg-primary-dark overflow-hidden border border-primary-mid cursor-grab active:cursor-grabbing flex items-center justify-center">
                        {!isSceneInitialized && !isLoading && (
                            <div className="text-center text-text-light/50">
                                <p className="text-lg">Click "Generate" to visualize</p>
                                <p>the 3D Yantra Model</p>
                            </div>
                        )}
                        {isLoading && (
                            <div className="w-12 h-12 border-4 border-t-accent-teal border-primary-mid rounded-full animate-spin-slow"></div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Generator;