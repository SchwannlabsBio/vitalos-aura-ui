import { Suspense, useRef } from 'react'
import { Canvas } from "@react-three/fiber"
import { useGLTF, OrbitControls, Stage } from "@react-three/drei"

export default function Model3D() {
    const ref = useRef()
    return (
        <>
            <Canvas shadows dpr={[1, 2]} camera={{ fov: 50, zoom:0.75 }}>
                <Suspense fallback={null}>
                    <Stage controls={ref} preset="rembrandt" intensity={1}  environment="city">
                        false
                        <Mvm/>
                        false
                    </Stage>
                </Suspense>
                <OrbitControls ref={ref} autoRotate enableZoom={false}/>
            </Canvas>
        </>
    )
}

export function Etco2(props) {
    const { nodes, materials } = useGLTF('/etco2.glb')
    return (
        <group {...props} dispose={null}>
            <group rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.etCO2_Module_v5_1.geometry}
                    material={materials['ABS_(White)']}
                    scale={[0.05, 0.05, 0.05]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.etCO2_Module_v5_2.geometry}
                    material={materials['ABS_(White)_1']}
                    scale={[0.05, 0.05, 0.05]}
                />
            </group>
        </group>
    )
}
export function Mvm(props) {
    const { nodes, materials } = useGLTF('/mvm.glb')
    return (
        <group {...props} dispose={null}>
            <group rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Multi_Vital_Module_v4_1.geometry}
                    material={materials['ABS_(White)']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Multi_Vital_Module_v4_2.geometry}
                    material={materials['ABS_(White)_1']}
                />
            </group>
        </group>
    )
}


useGLTF.preload('/etco2.glb')
useGLTF.preload('/mvm.glb')

