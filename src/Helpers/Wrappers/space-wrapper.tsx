import { Canvas } from '@react-three/fiber';
import type { ISimulationWrapperProps } from '@wixc3/react-simulation';
import defaultSkybox from '../../Assets/SkyBoxes/default-skybox/default-skybox';
import CameraControls from '../../Components/Utils/CameraControls';
import Skybox from '../../Components/Utils/Skybox';

export const InteractiveSpaceSceneWrapper: React.FC<ISimulationWrapperProps<any>> =
({renderSimulation}) => 
<Canvas>
    <ambientLight />
    <pointLight position={[10, 10, 10]}></pointLight>
    {renderSimulation()}
    <CameraControls />
    <Skybox skyBoxTexture={defaultSkybox} />
</Canvas>

