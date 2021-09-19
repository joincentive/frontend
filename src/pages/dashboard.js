import Portal from '../components/index/Portal'
import Image from 'next/image'
import { OutlineButton } from '../components/reusable/Button'

export default function Dashboard() {
	return (
		<>
			{' '}
			<div id="title">
				<h1>Welcome home :)</h1>
				<p>
					Really brief description on what the digital garden does. Yuh. Give instructions on how to
					interact with the digital garden and how to view contributions.
				</p>
			</div>
			<div id="dashboard">
				<div id="portal">
					<Portal n={100} />
				</div>
				<div id="credit">
					<div>
						<div id="creditLine">
							<Image src="/creditBackground" width={200} height={150} />
						</div>
						<div>
							<h3 class="buttonCaption">Account Name</h3>
							<div class="buttonRow">
								<OutlineButton>Buy Tokens</OutlineButton>
								<OutlineButton>My Pledges</OutlineButton>
							</div>
						</div>
					</div>
					<div id="creditBottom">
						<div>
							<h3 class="buttonCaption">Current Balance: 420.69 $OSS</h3>
							<OutlineButton>Send</OutlineButton>
							<OutlineButton>Receive</OutlineButton>
							<OutlineButton>Transfer</OutlineButton>
						</div>
						<Image id="creditLogo" src="/centive.svg" width={100} height={100} />
					</div>
				</div>
			</div>
			<style jsx>
				{`
					#title {
						margin: 6rem 0rem 0rem 3rem;
					}
					#dashboard {
						margin-top: 2rem;
						display: inline-grid;
						width: 100%;
						grid-template-columns: repeat(12, 1fr);
						grid-auto-rows: minmax(100px, auto);
					}

					#portal {
						grid-column: 1 / 8;
						grid-row: 1 / 4;
					}

					#credit {
						grid-column: 8 / -1;
						grid-row: 1 / 2;

						padding: 6rem 2.25rem 2.25rem 2.25rem;
						border-radius: 10px 0px 0px 10px;
						background: linear-gradient(
							250.2deg,
							rgba(109, 115, 159, 0.75) -37.51%,
							rgba(61, 67, 113, 0.75) 64.48%
						);
						animation: shine 5s ease-in-out infinite;
						box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
					}

					.buttonCaption {
						margin-bottom: 0;
					}

					#creditBottom {
						display: flex;
						flex-direction: row;
						justify-content: space-between;
					}

					#creditLogo {
						color: white;
					}

					@keyframes shine {
						10% {
							opacity: 1;
							top: -30%;
							left: -30%;
							transition-property: left, top, opacity;
							transition-duration: 0.005s, 0.005s, 0.015s;
							transition-timing-function: ease;
						}

						50% {
							opacity: 0.4;
							top: -30%;
							left: -30%;
							transition-property: left, top, opacity;
						}

						90% {
							opacity: 1;
							top: -30%;
							left: -30%;
							transition-property: left, top, opacity;
							transition-duration: 0.005s, 0.005s, 0.015s;
							transition-timing-function: ease;
						}
					}
				`}
			</style>
		</>
	)
}
