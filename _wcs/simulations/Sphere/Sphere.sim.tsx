import { createSimulation } from '@wixc3/react-simulation';
import Sphere from '../../../src/Components/Shapes/Sphere';
import { defaultSceneWrapper } from '../../../src/Helpers/Wrappers';

export default createSimulation({
    name: 'Sphere',
    componentType: Sphere,
    props: {},
    wrapper: defaultSceneWrapper
});
