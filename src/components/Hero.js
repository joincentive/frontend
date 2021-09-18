import React from 'react'

const Hero = () => {
	return (
		<>
			<div>
				<h1>Centive lets community compensate creators</h1>
				<p>Centive khbkjlnlknlkrs</p>
			</div>
			<style jsx>{`
				div {
					display: flex;
					flex-direction: column;
					padding: 1rem 4rem;
					z-index: 10;
				}
				h1 {
					color: white;
					font-size: 36px;
					font-family: Righteous;
					position: relative;
					z-index: 10;
				}
				p {
					color: white;
					position: relative;
					font-size: 16px;
					font-family: Overpass;
					z-index: 10;
				}
			`}</style>
		</>
	)
}

export default Hero
