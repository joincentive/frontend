import Head from 'next/head'
import Link from 'next/link'
import Generative from '../components/index/Generative'
import Projects from '../components/index/Projects'
import { Button } from '../components/reusable/Button'

export default function Home() {
	return (
		<div>
			<Head>
				<title>Centive | Home</title>
				<meta name="description" content="Open source" />
				<link rel="icon" href="/ship.png" />
			</Head>

			<Link href="/home" id="main">
				<div id="generative">
					<Generative />
				</div>
			</Link>

			<style jsx>{`
				cursor: pointer;
				#main {
					display: inline-grid;
					width: 100%;
					height: 100%;
					grid-template-columns: repeat(12, 1fr);
					grid-auto-rows: minmax(100px, auto);
					cursor: pointer;
				}
				#generative {
					grid-column: 1 / -1;
					grid-row: 1 / 2;
					position: absolute;
				}
				p {
					grid-column: 1 / -1;
					grid-row: 3 / 4;
					justify-content: flex-end;

					position: absolute;
				}
			`}</style>
		</div>
	)
}
