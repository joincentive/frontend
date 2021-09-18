import Head from 'next/head'
import Image from 'next/image'
import Generative from '../components/Generative'
import Hero from '../components/hero'
import LatestProjects from '../components/LatestProjects'
import Banner from '../components/Banner'
import { Canvas, render, events } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Particles } from '../components/Particles'
import * as THREE from 'three'

window.addEventListener('resize', () =>
	render(<App />, document.querySelector('canvas'), {
		events,
		linear: true,
		camera: { fov: 25, position: [0, 0, 6] },
		// https://barradeau.com/blog/?p=621
		// This examples needs WebGL1 (?)
		gl: new THREE.WebGL1Renderer({
			canvas: document.querySelector('canvas'),
			antialias: true,
			alpha: true,
		}),
	})
)

window.dispatchEvent(new Event('resize'))

export default function Home() {
	return (
		<div>
			<Head>
				<title>Centive | Home</title>
				<meta name="description" content="Open source" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<div id="three">
					<Canvas camera={{ position: [800, 800, 800] }}>
						<Particles focus={5} speed={0.5} aperture={2.2} fov={20} curl={0.3} />
						<OrbitControls makeDefault autoRotate autoRotateSpeed={2} zoomSpeed={0} />
					</Canvas>
				</div>
			</main>

			<footer>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					By the HTN Team
				</a>
			</footer>
			<style jsx>{`
				#three {
					width: 100vw;
					height: 100vh;
				}
			`}</style>
		</div>
	)
}
