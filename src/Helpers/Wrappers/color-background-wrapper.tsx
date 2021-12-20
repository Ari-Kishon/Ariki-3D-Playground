import { Canvas } from '@react-three/fiber';
import type { ISimulationWrapperProps } from '@wixc3/react-simulation';
import Background from '../../Components/Utils/Background';
import {OrbitalCamera} from '../../Components/Cameras';

export const colorBackgroundWrapper = (color:string):React.FC<ISimulationWrapperProps<any>> => 
({renderSimulation}) => 
<Canvas>
    <ambientLight />
    <pointLight position={[10, 10, 10]}></pointLight>
    {renderSimulation()}
    <Background color={color}/>
    <OrbitalCamera />
</Canvas>

