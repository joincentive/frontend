import React from 'react'

export const Button = ({ children }) => {
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

export const OutlineButton = ({ children }) => {
	return (
		<>
			<button>{children}</button>
			<style jsx>{`
				button {
					display: inline-block;
					border: none;
					color: white;
					background-color: transparent;
					font-size: 14px;
					font-family: Overpass;
					padding: 0.5rem 1rem;
					text-align: center;
					text-decoration: none;
					border: 1px solid white;
					border-radius: 5px;
					margin: 0px 3px;
					cursor: pointer;
				}
			`}</style>
		</>
	)
}
