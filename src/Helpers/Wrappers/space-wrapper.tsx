import { Canvas } from '@react-three/fiber';
import type { ISimulationWrapperProps } from '@wixc3/react-simulation';
import defaultSkybox from '../../Assets/SkyBoxes/default-skybox/default-skybox';
import OrbitalCameraRotation from '../../Components/Utils/OrbitalCameraRotation';
import Skybox from '../../Components/Utils/Skybox';

export const SpaceSceneWrapper: React.FC<ISimulationWrapperProps<any>> =
({renderSimulation}) => 
<Canvas>
    <ambientLight />
    <pointLight position={[10, 10, 10]}></pointLight>
    {renderSimulation()}
    <OrbitalCameraRotation />
    <Skybox skyBoxTexture={defaultSkybox} />
</Canvas>

