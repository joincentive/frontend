import Head from 'next/head'
import Image from 'next/image'
import Generative from '../components/Generative'
import Hero from '../components/hero'
import LatestProjects from '../components/LatestProjects'
import Banner from '../components/Banner'

export default function Home() {
	return (
		<div>
			<Head>
				<title>Centive | Home</title>
				<meta name="description" content="Open source" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<img src="/heroTop.svg" alt="" />
				<Hero />
				<Banner />
				{/* <Generative /> */}
				<LatestProjects />
				<img src="/heroBottom.svg" alt="" />
			</main>

			<footer>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					By the HTN Team
				</a>
			</footer>
		</div>
	)
}
