"use client";

// Suppress THREE.Clock deprecation from @react-three/fiber internals
const _origWarn = console.warn;
console.warn = (...args: unknown[]) => {
  if (typeof args[0] === "string" && args[0].includes("THREE.Clock")) return;
  _origWarn.apply(console, args);
};

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function Particles({ count = 120 }: { count?: number }) {
  const mesh = useRef<THREE.Points>(null);
  const mousePos = useRef({ x: 0, y: 0 });

  const { viewport } = useThree();

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 4;
      sizes[i] = Math.random() * 2 + 0.5;
    }
    return { positions, sizes };
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    const time = state.clock.getElapsedTime();

    // Subtle rotation following mouse
    const targetX = (state.pointer.y * 0.1);
    const targetY = (state.pointer.x * 0.1);
    mesh.current.rotation.x += (targetX - mesh.current.rotation.x) * 0.02;
    mesh.current.rotation.y += (targetY - mesh.current.rotation.y) * 0.02;

    // Gentle float
    mesh.current.position.y = Math.sin(time * 0.3) * 0.2;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles.positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#38bdf8"
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function WireframeSphere() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    const time = state.clock.getElapsedTime();

    // Mouse-reactive rotation
    mesh.current.rotation.x += (state.pointer.y * 0.3 - mesh.current.rotation.x) * 0.01;
    mesh.current.rotation.y += (state.pointer.x * 0.3 - mesh.current.rotation.y) * 0.01;
    mesh.current.rotation.z = time * 0.05;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.8, 1]} />
        <meshBasicMaterial
          wireframe
          color="#38bdf8"
          transparent
          opacity={0.15}
        />
      </mesh>
    </Float>
  );
}

function InnerGlow() {
  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.3}>
      <mesh>
        <icosahedronGeometry args={[0.6, 2]} />
        <meshBasicMaterial
          wireframe
          color="#a855f7"
          transparent
          opacity={0.2}
        />
      </mesh>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <Particles />
      <WireframeSphere />
      <InnerGlow />
    </>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 no-theme-transition" style={{ zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
