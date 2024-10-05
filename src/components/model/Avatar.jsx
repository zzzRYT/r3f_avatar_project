import { useGLTF } from "@react-three/drei";
import { Suspense, useRef } from "react";
import { useConfigratorStore } from "../../store";
import Asset from "../Asset";

export default function Avatar({ ...props }) {
  const group = useRef();
  const { nodes, materials, scene } = useGLTF("models/XBot.glb");
  const model = useGLTF("models/vest.glb");
  const customization = useConfigratorStore((state) => state.customization);
  console.log(nodes);
  console.log("111", model);
  console.log(customization);
  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={0.009}>
        <group
          name="mixamorigHips_$AssimpFbx$_Translation"
          position={[0, 104.275, 1.554]}
        >
          <group name="mixamorigHips_$AssimpFbx$_PreRotation">
            <primitive object={nodes.mixamorigHips} />
          </group>
        </group>
        <skinnedMesh
          name="Beta_Surface"
          geometry={nodes.Beta_Surface.geometry}
          skeleton={nodes.Beta_Surface.skeleton}
        />
        <skinnedMesh
          name="Beta_Joints"
          geometry={nodes.Beta_Joints.geometry}
          skeleton={nodes.Beta_Joints.skeleton}
        />
        {Object.keys(customization).map((key) => {
          console.log(key);
          return (
            customization[key]?.asset?.url && (
              <Suspense key={customization[key].asset.id}>
                <Asset
                  url={customization[key] && customization[key].asset.url}
                />
                <skinnedMesh
                  geometry={
                    customization[key].asset.geometry ||
                    nodes.Beta_Joints.geometry
                  }
                  skeleton={
                    customization[key].asset.skeleton ||
                    nodes.Beta_Joints.skeleton
                  }
                />
              </Suspense>
            )
          );
        })}
      </group>
    </group>
  );
}
