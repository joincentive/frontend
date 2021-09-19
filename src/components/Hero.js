import React from 'react'

const Hero = () => {
	return (
		<div>
			<h1>Centive lets community compensate creators</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eu risus ut amet at montes,
				faucibus sit. Non massa lacus, fames in quis malesuada in vitae convallis. Vestibulum et
				tincidunt faucibus maecenas turpis egestas posuere sed. Ut porttitor cursus est sit sagittis
				donec adipiscing neque a.
			</p>

			<style jsx>{`
				div {
					display: flex;
					flex-direction: column;
					justify-content: right;
					margin-top: 0px;
					// z-index: 10;
				}
				div > div {
					width: 45%;
					padding: 1rem 1rem;
					border: 2px solid white;
					border-radius: 10px;
				}

				h1 {
					color: white;
					font-size: 36px;
					font-family: Righteous;
					position: relative;
					// z-index: 10;
				}
				p {
					color: white;
					position: relative;
					font-size: 16px;
					font-family: Overpass;
					// z-index: 10;
				}
			`}</style>
		</div>
	)
}

export default Hero
