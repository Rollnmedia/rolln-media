"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function DigitalGlobe() {
  const group = useRef();

  useFrame((state) => {
    if (!group.current) return;

    const t = state.clock.getElapsedTime();

    group.current.rotation.y = t * 0.18;
    group.current.rotation.x = Math.sin(t * 0.25) * 0.08;
  });

  return (
    <group ref={group}>

      {/* Core */}
      <mesh>
        <sphereGeometry args={[1.35, 64, 64]} />

        <meshStandardMaterial
          color="#3156a6"
          metalness={0.65}
          roughness={0.2}
          emissive="#17346f"
          emissiveIntensity={0.7}
        />
      </mesh>

      {/* Digital wireframe */}
      <mesh scale={1.015}>
        <sphereGeometry args={[1.35, 32, 20]} />

        <meshBasicMaterial
          color="#6e8ed8"
          wireframe
          transparent
          opacity={0.28}
        />
      </mesh>

      {/* Orange inner glow */}
      <mesh scale={0.65}>
        <sphereGeometry args={[1.35, 32, 32]} />

        <meshBasicMaterial
          color="#f47a20"
          transparent
          opacity={0.08}
        />
      </mesh>

    </group>
  );
}

function Orbit({ radius, rotation, color, speed }) {
  const ref = useRef();

  useFrame((state) => {
    if (!ref.current) return;

    ref.current.rotation.z =
      state.clock.getElapsedTime() * speed;
  });

  return (
    <mesh
      ref={ref}
      rotation={rotation}
    >
      <torusGeometry
        args={[radius, 0.012, 16, 128]}
      />

      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.7}
      />
    </mesh>
  );
}

function GrowthArrow() {
  const group = useRef();

  useFrame((state) => {
    if (!group.current) return;

    group.current.position.y =
      Math.sin(state.clock.getElapsedTime() * 1.2) * 0.08;
  });

  return (
    <group
      ref={group}
      position={[0.1, 0, 1.55]}
      rotation={[0, 0, -0.45]}
    >

      {/* Arrow shaft */}
      <mesh>
        <boxGeometry args={[0.12, 1.6, 0.12]} />

        <meshStandardMaterial
          color="#f47a20"
          emissive="#f47a20"
          emissiveIntensity={1.5}
          metalness={0.4}
          roughness={0.2}
        />
      </mesh>

      {/* Arrow head */}
      <mesh
        position={[0, 0.85, 0]}
        rotation={[0, 0, 0]}
      >
        <coneGeometry args={[0.3, 0.55, 3]} />

        <meshStandardMaterial
          color="#f47a20"
          emissive="#f47a20"
          emissiveIntensity={1.5}
        />
      </mesh>

    </group>
  );
}

function FloatingLabel({ text, position, color }) {
  return (
    <Float
      speed={1.4}
      rotationIntensity={0.15}
      floatIntensity={0.4}
    >
      <group position={position}>

        <mesh>
          <planeGeometry args={[1.25, 0.42]} />

          <meshBasicMaterial
            color="#0d111b"
            transparent
            opacity={0.9}
          />
        </mesh>

        <Text
          position={[0, 0, 0.03]}
          fontSize={0.14}
          color={color}
          anchorX="center"
          anchorY="middle"
        >
          {text}
        </Text>

      </group>
    </Float>
  );
}

function Particles() {
  const ref = useRef();

  useFrame((state) => {
    if (!ref.current) return;

    ref.current.rotation.y =
      state.clock.getElapsedTime() * 0.04;

    ref.current.rotation.x =
      state.clock.getElapsedTime() * 0.02;
  });

  const particles = [];

  for (let i = 0; i < 80; i++) {
    const radius = 2.2 + Math.random() * 1.8;
    const angle = Math.random() * Math.PI * 2;

    particles.push(
      <mesh
        key={i}
        position={[
          Math.cos(angle) * radius,
          (Math.random() - 0.5) * 3.5,
          Math.sin(angle) * radius,
        ]}
      >
        <sphereGeometry args={[0.018, 8, 8]} />

        <meshBasicMaterial
          color={
            Math.random() > 0.5
              ? "#3156a6"
              : "#f47a20"
          }
          transparent
          opacity={0.65}
        />
      </mesh>
    );
  }

  return <group ref={ref}>{particles}</group>;
}

function Scene() {
  return (
    <>
      <ambientLight intensity={1.4} />

      <directionalLight
        position={[4, 5, 6]}
        intensity={3}
      />

      <pointLight
        position={[2, 1, 3]}
        color="#3156a6"
        intensity={8}
        distance={8}
      />

      <pointLight
        position={[-2, -1, 2]}
        color="#f47a20"
        intensity={6}
        distance={7}
      />

      <Float
        speed={1}
        rotationIntensity={0.12}
        floatIntensity={0.45}
      >
        <DigitalGlobe />

        <GrowthArrow />

        <Orbit
          radius={1.9}
          rotation={[0.5, 0.2, 0]}
          color="#3156a6"
          speed={0.15}
        />

        <Orbit
          radius={2.2}
          rotation={[1.2, 0.3, 0]}
          color="#f47a20"
          speed={-0.1}
        />

        <Orbit
          radius={2.55}
          rotation={[0.2, 1, 0]}
          color="#3156a6"
          speed={0.08}
        />
      </Float>

      <FloatingLabel
        text="SEO"
        position={[-2.2, 0.9, 0]}
        color="#6e8ed8"
      />

      <FloatingLabel
        text="ADS"
        position={[2.0, 1.1, 0]}
        color="#f47a20"
      />

      <FloatingLabel
        text="LEADS"
        position={[2.0, -1.1, 0]}
        color="#6e8ed8"
      />

      <FloatingLabel
        text="WEB"
        position={[-2.0, -1.2, 0]}
        color="#f47a20"
      />

      <Particles />
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
