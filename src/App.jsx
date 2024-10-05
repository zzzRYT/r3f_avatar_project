import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { UI } from "./components/UI";
import Experience from "./components/Experience";

function App() {
  return (
    <>
      <UI />
      <Canvas
        camera={{
          position: [0, 7, 0],
        }}
        shadows
      >
        <color attach="background" args={["#555"]} />
        <fog attach="fog" args={["#555", 15, 25]} />
        <group position-y={1}>
          <Experience />
        </group>
      </Canvas>
    </>
  );
}

export default App;
