import Box from '../Components/Shapes/Box'
import Sphere from '../Components/Shapes/Sphere'

const Scene = () => <>
        <ambientLight />
        <pointLight position={[10, 10, 10]}></pointLight>
        <Box position={[0, 0, 0]}></Box>
        <Sphere position={[3, 0, 0]} />
        </>

export default Scene