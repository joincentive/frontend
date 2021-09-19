import React from 'react'
import Image from 'next/image'

const projectsList = [
	{
		id: {
			projectName: 'Project name',
			image: '/vercel.svg',
			description:
				'A very brief description of the project and what it is about and what you can do to help.',
			creators: ['username1', 'username2'],
			bounties: [
				{
					bountyName: 'Bounty Name 1',
					status: 'Open to contributions',
					time: '12/12/2022',
					bountyDescription:
						'Brief description of the bounty. What the issue is. This might take a line or two, or three. Or maybe even four!',
					repoLink: 'https://github.com/joincentive/frontend',
					pledgeLink: 'https://github.com/joincentive/frontend',
				},
			],
			tags: 'C++, python, healthcare',
		},
	},
	{
		name: {
			image: '/vercel.svg',
			description:
				'A very brief description of the project and what it is about and what you can do to help.',
			creators: ['username1', 'username2'],
			bounties: [
				{
					bountyName: 'Bounty Name 1',
					status: 'Open to contributions',
					time: '12/12/2022',
					bountyDescription:
						'Brief description of the bounty. What the issue is. This might take a line or two, or three. Or maybe even four!',
					repoLink: 'https://github.com/joincentive/frontend',
					pledgeLink: 'https://github.com/joincentive/frontend',
				},
			],
			tags: 'C++, python, healthcare',
		},
	},
	{
		name: {
			image: '/vercel.svg',
			description:
				'A very brief description of the project and what it is about and what you can do to help.',
			creators: ['username1', 'username2'],
			bounties: [
				{
					bountyName: 'Bounty Name 1',
					status: 'Open to contributions',
					time: '12/12/2022',
					bountyDescription:
						'Brief description of the bounty. What the issue is. This might take a line or two, or three. Or maybe even four!',
					repoLink: 'https://github.com/joincentive/frontend',
					pledgeLink: 'https://github.com/joincentive/frontend',
				},
			],
			tags: 'C++, python, healthcare',
		},
	},
	{
		name: {
			image: '/vercel.svg',
			description:
				'A very brief description of the project and what it is about and what you can do to help.',
			creators: ['username1', 'username2'],
			bounties: [
				{
					bountyName: 'Bounty Name 1',
					status: 'Open to contributions',
					time: '12/12/2022',
					bountyDescription:
						'Brief description of the bounty. What the issue is. This might take a line or two, or three. Or maybe even four!',
					repoLink: 'https://github.com/joincentive/frontend',
					pledgeLink: 'https://github.com/joincentive/frontend',
				},
			],
			tags: 'C++, python, healthcare',
		},
	},
]

const listingsMap = () => {
	return projectsList.map((item) => (
		<div>
			<span />
			<div>
				<Image src={item.id.image} alt={item.id.name} width={255} height={255} />
				<div>
					<h2> {item.id.name}</h2>
					<p> {item.id.description}</p>
				</div>
			</div>
			<p>{item.tags}</p>
			<style jsx>
				{`
					span {
						display: block;
						width: 100%;
						border-top: 1px solid white;
					}
				`}
			</style>
		</div>
	))
}
const listings = () => {
	return (
		<>
			<div id="title">
				<h1>What type of projects are you looking for?</h1>
				<p>
					Based on your experiences and skills, here are some popular projects that may interest
					you. Click on a project to learn more and contribute! If you are interested in multiple
					projects, you may continue to organize them in your personal profile page.
				</p>
			</div>
			<div>{listingsMap()}</div>
			<style jsx>
				{`
					#title {
						margin: 6rem 3rem 1rem 3rem;
					}
				`}
			</style>
		</>
	)
}

export default listings
