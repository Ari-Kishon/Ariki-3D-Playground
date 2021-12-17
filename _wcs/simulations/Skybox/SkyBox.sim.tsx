import { createSimulation } from '@wixc3/react-simulation';
import Skybox from '../../../src/Components/Utils/Skybox';
import { SimulationSceneWrapper } from '../../../src/Helpers/wrappers';

export default createSimulation({
    name: 'SkyBox',
    componentType: Skybox,
    props: {},
    wrapper: SimulationSceneWrapper
});
