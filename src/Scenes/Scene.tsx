import { Canvas } from '@react-three/fiber'
import Box from '../Components/Shapes/Box'

const Scene = () => {
    return <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]}></pointLight>
        <Box position={[0, 0, 0]}></Box>
    </Canvas>
}

export default Scene