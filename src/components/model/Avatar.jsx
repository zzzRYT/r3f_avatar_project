import { useGLTF } from "@react-three/drei";
import { Suspense, useRef } from "react";
import { useConfigratorStore } from "../../store";
import Asset from "../Asset";

export default function Avatar({ ...props }) {
  const group = useRef();
  const { nodes } = useGLTF("models/Armature.glb");
  const customization = useConfigratorStore((state) => state.customization);
  console.log(nodes);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Armature"
          position={[0, 0, 0]}
          rotation={[Math.PI / 4, 0, 0]}
          scale={0.0005}
        >
          <primitive object={nodes.mixamorigHips} />
          {Object.keys(customization).map(
            (key) =>
              customization[key]?.asset?.url && (
                <Suspense key={customization[key].asset.id}>
                  <Asset
                    url={customization[key].asset.url}
                    skeleton={nodes.Plane.skeleton}
                  />
                </Suspense>
              )
          )}
        </group>
      </group>
    </group>
  );
}
