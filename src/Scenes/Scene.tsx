import defaultSkybox from '../Assets/SkyBoxes/default-skybox/default-skybox';
import Box from '../Components/Shapes/Box'
import Sphere from '../Components/Shapes/Sphere'
import CameraControls from '../Components/Utils/CameraControls';
import Skybox from '../Components/Utils/Skybox';

const Scene = () => <>

    <ambientLight />
    <pointLight position={[10, 10, 10]}></pointLight>
    <Box position={[0, 0, 0]}></Box>
    <Sphere position={[3, 0, 0]}>
    </Sphere>
    <CameraControls/>
    <Skybox skyBoxTexture={defaultSkybox}/>
</>

export default Scene