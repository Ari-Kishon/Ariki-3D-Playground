import { useThree } from "@react-three/fiber";
import { ColorRepresentation, CubeTextureLoader } from "three";
import defaultSkybox from "../../Assets/SkyBoxes/default-skybox/default-skybox";

export interface ISkyboxProps{
    color: [color: ColorRepresentation]
    | [r: number, g: number, b: number]
    | undefined,
    skyBoxTexture: string[];
}

const SkyBox = ({skyBoxTexture = defaultSkybox}  :ISkyboxProps ) => {
    const { scene } = useThree();
    const loader = new CubeTextureLoader();
    const texture = loader.load(skyBoxTexture);
    // Set the scene background property to the resulting texture.
    scene.background = texture;
    return null
  }
  export default SkyBox;