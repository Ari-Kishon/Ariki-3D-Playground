
import { createSimulation } from '@wixc3/react-simulation';
import Box from '../../../src/Components/Shapes/Box';
import {SimulationSceneWrapper} from '../../../src/Helpers/wrappers';
export default createSimulation({
    name: 'Box',
    componentType: Box,
    props: {},
    wrapper : SimulationSceneWrapper
});
