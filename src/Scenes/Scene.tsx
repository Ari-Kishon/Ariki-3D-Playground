
import defaultSkybox from '../Assets/SkyBoxes/default-skybox/default-skybox';
import Box from '../Components/Shapes/Box'
import Sphere from '../Components/Shapes/Sphere'
import Skybox from '../Components/Utils/Skybox';
import OrbitalCamera from '../Components/Cameras/OrbitalCameraRotator';
import ManualCamera from '../Components/Cameras/CameraInputController';

const Scene = () => <>

    <ambientLight />
    <pointLight position={[10, 10, 10]}></pointLight>
    <Box />
    <Sphere meshProps={{ position: [1, 0, 0] }} />
    <Sphere meshProps={{ position: [2, 0, 0] }} />
    <Sphere meshProps={{ position: [3, 0, 0] }} />
    <Sphere meshProps={{ position: [-1, 0, 0] }} />
    <Sphere meshProps={{ position: [-2, 0, 0] }} />
    <Sphere meshProps={{ position: [-3, 0, 0] }} />
    <OrbitalCamera speed={3} />
    <ManualCamera />
    <Skybox skyBoxTexture={defaultSkybox} />
</>

export default Scene