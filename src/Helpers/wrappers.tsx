import { Canvas } from '@react-three/fiber';
import type { ISimulationWrapperProps } from '@wixc3/react-simulation';

export const SimulationSceneWrapper: React.FC<ISimulationWrapperProps<any>> =
({renderSimulation}) => 
<Canvas>
    <ambientLight />
    <pointLight position={[10, 10, 10]}></pointLight>
    {renderSimulation()}
</Canvas>
