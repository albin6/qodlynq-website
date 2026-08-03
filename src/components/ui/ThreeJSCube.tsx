"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export function ThreeJSCube() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Engineering-inspired geometry: A wireframe structure composed of nested cubes
    const group = new THREE.Group();
    scene.add(group);

    const material = new THREE.MeshPhongMaterial({
      color: 0x475569, // Slate 600
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });

    const innerCube = new THREE.Mesh(
      new THREE.BoxGeometry(1.2, 1.2, 1.2),
      material
    );
    group.add(innerCube);

    const outerCube = new THREE.Mesh(
      new THREE.BoxGeometry(2, 2, 2),
      material
    );
    group.add(outerCube);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Interaction
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX / window.innerWidth - 0.5;
      mouseY = e.clientY / window.innerHeight - 0.5;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    let animationFrameId: number;

    function animate(t: number) {
      animationFrameId = requestAnimationFrame(animate);

      group.rotation.y += 0.005;
      group.rotation.x += 0.003;

      // Subtle reaction to mouse
      group.rotation.y += mouseX * 0.05;
      group.rotation.x += mouseY * 0.05;

      // Floating motion
      group.position.y = Math.sin(t * 0.001) * 0.2;

      renderer.render(scene, camera);
    }
    animate(0);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      container.removeChild(renderer.domElement);
      renderer.dispose();
      material.dispose();
      innerCube.geometry.dispose();
      outerCube.geometry.dispose();
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full bg-transparent z-0 pointer-events-none">
      <div ref={containerRef} className="w-full h-full" />
    </div>
  );
}
