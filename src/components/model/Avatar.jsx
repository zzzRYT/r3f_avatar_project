import { useGLTF } from "@react-three/drei";
import { Suspense, useRef } from "react";
import { useConfigratorStore } from "../../store";
import Asset from "../Asset";

export default function Avatar({ ...props }) {
  const group = useRef();
  const { nodes } = useGLTF("models/crash_dummy.glb");
  const customization = useConfigratorStore((state) => state.customization);
  console.log(nodes);
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.009}>
        <primitive object={nodes._rootJoint} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        {Object.keys(customization).map(
          (key) =>
            customization[key]?.asset?.url && (
              <Suspense key={customization[key].asset.id}>
                <Asset url={customization[key].asset.url} />
              </Suspense>
            )
        )}
      </group>
    </group>
  );
}
