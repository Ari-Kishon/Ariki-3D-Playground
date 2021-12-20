
import defaultSkybox from '../Assets/SkyBoxes/default-skybox/default-skybox';
import Box from '../Components/Shapes/Box'
import Sphere from '../Components/Shapes/Sphere'
import CameraControls from '../Components/Utils/CameraControls';
import Skybox from '../Components/Utils/Skybox';
import OrbitalCameraRotation from '../Components/Utils/OrbitalCameraRotator';

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
    <OrbitalCameraRotation speed={5} />
    <CameraControls />
    <Skybox skyBoxTexture={defaultSkybox} />
</>

export default Scene