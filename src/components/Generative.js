import React, { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import './Material'
import styled from 'styled-components'

const ROW = 50
const COL = 50
const NUM = ROW * COL

function Particles({ pointCount }) {
	const [coords, sizes] = useMemo(() => {
		const initialCoords = []
		const initialSizes = []
		let i = 0
		for (let y = 0; y < ROW; y += 1) {
			for (let x = 0; x < COL; x += 1) {
				initialCoords.push(x)
				initialCoords.push(y)
				initialCoords.push(i)
				initialSizes.push(Math.random() < 0.02 ? 7 : 3)
				i++
			}
		}

		const coords = new Float32Array(initialCoords)
		const sizes = new Float32Array(initialSizes)
		return [coords, sizes]
	}, [pointCount])

	const geom = useRef()
	useFrame((state) => {
		geom.current.material.uniforms.time.value = state.clock.getElapsedTime()
		geom.current.material.verticesNeedUpdate
		geom.current.geometry.verticesNeedUpdate = true
	})

	return (
		<points ref={geom} position={[0, -5, -8]} rotation={[-Math.PI / 4, 0, Math.PI / 6]}>
			<bufferGeometry>
				<bufferAttribute
					attachObject={['attributes', 'position']}
					count={coords.length / 3}
					array={coords}
					itemSize={3}
				/>
				<bufferAttribute
					attachObject={['attributes', 'size']}
					count={sizes.length}
					array={sizes}
					itemSize={1}
				/>
			</bufferGeometry>
			<dotMaterial />
		</points>
	)
}

export default function Generative() {
	return (
		<>
			<div>
				<Canvas pixelRatio={[2, 2]} camera={{ position: [0, 0, 2] }}>
					<Particles pointCount={NUM} />
					<OrbitControls />
				</Canvas>
			</div>
			<style jsx>{`
				margin: 0;
				height: 100vh;
				width: 100%;
				top: 0px;
				left: 0px;
				bottom: 0px;
				right: 0px;
				position: absolute;
				background: rgb(35, 34, 82);
				background: linear-gradient(0deg, rgba(35, 34, 82, 1) 35%, rgba(84, 78, 107, 1) 100%);
			`}</style>
		</>
	)
}
