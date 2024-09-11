import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import useMediaQuery from "../../hooks/useMediaQuery";
const Computers = ({ isMobile }) => {
	const computer = useGLTF("./desktop_pc/scene.gltf");
  
	return (
	  <mesh>
		<hemisphereLight intensity={0.15} groundColor="#f8fafc" />
		<spotLight
		  position={[-20, 50, 10]}
		  angle={0.12}
		  penumbra={1}
		  intensity={1}
		  castShadow
		  shadow-mapSize={1024}
		  color="#455A64"
		/>
		<pointLight intensity={1} color="#8BC34A" />
		<primitive
		  object={computer.scene}
		  scale={isMobile ? 0.5 : 0.75}
		  position={isMobile ? [0, -3, -0.4] : [0, -3.25, -1.5]}
		  rotation={[-0.01, -0.2, -0.1]}
		  material={{
			color: "#455A64",
			metalness: 0.5,
			roughness: 0.5,
		  }}
		/>
	  </mesh>
	);
  };

const ComputersCanvas = () => {
	const isMobile = useMediaQuery("(max-width : 600px)");

	return (
		<Canvas
			frameloop="demand"
			shadows
			dpr={[1, 2]}
			camera={{ position: [20, 3, 5], fov: 25 }}
			gl={{ preserveDrawingBuffer: true }}
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<Computers isMobile={isMobile} />
			</Suspense>

			<Preload all />
		</Canvas>
	);
};

export default ComputersCanvas;
