import { useRouter } from 'next/router'
import Head from "next/head";
import Nav from "../../components/reusable/Nav";

const Project = () => {
  const router = useRouter()
  const { slug } = router.query
  const path = decodeURIComponent(slug)

  return <div>
    <Head>
      <title>Centive | Home</title>
      <meta name="description" content="Open source" />
      <link rel="icon" href="/ship.png" />
    </Head>

    <main>
      <Nav />
      <div id="main">
        <div id="card">
          <h1>{path}</h1>
        </div>
      </div>
    </main>
    <style jsx>
      {`
        #main {
					padding: 10vh 3rem;
				}
				
				#card {
          background: linear-gradient(250.2deg, rgba(109, 115, 159, 0.75) -37.51%, rgba(61, 67, 113, 0.75) 64.48%);
          box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.19);
          border-radius: 10px;
				}
      `}
    </style>
  </div>
}

export default Project