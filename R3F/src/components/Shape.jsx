import { React, useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Shape() {
  useFrame((state, delta) => {
    torusRef.current.rotation.y += delta;
    torusPRef.current.rotation.y += delta;
    boxRef.current.rotation.y += delta;
    boxRRef.current.rotation.y += delta;
    sphereRef.current.rotation.y += delta;
    latheRef.current.rotation.y += delta;
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  const torusRef = useRef();
  const torusPRef = useRef();
  const boxRef = useRef();
  const boxRRef = useRef();
  const sphereRef = useRef();
  const latheRef = useRef();
  const groupRef = useRef();

  return (
    <>
      <OrbitControls makeDefault />
      <group ref={groupRef}>
        <mesh ref={torusPRef} position={[-3, 0, 0]} rotation-x={0.1} wireframe>
          <torusGeometry />
          <meshBasicMaterial color="purple" />
        </mesh>
        <mesh ref={boxRRef} position={[4, 0, -3]} rotation-x={0.2} wireframe>
          <boxGeometry />
          <meshBasicMaterial color="red" />
        </mesh>
        <mesh ref={sphereRef} position={[0, 0, -3]} rotation-x={0.3} wireframe>
          <sphereGeometry />
          <meshBasicMaterial color="orange" />
        </mesh>
        <mesh ref={latheRef} position={[5, 0, 0]} rotation-x={0.4} wireframe>
          <latheGeometry />
          <meshBasicMaterial color="green" />
        </mesh>

        <mesh ref={boxRef} position={[0, 0, 3]} rotation-x={0.3} wireframe>
          <boxGeometry />
          <meshBasicMaterial color="yellow" />
        </mesh>
        <mesh ref={torusRef} position={[4, 0, 3]} rotation-x={0.4} wireframe>
          <torusGeometry />
          <meshBasicMaterial color="pink" />
        </mesh>
      </group>
    </>
  );
}
