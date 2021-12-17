import { createSimulation } from '@wixc3/react-simulation';
import Skybox from '../../../src/Components/Utils/Skybox';
import { defaultSceneWrapper } from '../../../src/Helpers/Wrappers';

export default createSimulation({
    name: 'SkyBox',
    componentType: Skybox,
    props: {},
    wrapper: defaultSceneWrapper
});
