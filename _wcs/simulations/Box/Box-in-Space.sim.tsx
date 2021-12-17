
import { createSimulation } from '@wixc3/react-simulation';
import Box from '../../../src/Components/Shapes/Box';
import { InteractiveSpaceSceneWrapper } from '../../../src/Helpers/Wrappers';

export default createSimulation({
    name: 'Box in Space',
    componentType: Box,
    props: {
        color: {
            primary: '#e00e0e',
            secondary: '2312'
        },
        materialProps: {
            metalness: 1,
            roughness: 1,
            transparent: false
        },
        meshProps: {
            position: [1, 1, 1]
        }
    },
    wrapper: InteractiveSpaceSceneWrapper,
    environmentProps: {
        canvasHeight: 452,
        canvasWidth: 836
    }
});
