import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Particles } from './Particles'

export default function Portal({ n }) {
	return (
		<div>
			<Canvas camera={{ fov: 25, position: [0, 0, 6] }}>
				<OrbitControls makeDefault autoRotate autoRotateSpeed={2} zoomSpeed={0} />
				<Particles
					focus={4}
					speed={0.5}
					aperture={2.2}
					fov={50}
					curl={0.3}
					size={Math.floor((Math.log(n) + 20) * 10)}
				/>
			</Canvas>
			<style jsx>{`
				position: absolute;
			
				div {
					width: 100vw;
					height: 100vh;
					z-index: -1;
				}
			`}</style>
		</div>
	)
}
