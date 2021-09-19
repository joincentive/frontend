import React from 'react'
import AuthButton from '../auth/AuthButton'
import Link from 'next/link'

const Nav = () => {
	return (
		<>
			<div>
				<Link href="/">
					<h1>Centive</h1>
				</Link>
				<div>
					<Link href="/about">About</Link>
					<Link href="/about">Contact</Link>
					<AuthButton />
				</div>
			</div>
			<style jsx>{`
				div {
					display: flex;
					flex-direction: row;
					height: 5vh;
					padding: 2rem 3rem;
					justify-content: space-between;
				}
				div > div {
					width: 25vw;
					align-items: center;
				}
				p {
					position: relative;
					z-index: 3;
				}
				,
				h1 {
					z-index: 10;
				}
			`}</style>
		</>
	)
}

export default Nav
