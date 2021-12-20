import { Canvas } from '@react-three/fiber'
import type { ISimulationWrapperProps } from '@wixc3/react-simulation'
import React = require('react')

export const defaultSceneWrapper: React.FC<ISimulationWrapperProps<any>> = ({ renderSimulation }) => (
  <Canvas>
    <ambientLight />
    <pointLight position={[10, 10, 10]}></pointLight>
    {renderSimulation()}
  </Canvas>
)
