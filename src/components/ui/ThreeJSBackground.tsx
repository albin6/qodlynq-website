"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function ThreeJSBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    let width = container.clientWidth;
    let height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // Dynamic Lattice Structure
    const boxGeom = new THREE.BoxGeometry(3, 3, 3, 4, 4, 4);
    const wireframe = new THREE.WireframeGeometry(boxGeom);
    const lineMat = new THREE.LineBasicMaterial({ 
      color: 0x121212, 
      transparent: true, 
      opacity: 0.15 
    });
    const lattice = new THREE.LineSegments(wireframe, lineMat);
    group.add(lattice);

    // Floating Nodes
    const nodeGeom = new THREE.SphereGeometry(0.03, 8, 8);
    const nodeMat = new THREE.MeshBasicMaterial({ color: 0x121212 });
    for(let i=0; i<20; i++) {
        const node = new THREE.Mesh(nodeGeom, nodeMat);
        node.position.set(
            (Math.random() - 0.5) * 3,
            (Math.random() - 0.5) * 3,
            (Math.random() - 0.5) * 3
        );
        group.add(node);
    }

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) - 0.5;
      mouseY = (event.clientY / window.innerHeight) - 0.5;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      if (!containerRef.current) return;
      width = containerRef.current.clientWidth;
      height = containerRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;
      
      group.rotation.y += 0.002;
      group.rotation.x = targetY * 0.5;
      group.rotation.y += targetX * 0.5;
      
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      geometryDispose(boxGeom);
      geometryDispose(wireframe);
      geometryDispose(nodeGeom);
      materialDispose(lineMat);
      materialDispose(nodeMat);
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 z-0 opacity-20 w-full h-full" />;
}

// Helpers to clean up Three.js memory
function geometryDispose(geometry: THREE.BufferGeometry) {
    geometry.dispose();
}
function materialDispose(material: THREE.Material) {
    material.dispose();
}
