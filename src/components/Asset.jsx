import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";

export default function Asset({ url, skeleton }) {
  const { scene } = useGLTF(url);

  const attachedItems = useMemo(() => {
    const item = [];
    scene.traverse((child) => {
      if (child.isMesh) {
        item.push({
          geometry: child.geometry,
          material: child.material,
        });
      }
    });
    return item;
  }, [scene]);

  return attachedItems.map((item, index) => (
    <skinnedMesh
      key={index}
      geometry={item.geometry}
      material={item.material}
      skeleton={skeleton}
      castShadow
      receiveShadow
    />
  ));
}
