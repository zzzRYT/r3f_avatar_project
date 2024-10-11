import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { UI } from "./components/UI";
import Experience from "./components/Experience";
import TextCover from "./components/model/TextCover";

function App() {
  return (
    <>
      <UI />
      <div style={{ width: "80vw", height: "80vh" }}>
        <Canvas
          camera={{
            position: [0, 7, 4],
          }}
          shadows
        >
          <color attach="background" args={["#555"]} />
          <fog attach="fog" args={["#555", 15, 25]} />
          <group position-y={1}>
            <Experience />
          </group>
        </Canvas>
      </div>
    </>
  );
}

export default App;
