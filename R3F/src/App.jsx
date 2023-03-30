import { Canvas } from "@react-three/fiber";

import "../src/App.css";
import Plane from "./components/Plane";
import Shape from "./components/Shape";

const App = () => {
  return (
    <>
      <Canvas camera={{ fov: 45, near: 0.1, far: 200, position: [3, 2, 6] }}>
        <Shape />
        <Plane />
      </Canvas>
    </>
  );
};

export default App;
