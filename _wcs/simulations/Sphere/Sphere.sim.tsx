import { createSimulation } from '@wixc3/react-simulation';
import Sphere from '../../../src/Components/Shapes/Sphere';
import { SimulationSceneWrapper } from '../../../src/Helpers/wrappers';

export default createSimulation({
    name: 'Sphere',
    componentType: Sphere,
    props: {},
    wrapper: SimulationSceneWrapper
});
