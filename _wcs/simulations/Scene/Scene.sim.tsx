
import { createSimulation } from '@wixc3/react-simulation';
import Scene from '../../../src/Scenes/Scene';
import { SimulationSceneWrapper } from '../../../src/Helpers/wrappers';

export default createSimulation({
    name: 'Scene',
    componentType: Scene,
    props: {},
    wrapper:SimulationSceneWrapper
});
