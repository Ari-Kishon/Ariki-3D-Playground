import * as THREE from 'three'
import { useRef, useState } from 'react'
import {useFrame } from '@react-three/fiber'

interface ISphereProps {
    color: {primary: string,secondary: string};
    meshProps: JSX.IntrinsicElements['mesh']
}
const Sphere = ({color = {primary:'red',secondary: 'blue'} ,meshProps}:ISphereProps) => {
    const ref = useRef<THREE.Mesh>(null!)
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
    useFrame((state, delta) => (ref.current.rotation.x += 0.01))
    return (
        <mesh
            {...meshProps}
            ref={ref}
            scale={clicked ? 0.5 : 0.2}
            onClick={(event) => click(!clicked)}
            onPointerOver={(event) => hover(true)}
            onPointerOut={(event) => hover(false)}>
            <sphereGeometry args={[1,1,1]}/>
            <meshStandardMaterial color={clicked ? color.secondary : color.primary} />
        </mesh>
    )
}

export default Sphere;