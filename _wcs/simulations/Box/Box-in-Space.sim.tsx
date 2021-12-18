
import { createSimulation } from '@wixc3/react-simulation';
import Box from '../../../src/Components/Shapes/Box';
import { SpaceSceneWrapper } from '../../../src/Helpers/Wrappers';

export default createSimulation({
    name: 'Box in Space',
    componentType: Box,
    props: {
        color: {
            primary: '#329ea2',
            secondary: '2312'
        },
        meshProps: {
            position: [0, 0, 0]
        }
    },
    wrapper: SpaceSceneWrapper,
    environmentProps: {
        canvasHeight: 452,
        canvasWidth: 836
    }
});
