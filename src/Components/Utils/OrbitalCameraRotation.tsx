import { useFrame, useThree } from "@react-three/fiber";
import { Vector3 } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

interface IOrbitalRotationProps {
  centerPosition?: {
    x: number,
    y: number,
    z: number,
  }
}

const OrbitalCameraRotation = ({centerPosition = new Vector3(0,0,0)}:IOrbitalRotationProps) => {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  const controls = new OrbitControls( camera, domElement);
    controls.enabled = false;
    controls.autoRotate = true
    useFrame(() => controls.update());
    return null
  };

export default OrbitalCameraRotation;