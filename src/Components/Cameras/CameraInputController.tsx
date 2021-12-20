import { useFrame, useThree } from "@react-three/fiber";
import { Vector3 } from "three";
import { OrbitControls } from 'three-stdlib';

interface ICameraInputControllerProps {
  target?: {
    x: number,
    y: number,
    z: number,
  }
  speed?:number;
}

const ManualCamera = ({target = {x:0,y:0,z:0}, speed = 2}:ICameraInputControllerProps) => {
    const {
      camera,
      gl: { domElement },
    } = useThree();
    const controls = new OrbitControls( camera, domElement);
    controls.target = new Vector3(target.x,target.y,target.z)
    controls.panSpeed = speed
    useFrame(() => controls.update());
    return null
  };
ManualCamera.displayName = 'Camera_Manual'
export default ManualCamera;