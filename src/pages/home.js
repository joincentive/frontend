import Head from 'next/head'
import Nav from '../components/reusable/Nav'
import { OutlineButton, Button } from '../components/reusable/Button'
import Cards from '../components/reusable/Card'
import Portal from "../components/index/Portal";

export default function Home() {
	return (
		<div>
			<Nav />
			<Head>
				<title>Centive | Home</title>
				<meta name="description" content="Open source" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<div id="portal">
					<Portal n={1000} />
				</div>
				<div id="main">
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
						<Button className="btn">Learn More</Button>
					</div>
					<div id="projectsDescription">
						<h1>Latest projects</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eu risus ut amet at
							montes, faucibus sit. Non massa lacus, fames in quis malesuada in vitae convallis.
							Vestibulum et tincidunt faucibus maecenas turpis egestas posuere sed. Ut porttitor
							cursus est sit sagittis donec adipiscing neque a.
						</p>
					</div>
					<div id="projectsCards">
						<div>
							<Cards />
						</div>
						<p>
							To view more projects Centive has to offer, contribute to the bounties, or pledge a
							token in support of all open source developers, please visit the link below.{' '}
						</p>
						<OutlineButton>Explore more bounties</OutlineButton>
						<Button>Contribute to Projects</Button>
					</div>

					<div id="bountyDescription">
						<h1>Latest projects</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eu risus ut amet at
							montes, faucibus sit. Non massa lacus, fames in quis malesuada in vitae convallis.
							Vestibulum et tincidunt faucibus maecenas turpis egestas posuere sed. Ut porttitor
							cursus est sit sagittis donec adipiscing neque a.
						</p>
					</div>
					<img id="bountySplash" src="/heroSplash.svg" alt="" />
				</div>
			</main>

			<style jsx>{`
				#portal {
					position: absolute;
					top: -5vh;
					z-index: 0;
					width: 100vw;
					height: 100vh;
				}
				#main {
					display: inline-grid;
					width: 100%;
					grid-template-columns: repeat(12, 1fr);
					grid-auto-rows: minmax(75px, auto);
				}
				#generative {
					grid-column: 1 / -1;
					grid-row: 1;
				}

				#heroTop {
					grid-column: 1 / 6;
					grid-row: 2;
				}
				#hero {
					grid-column: 4 / 10;
					grid-row: 3 / 5;
					padding: 1rem 1rem;
					border: 2px solid white;
					border-radius: 10px;
				}

				#banner {
					grid-column: 8 / -1;
					grid-row: 5;
					align-self: center;
					border-radius: 10px;
					background-color: rgba(25, 22, 39, 1);
					padding: 1.5rem;
					width: 45vw;
				}

				span {
					width: 2rem;
				}

				#heroBottom {
					grid-column: 8 / -1;
					grid-row: 5;
				}
				#projectsDescription {
					grid-column: 3 / 11;
					grid-row: 6;
				}
				#projectsCards {
					grid-column: 3 / 11;
					grid-row: 7;
				}

				#bountyDescription {
					display: flex;
					flex-direction: column;
					text-align: right;
					grid-column: 4 / 11;
					grid-row: 9;
				}
				#bountySplash {
					grid-column: 4 / 9;
					grid-row: 11;
					margin-bottom: 10rem;
				}
			`}</style>
		</div>
	)
}
