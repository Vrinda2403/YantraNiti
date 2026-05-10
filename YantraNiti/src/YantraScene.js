import React, { useMemo } from 'react';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

const SamratYantra = ({ data }) => {
  const { gnomon_angle, sun_altitude, sun_azimuth } = data;

  // Calculate Sun position in Cartesian coordinates
  const sunPos = useMemo(() => {
    const phi = (90 - sun_altitude) * (Math.PI / 180);
    const theta = (sun_azimuth - 90) * (Math.PI / 180); // Adjusting for Three.js coordinate system
    const radius = 40;
    return new THREE.Vector3(
      radius * Math.sin(phi) * Math.cos(theta),
      radius * Math.cos(phi),
      radius * Math.sin(phi) * Math.sin(theta)
    );
  }, [sun_altitude, sun_azimuth]);

  // Create Parametric Gnomon based on Latitude
  const gnomonGeometry = useMemo(() => {
    const shape = new THREE.Shape();
    const height = 10;
    const base = height / Math.tan(gnomon_angle * (Math.PI / 180));
    
    shape.moveTo(0, 0);
    shape.lineTo(base, 0);
    shape.lineTo(0, height);
    shape.lineTo(0, 0);

    return new THREE.ExtrudeGeometry(shape, { depth: 0.5, bevelEnabled: false });
  }, [gnomon_angle]);

  return (
    <group>
      {/* 1. THE GNOMON (Triangular Wall) */}
      <mesh geometry={gnomonGeometry} castShadow receiveShadow position={[-0.25, 0, 0]}>
        <meshStandardMaterial color="#8b5e3c" />
      </mesh>

      {/* 2. THE QUADRANTS (Curved Time Scales) */}
      <mesh rotation={[Math.PI / 2, 0, 0]} receiveShadow position={[0, 0.1, 0]}>
        <torusGeometry args={[12, 0.3, 16, 100, Math.PI]} />
        <meshStandardMaterial color="#d4a373" />
      </mesh>

      {/* 3. LIGHT SOURCE (The Sun) */}
      <directionalLight
        position={sunPos}
        intensity={2.5}
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
      />
      
      {/* Visual Sun Marker */}
      <mesh position={sunPos}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshBasicMaterial color="#ffcc00" />
      </mesh>

      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    </group>
  );
};

export default SamratYantra;