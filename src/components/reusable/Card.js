import React from 'react'
import Image from 'next/image'

const projects = [
	{
		name: 'HackClub',
		issuer: ['zrl'],
		link: 'https://hackclub.com/',
		logo: '/showcase/hackclub.png',
		description:
			'Clubs discovering the joy of code. Hack Club is a nonprofit network of high school coding clubs and makers around the world.',
	},
	{
		name: 'BentoML',
		issuer: ['parano', 'yubozhao'],
		logo: '/showcase/bento.png',
		link: 'https://github.com/bentoml/BentoML',
		description:
			'BentoML is a flexible, high-performance framework for serving, managing, and deploying machine learning models.',
	},
	{
		name: 'Exercism',
		issuer: ['KYTRINYX', 'iHiD'],
		logo: '/showcase/exercism.png',
		description:
			'Develop fluency in over 55 programming languages with our unique blend of learning, practice and mentoring. Exercism is fun, effective and 100% free, forever.',
	},
]

const Card = ({ name, issuer, logo, description, link }) => {
	return (
		<>
			<div className="cardBackground">
				<div id="cardBanner">
					<h2>{name}</h2>
					<p>{issuer.map(x => `@${x}`).join(", ")}</p>
				</div>
				<div id="cardLogo">
					<Image src={logo} layout="fill" alt="" />
				</div>
				<p id="cardDescription">{description}</p>
				<a id="more" href={link}>Learn More</a>
			</div>
			<style jsx>
				{`
					.cardBackground {
						flex: 1 0 0;
						position: relative;
						padding: 1rem 0rem 0rem 1rem;
						display: grid;
						grid-template-columns: repeat(6, 1fr);
						grid-template-rows: repeat(4, 0.5fr);
						margin: 0rem 1rem 0rem 0rem;
						background: conic-gradient(from 180deg at 50% 50%, #38396D66 -37.01deg, #E078C366 135.16deg, #38396D66 322.99deg, #E078C366 495.16deg), #38396D;
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
					#cardBanner > p {
						opacity: 0.6;
					}
					#cardLogo {
						position: relative;
						border-radius: 50%;
						margin: 1em;
						overflow: hidden;
						grid-column: 1 / 3;
						grid-row: 1;
					}
					#cardDescription {
						padding-right: 1em;
						grid-column: 1 / -1;
						grid-row: 2 / 4;
						word-break: break-word;
					}
					#more {
						padding: 1em;
						text-align: center;
						grid-column: 2 / -2;
						grid-row: 4;
						text-decoration: underline;
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
					return <Card {...g} />
				})}
			</div>
			<style jsx>
				{`
					width: 100%;
					display: flex;
					flex-direction: row;
				`}
			</style>
		</>
	)
}

export default Cards
