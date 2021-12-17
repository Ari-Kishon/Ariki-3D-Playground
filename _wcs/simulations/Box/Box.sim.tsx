
import { createSimulation } from '@wixc3/react-simulation';
import Box from '../../../src/Components/Shapes/Box';
import { defaultSceneWrapper } from '../../../src/Helpers/Wrappers/default-wrapper';

export default createSimulation({
    name: 'Box',
    componentType: Box,
    props: {
    },
    wrapper: defaultSceneWrapper
});
