import { Backdrop, Environment, OrbitControls } from "@react-three/drei";
import Avatar from "./model/Avatar";

export default function Experience() {
  return (
    <>
      <axesHelper args={[5]} />
      <OrbitControls
        target={[0, 2, 0]}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
        minAzimuthAngle={-Math.PI / 4}
      />
      <Environment preset="sunset" environmentIntensity={0.3} />

      <Backdrop
        scale={[50, 10, 5]}
        floor={1.5} // Stretches the floor segment, 0.25 by default
        recieveShadow // Allows shadows to be cast on the floor
        position-z={-4}
        segments={20} // Mesh-resolution, 20 by default
      >
        <meshStandardMaterial color="#555" />
      </Backdrop>
      {/**key light */}
      <directionalLight
        position={[5, 5, 5]}
        intensity={2.2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bais={-0.0001}
      />
      {/**fill light */}
      <directionalLight position={[-5, 5, 5]} intensity={0.7} />
      {/**back light */}
      <directionalLight position={[1, 0.1, -5]} intensity={3} color={"red"} />
      <directionalLight position={[-1, 0.1, -5]} intensity={8} color={"blue"} />
      <Avatar />
    </>
  );
}
