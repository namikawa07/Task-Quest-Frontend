/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, VFC } from 'react'
import * as THREE from 'three'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import { useGLTF } from '@react-three/drei'

const ModelPath = '/assets/ybot.glb'

type GLTFResult = GLTF & {
  nodes: {
    Sphere: THREE.Mesh
  }
  materials: {
    ['Material.001']: THREE.MeshStandardMaterial
  }
}

export const Model: VFC<JSX.IntrinsicElements['group']> = (props) => {
  const group: any = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF(ModelPath) as GLTFResult

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={materials['Material.001']}
        position={[-2, 2, 0]}
        rotation={[0, 0, -0.38]}
        scale={[1.39, 1, 1]}
      />
    </group>
  )
}

useGLTF.preload(ModelPath)