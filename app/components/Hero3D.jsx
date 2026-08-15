"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function CursorCore() {
  const group = useRef();

  useFrame((state) => {
    if (!group.current) return;

    const t = state.clock.getElapsedTime();

    group.current.rotation.y = Math.sin(t * 0.5) * 0.25;
    group.current.rotation.x = Math.cos(t * 0.4) * 0.12;
  });

  return (
    <group ref={group} rotation={[0, 0, -0.35]}>
      {/* Main cursor body */}
      <mesh position={[0, 0, 0.15]} rotation={[0, 0, -0.15]}>
        <coneGeometry args={[0.72, 2.6, 3]} />
        <meshStandardMaterial
          color="#f47a20"
          metalness={0.35}
          roughness={0.22}
          emissive="#6b2500"
          emissiveIntensity={0.35}
        />
      </mesh>

      {/* Blue core */}
      <mesh position={[0.05, -0.25, 0.45]}>
        <sphereGeometry args={[0.42, 32, 32]} />
        <MeshDistortMaterial
          color="#3156a6"
          metalness={0.45}
          roughness={0.18}
          distort={0.25}
          speed={1.5}
        />
      </mesh>

      {/* Orange energy point */}
      <mesh position={[0, 0.85, 0.5]}>
        <sphereGeometry args={[0.12, 20, 20]} />
        <meshStandardMaterial
          color="#ff9a4a"
          emissive="#f47a20"
          emissiveIntensity={2}
        />
      </mesh>
    </group>
  );
}

function OrbitRing({ scale = 1, rotation = [0, 0, 0] }) {
  const ring = useRef();

  useFrame((state) => {
    if (!ring.current) return;

    const t = state.clock.getElapsedTime();

    ring.current.rotation.z = t * 0.12;
    ring.current.rotation.x =
      rotation[0] + Math.sin(t * 0.3) * 0.08;
  });

  return (
    <mesh ref={ring} scale={scale} rotation={rotation}>
      <torusGeometry args={[2.15, 0.008, 16, 128]} />
      <meshBasicMaterial
        color="#3156a6"
        transparent
        opacity={0.45}
      />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={1.2} />

      <directionalLight
        position={[3, 4, 5]}
        intensity={3}
        color="#ffffff"
      />

      <pointLight
        position={[2, 1, 3]}
        intensity={8}
        distance={8}
        color="#3156a6"
      />

      <pointLight
        position={[-2, -1, 2]}
        intensity={5}
        distance={7}
        color="#f47a20"
      />

      <Float
        speed={1.4}
        rotationIntensity={0.25}
        floatIntensity={0.7}
      >
        <CursorCore />
      </Float>

      <OrbitRing scale={1} />
      <OrbitRing
        scale={1.25}
        rotation={[Math.PI / 3, 0, 0]}
      />
      <OrbitRing
        scale={1.5}
        rotation={[Math.PI / 2.5, 0.5, 0]}
      />
    </>
  );
}

export default function Hero3D() {
  return (
    <div className="hero-3d">
      <Canvas
        camera={{
          position: [0, 0, 7],
          fov: 45,
        }}
        dpr={[1, 1.5]}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
