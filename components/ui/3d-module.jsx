import { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF, OrbitControls } from "@react-three/drei"
import { proxy, useSnapshot } from "valtio"

const state = proxy({
    current: null,
    items: { laces: "#fff", mesh: "#fff", caps: "#fff", inner: "#fff", sole: "#fff", stripes: "#fff", band: "#fff", patch: "#fff" },
})

export default function Model3D() {
    return (
        <>
            <Canvas shadows camera={{position: [0, 0, 4], fov: 45}}>
                <ambientLight intensity={0.7}/>
                <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, -5]} castShadow/>
                {/*<ambientLight intensity={0.7} />*/}
                {/*<spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} />*/}
                <Shoe/>
                <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={false}
                               enablePan={false}/>
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

