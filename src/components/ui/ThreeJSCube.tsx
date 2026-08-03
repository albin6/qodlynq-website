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

    // Base Material
    const material = new THREE.MeshPhongMaterial({
      color: 0x475569, // Slate 600
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });

    // Helper to create a cube group
    const createCubeGroup = (scale: number, posX: number, posZ: number, opacity: number) => {
      const g = new THREE.Group();
      
      const mat = material.clone();
      mat.opacity = opacity;

      const innerCube = new THREE.Mesh(
        new THREE.BoxGeometry(1.2 * scale, 1.2 * scale, 1.2 * scale),
        mat
      );
      g.add(innerCube);

      const outerCube = new THREE.Mesh(
        new THREE.BoxGeometry(2 * scale, 2 * scale, 2 * scale),
        mat
      );
      g.add(outerCube);

      g.position.set(posX, 0, posZ);
      scene.add(g);
      
      return { group: g, mat, innerCube, outerCube };
    };

    // Dynamic scaling based on screen size
    const isMobile = width < 768;
    const centerScale = isMobile ? 0.8 : 1;
    const sideScale = isMobile ? 0.4 : 0.6;
    const sideOffset = isMobile ? 1.5 : 2.2;

    const centerCube = createCubeGroup(centerScale, 0, 0, 0.6);
    const leftCube = createCubeGroup(sideScale, -sideOffset, -1, 0.4);
    const rightCube = createCubeGroup(sideScale, sideOffset, -1, 0.4);

    const allCubes = [centerCube, leftCube, rightCube];

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

      allCubes.forEach((c, i) => {
        const { group } = c;
        
        // Slightly different rotation speeds/directions for left/right
        const dir = i === 1 ? -1 : 1; 
        
        group.rotation.y += 0.005 * dir;
        group.rotation.x += 0.003;

        // Subtle reaction to mouse
        group.rotation.y += mouseX * 0.05 * dir;
        group.rotation.x += mouseY * 0.05;

        // Floating motion with slight offset for each cube
        group.position.y = Math.sin(t * 0.001 + i) * 0.2;
      });

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
      allCubes.forEach((c) => {
        c.mat.dispose();
        c.innerCube.geometry.dispose();
        c.outerCube.geometry.dispose();
      });
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full bg-transparent z-0 pointer-events-none">
      <div ref={containerRef} className="w-full h-full" />
    </div>
  );
}
