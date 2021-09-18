import React from 'react'
import AuthButton from './auth/AuthButton'

const Nav = () => {
	return (
		<>
			<div>
				<h1>Centive</h1>
				<div>
					<p>About</p>
					<p>Contact</p>
					<AuthButton />
				</div>
			</div>
			<style jsx>{`
				div {
					display: flex;
					flex-direction: row;
					height: 5vh;
					padding: 1rem 3rem;
					justify-content: space-between;
				}
				div > div {
					width: 35vw;
					align-items: center;
				}
				p {
					font-family: Overpass;
					position: relative;
					z-index: 3;
					color: white;
				}
				,
				h1 {
					color: white;
					font-family: Righteous;
					z-index: 10;
				}
			`}</style>
		</>
	)
}

export default Nav
