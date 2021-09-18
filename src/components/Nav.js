import React from 'react'

const Nav = () => {
	return (
		<>
			<div>
				<p id="logo">Centive</p>
				<p>About</p>
			</div>
			<style jsx>{`
				div {
					display: flex;
					flex-direction: row;
					height: 5vh;
					padding: 1rem 2rem;
					justify-content: space-between;
				}
				p {
					font-family: Overpass;
					position: relative;
					z-index: 3;
				}
				,
				p:first-of-type {
					font-family: Righteous;
					color: white;
				}
			`}</style>
		</>
	)
}

export default Nav
