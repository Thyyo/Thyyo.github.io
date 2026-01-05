import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box, Sphere } from '@react-three/drei';

export default function Scene3D() {
  return (
    <Canvas style={{ height: '400px', background: '#f0f0f0' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      
      <Box position={[-2, 0, 0]}>
        <meshStandardMaterial color="orange" />
      </Box>
      
      <Sphere position={[2, 0, 0]}>
        <meshStandardMaterial color="teal" />
      </Sphere>
      
      <OrbitControls />
    </Canvas>
  );
}