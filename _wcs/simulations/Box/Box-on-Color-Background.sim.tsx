
import { createSimulation } from '@wixc3/react-simulation';
import Box from '../../../src/Components/Shapes/Box';
import { colorBackgroundWrapper } from '../../../src/Helpers/Wrappers';

export default createSimulation({
    name: 'Box on Color Background',
    componentType: Box,
props:{
    },
    wrapper: colorBackgroundWrapper("teal"),
    environmentProps: {
        canvasHeight: 452,
        canvasWidth: 836
    }
});
