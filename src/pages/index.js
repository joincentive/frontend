import Head from 'next/head'
import Generative from '../components/Generative'
import Projects from '../components/Projects'
import Button from '../components/Button'

export default function Home() {
	return (
		<div>
			<Head>
				<title>Centive | Home</title>
				<meta name="description" content="Open source" />
				<link rel="icon" href="/ship.png" />
			</Head>

			<main>
				<div id="main">
					<Generative />
					<img src="/heroTop.svg" alt="" id="heroTop" />
					<div id="hero">
						<h1>Centive lets community compensate creators</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eu risus ut amet at
							montes, faucibus sit. Non massa lacus, fames in quis malesuada in vitae convallis.
							Vestibulum et tincidunt faucibus maecenas turpis egestas posuere sed. Ut porttitor
							cursus est sit sagittis donec adipiscing neque a.
						</p>
					</div>
					<img src="/heroBottom.svg" alt="" id="heroBottom" />
					<div id="banner">
						<Button>Learn More</Button>
						<Button>Login with Github</Button>
					</div>
					<div id="projects">
						<Projects />
					</div>
				</div>
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
			<style jsx>{`
				#main {
					display: inline-grid;
					width: 100%;
					grid-template-columns: repeat(12, 1fr);
					gap: 10px;
					grid-auto-rows: minmax(100px, auto);
				}
				#heroTop {
					grid-column: 1 / 6;
					grid-row: 1;
				}
				#hero {
					grid-column: 5 / 11;
					grid-row: 2 / 4;
					padding: 1rem 1rem;
					border: 2px solid white;
					border-radius: 10px;
				}
				#banner {
					grid-column: 8 / -1;
					grid-row: 4;
					align-self: center;
					background-color: rgba(25, 22, 39, 0.9);
					padding: 1.5rem;
					width: 45vw;
				}
				#heroBottom {
					grid-column: 9 / -1;
					grid-row: 4;
				}
				#projects {
					grid-column: 2 / 7;
					grid-row: 7;
					background: yellow;
				}
			`}</style>
		</div>
	)
}
