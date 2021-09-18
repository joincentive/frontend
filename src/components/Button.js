import React from 'react'

const Button = ({ children }) => {
	return (
		<>
			<button>{children}</button>
			<style jsx>{`
				button {
					background-color: #e078c3;
					display: inline-block;
					color: white;
					font-size: 16px;
					font-family: Overpass;
					padding: 0.5rem 1rem;
					text-align: center;

					text-decoration: none;
					border: 0;
					border-radius: 5px;
					margin: 0px 0px;
					cursor: pointer;
				}
			`}</style>
		</>
	)
}

export default Button
