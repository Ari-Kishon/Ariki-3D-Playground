import { useFrame, useThree } from "@react-three/fiber";
import { Vector3 } from "three";
import { OrbitControls } from 'three-stdlib';


interface IOrbitalCameraRotatorProps {
  target?: {
    x: number,
    y: number,
    z: number,
  }
  speed?:number;
}

export const OrbitalCamera = ({target = {x:0,y:0,z:0},speed = 2}:IOrbitalCameraRotatorProps) => {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  const controls = new OrbitControls( camera, domElement);
    controls.enabled = false;
    controls.autoRotate = true
    controls.autoRotateSpeed = speed
    controls.target = new Vector3(target.x,target.y,target.z)
    useFrame(() => controls.update());
    return null
  };
 OrbitalCamera.displayName = 'Camera_Orbital'