import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF, OrbitControls, Stage } from "@react-three/drei"
import { proxy, useSnapshot } from "valtio"

const state = proxy({
    current: null,
    items: { laces: "#fff", mesh: "#fff", caps: "#fff", inner: "#fff", sole: "#fff", stripes: "#fff", band: "#fff", patch: "#fff" },
})

export default function Model3D() {
    const ref = useRef()
    return (
        <>
            <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
                <Suspense fallback={null}>
                    <Stage controls={ref} preset="rembrandt" intensity={1}  environment="city">
                        false
                        <Model />
                        false
                    </Stage>
                </Suspense>
                <OrbitControls ref={ref} autoRotate />
            </Canvas>
        </>
    )
}

function Shoe() {
    const ref = useRef()
    const snap = useSnapshot(state)
    const {nodes, materials} = useGLTF("shoe-draco-2.glb")

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        ref.current.rotation.set(Math.cos(t / 4) / 8, Math.sin(t / 4) / 8, -0.2 - (1 + Math.sin(t / 1.5)) / 20)
    })


    return (
        <group ref={ref} scale={[1.5, 1.5, 1.5]}>
            {/*<mesh receiveShadow castShadow geometry={nodes.shoe.geometry} material={materials.laces} material-color={snap.items.laces}></mesh>*/}
            {/*<mesh receiveShadow castShadow geometry={nodes.shoe_1.geometry} material={materials.mesh} material-color={snap.items.mesh} />*/}
            {/*<mesh receiveShadow castShadow geometry={nodes.shoe_2.geometry} material={materials.caps} material-color={snap.items.caps} />*/}
            {/*<mesh receiveShadow castShadow geometry={nodes.shoe_3.geometry} material={materials.inner} material-color={snap.items.inner} />*/}
            {/*<mesh receiveShadow castShadow geometry={nodes.shoe_4.geometry} material={materials.sole} material-color={snap.items.sole} />*/}
            {/*<mesh receiveShadow castShadow geometry={nodes.shoe_5.geometry} material={materials.stripes} material-color={snap.items.stripes} />*/}
            {/*<mesh receiveShadow castShadow geometry={nodes.shoe_6.geometry} material={materials.band} material-color={snap.items.band} />*/}
            {/*<mesh receiveShadow castShadow geometry={nodes.shoe_7.geometry} material={materials.patch} material-color={snap.items.patch} />*/}
            <mesh receiveShadow castShadow geometry={nodes.defaultMaterial.geometry} material={materials.NikeShoe} />
        </group>
    )
}

export function Model(props) {
    const { nodes, materials } = useGLTF('/etco2.glb')
    return (
        <group {...props} dispose={null} scale={[0.5, 0.5, 0.5]}>
            <group rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.etCO2_Module_v2_1.geometry}
                    material={materials['Tough_2000_(with_Formlabs_SLA_3D_Printers)']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.etCO2_Module_v2_2.geometry}
                    material={materials['ABS_(White)']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.etCO2_Module_v2_3.geometry}
                    material={materials['Powder_Coat_(Yellow)']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.etCO2_Module_v2_4.geometry}
                    material={materials['Steel_-_Satin']}
                />
            </group>
        </group>
    )
}

useGLTF.preload('/etco2.glb')

