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
				<div id="about">
					<div>
						<h1>What does Centive do?</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar scelerisque aliquam
							elementum amet, amet in phasellus. Duis id nunc, felis tellus, eros suscipit.
							Malesuada phasellus suspendisse convallis egestas feugiat vestibulum ut. Consequat
							lorem ut tellus et integer phasellus. Mi pulvinar mattis tellus sit amet iaculis.
							Libero, pellentesque non vitae quam gravida. Vel eu id id arcu et adipiscing. Eget
							ipsum aliquet arcu dolor, dui.
						</p>
					</div>
					<Image src="/ship.png" alt="" width="550" height="550" />
				</div>
				<Image id="blob" src="/blob.png" alt="" width="1720" height="300" />

				<style jsx>
					{`

					#about{
						display: flex;
						flex-direction: row;
						align-items: center;
						margin-top: 6rem;
						padding: 0rem 4rem;

					}
			
					div > div{
						width 60vw;
						padding: 3rem ;	
					}

					#blob{
						width: 100%
					}
				`}
				</style>
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
