import { Canvas } from '@react-three/fiber';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Scene from './Scenes/Scene';

ReactDOM.render(
  <React.StrictMode>
    <Canvas>
        <Scene />
    </Canvas>
  </React.StrictMode>,
  document.getElementById('root')
);