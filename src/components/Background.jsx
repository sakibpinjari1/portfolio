import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Stars() {
  const ref = useRef();
  const { mouse } = useThree();
  const [sphere] = useMemo(() => {
    const sphere = new Float32Array(3000 * 3);
    for (let i = 0; i < 3000; i++) {
      sphere[i * 3] = (Math.random() - 0.5) * 20;
      sphere[i * 3 + 1] = (Math.random() - 0.5) * 20;
      sphere[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return [sphere];
  }, []);

  useFrame((state, delta) => {
    ref.current.rotation.x = mouse.y * 0.1 - delta / 10;
    ref.current.rotation.y = mouse.x * 0.1 - delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          color="#ffffff"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function FloatingCubes() {
  const cubesRef = useRef([]);

  const cubes = useMemo(() => {
    return Array.from({ length: 15 }, (__, i) => ({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
      ],
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI],
      scale: Math.random() * 0.5 + 0.5,
    }));
  }, []);

  useFrame((state) => {
    cubesRef.current.forEach((cube, i) => {
      if (cube) {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        cube.position.y += Math.sin(state.clock.elapsedTime + i) * 0.002;
      }
    });
  });

  return (
    <>
      {cubes.map((cube, i) => (
        <mesh
          key={i}
          ref={(el) => (cubesRef.current[i] = el)}
          position={cube.position}
          rotation={cube.rotation}
          scale={cube.scale}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            color={`hsl(${200 + i * 10}, 70%, 60%)`}
          />
        </mesh>
      ))}
    </>
  );
}

function Particles() {
  const ref = useRef();
  const [particles] = useMemo(() => {
    const particles = new Float32Array(1000 * 3);
    for (let i = 0; i < 1000; i++) {
      particles[i * 3] = (Math.random() - 0.5) * 30;
      particles[i * 3 + 1] = (Math.random() - 0.5) * 30;
      particles[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }
    return [particles];
  }, []);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 20;
    ref.current.rotation.y -= delta / 25;
  });

  return (
    <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        color="#4f46e5"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        transparent
        opacity={0.6}
      />
    </Points>
  );
}

function FloatingTorus() {
  const torusRef = useRef();

  useFrame((state) => {
    if (torusRef.current) {
      torusRef.current.rotation.x += 0.005;
      torusRef.current.rotation.y += 0.01;
      torusRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5;
    }
  });

  return (
    <mesh ref={torusRef} position={[5, 0, -5]}>
      <torusKnotGeometry args={[1, 0.4, 100, 16]} />
      <meshStandardMaterial color="#ff6b6b" wireframe />
    </mesh>
  );
}

const Background = () => {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 1], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Stars />
        <Particles />
        <FloatingCubes />
        <FloatingTorus />
      </Canvas>
    </div>
  );
};

export default Background;