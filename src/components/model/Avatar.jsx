import { useGLTF } from "@react-three/drei";
import { Suspense, useRef } from "react";
import { useConfigratorStore } from "../../store";
import Asset from "../Asset";

export default function Avatar({ ...props }) {
  const group = useRef();
  const { nodes } = useGLTF("models/Armature.glb");
  const customization = useConfigratorStore((state) => state.customization);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Armature"
          position-y={1}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
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
