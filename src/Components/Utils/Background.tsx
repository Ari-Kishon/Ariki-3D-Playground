import { useThree } from "@react-three/fiber";
import { Color, ColorRepresentation} from "three";

export interface IBackgroundProps{
   color:ColorRepresentation;
}

const Background = ({color}  :IBackgroundProps ) => {
    const { scene } = useThree();
    scene.background = new Color(color);
    return null
  }
  export default Background;