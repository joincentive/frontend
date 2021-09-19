import {useSession} from "next-auth/react";
import {useRouter} from "next/router";
import {useEffect} from 'react'
import Loader from '../components/reusable/Loader'
import {useState} from 'react'
import Nav from "../components/reusable/Nav";
import Head from "next/head";

export default function Onboarding() {
  const {data: session, status} = useSession()
  const router = useRouter()
  const [lf, setLf] = useState("")
  const [recs, setRecs] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push('/')
      return
    }
  }, [session, status])

  const onSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    fetch('http://localhost:8080/api/recs', {
      method: 'POST',
      body: JSON.stringify({
        // token: session.accessToken,
        token: "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",
        lf,
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        setRecs(data)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
      .finally(() => setLoading(false))
  }

  if (!session) return <Loader/>
  if (loading) return <Loader msg="Finding some of the most mind-blowing projects on the internet..."/>
  return (<div>
    <Nav />
    <Head>
      <title>Centive | Home</title>
      <meta name="description" content="Open source" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <div id="main">
        <div id="title-section">
          <h1>What type of projects are you looking for?</h1>
          <p>Let us know what type of projects you would be interested in working on! If you're a maintainer, you can enter existing projects to find projects in your ecosystem to back.
            Recommendations are based off of previous projects and languages you've demonstrated proficiency in.
          </p>
          <form onSubmit={onSubmit}>
            <input id="lf" type="text" placeholder="'github.com/joincentive/recommender' or 'natural language models'" onChange={e => setLf(e.target.value)}/>
          </form>
          {recs && recs.map(rec => <div className="project-card">
            <button className="explore-button" onClick={() => router.push(`/projects/${encodeURIComponent(rec.name)}`)}>Explore Bounties ↗</button>
            <h2>{rec.name}</h2>
            <p>{rec.description}</p>
            <p className="meta">{rec.stars} stars and {rec.forks} forks</p>
            <ul>
              {rec.topics.map(topic => <li>{topic}</li>)}
            </ul>
          </div>)}
        </div>
      </div>
    </main>
    <style jsx>
      {`
        #main {
					padding: 10vh 3rem;
				}
				
				#title-section {
				  width: 60%;
				}
				
				#lf {
				  width: 100%;
          padding: 1em 0.8em;
          border-radius: 4px;
          border: none;
          outline: none;
				}
				
				h2 {
				  width: 50%;
				}
				
				.project-card {
				  position: relative;
          background: #38396D55;
					box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
					border-radius: 10px;
					margin-top: 2em;
					padding: 0.5em 1em;
				}
				
				.explore-button {
				  z-index: 9;
				  position: absolute;
				  top: 1em;
				  right: 1em;
          display: inline-block;
					border: none;
					color: white;
					background-color: transparent;
					font-size: 14px;
					font-family: Overpass;
					padding: calc(0.5rem - 1px) calc(1rem - 1px);
					text-align: center;
					text-decoration: none;
					border-radius: 5px;
					margin: 0px 3px;
					cursor: pointer;
					box-sizing: border-box !important;
					border: 1px solid white;
				}
				
				.meta {
				  opacity: 0.6;
				}
				
				ul {
          list-style: none;
          padding: 0;
        }
        
        li {
          display:inline-block;
          border-style: none;
          font-size: 0.9em;
          margin-right: 3px;
          padding: 0.3rem;
          border-radius: 2px;
          color: #fff;
          background-color: #E078C388;
          margin-bottom: 0.2em;
        }
      `}
    </style>
  </div>)
}