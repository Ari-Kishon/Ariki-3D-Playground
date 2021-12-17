
import { createSimulation } from '@wixc3/react-simulation';
import Scene from '../../../src/Scenes/Scene';
import { defaultSceneWrapper } from '../../../src/Helpers/Wrappers';

export default createSimulation({
    name: 'Scene',
    componentType: Scene,
    props: {},
    wrapper: defaultSceneWrapper,
    environmentProps: {
        canvasHeight: 696,
        canvasWidth: 1010
    }
});
