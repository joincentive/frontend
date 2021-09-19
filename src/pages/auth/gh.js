import Image from 'next/image'
import Head from 'next/head'
import { getProviders, signIn } from 'next-auth/react'
import {OutlineButton} from "../../components/reusable/Button";
import signInSplash from './sign-in-splash.png'
import Nav from "../../components/reusable/Nav";
import icon from './gh_icon.png'

export default function SignIn({ providers }) {
  return (
    <div>
      <Nav/>
      <Head>
        <title>Sign-in</title>
        <meta name="description" content="Open source" />
        <link rel="icon" href="/ship.png" />
      </Head>

      <main>
        <div className="splash-container">
          <div id="splash-art">
            <Image src={signInSplash} alt="Login Splash" />
          </div>
          <div className="login-section">
            <h1>Join us today</h1>
            <p>Login using your GitHub account</p>
            <div className="login-card">
              {Object.values(providers).map(provider => (
                <div key={provider.name}>
                  <Image src={icon} width={48} height={48}/>
                  <OutlineButton onClick={() => signIn(provider.id)}>Sign in with {provider.name}</OutlineButton>
                </div>
              ))}
            </div>
            <p>By logging in with GitHub, you agree to our <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Terms and Conditions</a>.</p>
          </div>
        </div>
      </main>
      <style jsx>
        {`
            #splash-art {
              padding: 3em 7em;
            }
            
            .splash-container {
              display: flex;
              flex-direction: row;
              height: 85vh;
              overflow: hidden;
            }
            
            .splash-container > * {
              flex: 50% 0 0;
            }
            
            .login-section {
              padding-top: 25vh;
            }
            
            .login-card {
              width: 50%;
              height: 150px;
              background: linear-gradient(250.2deg, rgba(232, 126, 202, 0.75) -37.51%, rgba(61, 67, 113, 0.75) 74.08%);
              box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.19);
              border-radius: 10px;
            }
            
            .login-card > div {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 150px;
              gap: 1.5em;
            }
            
            a {
              color: #e078c3;
            }
        `}
      </style>
    </div>
  )
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context){
  const providers = await getProviders()
  return {
    props: { providers }
  }
}