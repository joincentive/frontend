import Head from 'next/head'
import Image from 'next/image'
import Generative from '../components/Generative'
import Hero from '../components/hero'
import AuthButton from "../components/auth/AuthButton"

export default function Home() {
	return (
		<div>
			<Head>
				<title>Centive | Home</title>
				<meta name="description" content="Open source" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
        <AuthButton/>
				<Hero />
				<Generative />
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
