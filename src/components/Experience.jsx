import { OrbitControls, useGLTF } from "@react-three/drei";
import Avatar from "./model/Avatar";

export default function Experience() {
  const model = useGLTF("models/vest.glb");
  return (
    <>
      <OrbitControls target={[0, 1, 0]} />
      <axesHelper args={[5]} />
      <Avatar />
    </>
  );
}
