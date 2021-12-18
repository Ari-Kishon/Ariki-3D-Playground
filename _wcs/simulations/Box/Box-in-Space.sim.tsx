
import { createSimulation } from '@wixc3/react-simulation';
import Box from '../../../src/Components/Shapes/Box';
import { SpaceSceneWrapper } from '../../../src/Helpers/Wrappers';

export default createSimulation({
    name: 'Box in Space',
    componentType: Box,
    props: {
        color: {
            primary: '#e00e0e',
            secondary: '2312'
        },
        meshProps: {
            position: [1, 1, 1]
        }
    },
    wrapper: SpaceSceneWrapper,
    environmentProps: {
        canvasHeight: 452,
        canvasWidth: 836
    }
});
