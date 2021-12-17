import { useThree } from "@react-three/fiber";
import { CubeTextureLoader } from "three";
import defaultSkybox from "../../Assets/SkyBoxes/default-skybox/default-skybox";
import { colorProp } from "../../types/color";


const SkyBox = ({color = [0,0,0]}: colorProp)=> {
    const { scene } = useThree();
    const loader = new CubeTextureLoader();
    // The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.
    const texture = loader.load(defaultSkybox);
    // Set the scene background property to the resulting texture.
    scene.background = texture;
    return <color/>
  }
  export default SkyBox;