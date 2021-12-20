import { useFrame, useThree } from "@react-three/fiber";
import { FirstPersonControls } from "three-stdlib";

const FirstPersonCamera = () => {
    const {
      camera,
      gl: { domElement },
    } = useThree();
    const controls = new FirstPersonControls( camera, domElement);
    useFrame(() => controls.update(0.1));
    return null
  };
FirstPersonCamera.displayName = 'Camera_FirstPerson'
export default FirstPersonCamera;