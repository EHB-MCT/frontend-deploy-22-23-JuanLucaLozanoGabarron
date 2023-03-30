import React from "react";

export default function Plane() {
  return (
    <>
      <mesh position={[0, -2, 0]} rotation-x={-Math.PI / 2} scale={16}>
        <planeGeometry />
        <meshBasicMaterial color="gray" />
      </mesh>
      ;
    </>
  );
}
