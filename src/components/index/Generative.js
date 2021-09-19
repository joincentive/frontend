import * as THREE from 'three'
import React, { useEffect, useRef, useMemo, useCallback } from 'react'
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber'
import lerp from 'lerp'
import { MeshLine, MeshLineMaterial } from 'meshline'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'
import Text from './Text'

extend({ EffectComposer, ShaderPass, RenderPass, UnrealBloomPass })
extend({ MeshLine, MeshLineMaterial })

function Fatline({ curve, width, color, speed }) {
	const material = useRef()
	useFrame(() => (material.current.uniforms.dashOffset.value -= speed))
	return (
		<mesh>
			<meshLine points={curve} attach="geometry" />
			<meshLineMaterial
				ref={material}
				attach="material"
				transparent
				depthTest={false}
				lineWidth={width}
				color={color}
				dashArray={0.5}
				dashRatio={0.4}
			/>
		</mesh>
	)
}

function r() {
	return Math.max(0.5, Math.random())
}

function Lines({ mouse, count, colors, radius = 10 }) {
	const lines = useMemo(
		() =>
			new Array(count).fill().map(() => {
				const pos = new THREE.Vector3(Math.sin(0) * radius * r(), Math.cos(0) * radius * r(), 0)
				const points = new Array(30).fill().map((_, index) => {
					const angle = (index / 20) * Math.PI * 2
					return pos
						.add(new THREE.Vector3(Math.sin(angle) * radius * r(), Math.cos(angle) * radius * r()))
						.clone()
				})
				const curve = new THREE.CatmullRomCurve3(points).getPoints(1000)
				return {
					color: colors[parseInt(colors.length * Math.random())],
					width: Math.max(0.01, 0.5 * Math.random()),
					speed: Math.max(0.0005, 0.005 * Math.random()),
					curve,
				}
			}),
		[count]
	)

	const ref = useRef()
	const { size, viewport } = useThree()
	const aspect = size.width / viewport.width
	useFrame((state) => {
		if (ref.current) {
			ref.current.rotation.x = lerp(ref.current.rotation.x, 0 + mouse.current[1] / aspect / 50, 0.1)
			ref.current.rotation.y = lerp(
				ref.current.rotation.y,
				0 + mouse.current[0] / aspect / 100,
				0.1
			)
		}
	})

	return (
		<group ref={ref}>
			<Text>Centive</Text>
			<group position={[-radius * 2, -radius, 0]}>
				{lines.map((props, index) => (
					<Fatline key={index} {...props} />
				))}
			</group>
		</group>
	)
}

function Effect() {
	const composer = useRef()
	const { scene, gl, size, camera } = useThree()
	const aspect = useMemo(() => new THREE.Vector2(size.width, size.height), [size])
	useEffect(() => void composer.current.setSize(size.width, size.height), [size])
	useFrame(() => composer.current.render(), 1)
	return (
		<effectComposer ref={composer} args={[gl]}>
			<renderPass attachArray="passes" scene={scene} camera={camera} />
			<unrealBloomPass attachArray="passes" args={[aspect, 2, 1, 0]} />
		</effectComposer>
	)
}

function Generative() {
	const mouse = useRef([0, 0])
	const onMouseMove = ({ pageX: x, pageY: y }) =>
		(mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2])

	return (
		<div onMouseMove={onMouseMove}>
			<Canvas
				linear
				camera={{ fov: 100, position: [0, 0, 30] }}
				onCreated={({ gl }) => {
					gl.toneMapping = THREE.Uncharted2ToneMapping
					gl.setClearColor(new THREE.Color('#020207'))
				}}
			>
				<fog attach="fog" args={['white', 5, 20]} />
				<pointLight distance={100} intensity={2} color="white" />
				<Lines
					count={10}
					mouse={mouse}
					colors={['#4E3A95', '#FAD1C9', '#18225E', '#E079C3', '#665F80']}
				/>
				<Effect />
			</Canvas>
			<style jsx>{`
				div {
					width: 100vw;
					height: 100vh;
				}
			`}</style>
		</div>
	)
}

export default Generative
