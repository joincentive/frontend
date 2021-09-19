import React from 'react'
import Button from './Button'

const Banner = () => {
	return (
		<div>
			<div>
				<Button>Learn More</Button>
				<Button>Login with Github</Button>
			</div>
			<style jsx>{`
				div > div {
					background-color: rgba(25, 22, 39, 0.9);
					padding: 1.5rem;
					width: 45vw;
				}
			`}</style>
		</div>
	)
}

export default Banner
