import { Text3D, useGLTF, useHelper } from "@react-three/drei";

export default function TextCover() {
  const fontUrl = "/Bobaesum Jindo TTF_Regular.json";
  const { nodes } = useGLTF("models/Armature.glb");

  const fontStyle = {
    font: fontUrl,
    size: 0.2,
    letterSpacing: 0.01,
    height: 0.02,
    fontSize: 2,
  };

  return (
    <group>
      <group position={[0, 0, 0]}>
        {nodes.Plane.skeleton.bones.map((child, index) => {
          return (
            <Text3D
              onClick={() => console.log("clicked")}
              position={child.position}
              key={`${child}${index}`}
              {...fontStyle}
            >
              +
              <meshBasicMaterial color={"#ff0000"} />
            </Text3D>
          );
        })}
      </group>
    </group>
  );
}
