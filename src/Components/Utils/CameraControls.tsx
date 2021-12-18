import { useFrame, useThree } from "@react-three/fiber";
import { Vector3 } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

interface ICameraControlProps {
  centerPosition?: {
    x: number,
    y: number,
    z: number,
  }
}

const CameraControls = ({centerPosition = new Vector3(0,0,0)}:ICameraControlProps) => {
    const {
      camera,
      gl: { domElement },
    } = useThree();
    const controls = new OrbitControls( camera, domElement);
    useFrame(() => controls.update());
    return null
  };

export default CameraControls;