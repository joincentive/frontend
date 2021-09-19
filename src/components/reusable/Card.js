import React from 'react'
import Image from 'next/image'

const projects = [
	{
		name: 'Project name',
		issuer: ['username1', 'username2'],
		logo: '/vercel.svg',
		description:
			'A very brief description of the project and what it is about and what you can do to help.',
	},
	{
		name: 'Project name',
		issuer: ['username1', 'username2'],
		logo: '/vercel.svg',
		description:
			'A very brief description of the project and what it is about and what you can do to help.',
	},
	{
		name: 'Project name',
		issuer: ['username1', 'username2'],
		logo: '/vercel.svg',
		description:
			'A very brief description of the project and what it is about and what you can do to help.',
	},
]

const Card = ({ name, issuer, logo, description }) => {
	return (
		<>
			<div id="cardBackground">
				<div id="cardBanner">
					<h2>{name}</h2>
					<p>{issuer}</p>
				</div>
				<Image id="cardLogo" src={logo} width={60} height={60} alt="" />
				{/* <img src="/cardBottom.svg" alt="" class="cardBottom" /> */}
				<p id="cardDescription">{description}</p>
			</div>
			<style jsx>
				{`
					#cardBackground {
						padding: 1rem 0rem 0rem 1rem;
						display: grid;
						grid-template-columns: repeat(6, 1fr);
						grid-template-rows: repeat(3, 1fr);
						margin: 0rem 1rem 0rem 0rem;
						background: conic-gradient(
								from 222.01deg at 50% 50%,
								#e078c3 0deg,
								#393a6e 219.37deg,
								#e078c3 360deg
							),
							#38396d;
						box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
						border-radius: 10px;
					}

					#cardBanner {
						grid-column: 3 / -1;
						grid-row: 1;
						border-radius: 10px 0px 0px 10px;
						background-color: rgba(25, 22, 39, 1);
						padding: 0.5rem 1rem 0.5rem 1rem;
					}
					#cardLogo {
						grid-column: 1 / 2;
						grid-row: 1;
					}
					#cardDescription {
						grid-column: 2 / 6;
						grid-row: 3;
					}
					#cardBottom {
						grid-column: 2 / 6;
						grid-row: 3;
						position: absolute;
					}
				`}
			</style>
		</>
	)
}

const Cards = ({}) => {
	return (
		<>
			<div>
				{projects.map((g) => {
					return <Card name={g.name} issuer={g.issuer} logo={g.logo} description={g.description} />
				})}
			</div>
			<style jsx>
				{`
					display: flex;
					flex-direction: row;
				`}
			</style>
		</>
	)
}

export default Cards
