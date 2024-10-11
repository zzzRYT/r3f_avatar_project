export default function WireFrame(position) {
  return (
    <mesh position={position} scale={10}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial />
    </mesh>
  );
}
