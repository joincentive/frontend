import Image from 'next/image'
import Head from 'next/head'
import { getProviders, signIn } from 'next-auth/react'
import Button from "../../components/Button";
import signInSplash from './sign-in-splash.png'

export default function SignIn({ providers }) {
  return (
    <div>
      <Head>
        <title>Sign-in</title>
        <meta name="description" content="Open source" />
        <link rel="icon" href="/ship.png" />
      </Head>

      <main>
        <div className="splash-container">
          <Image src={signInSplash} alt="Login Splash" />
          <div>
            <h2>Join us today</h2>
            <p>Login using your GitHub account</p>
            {Object.values(providers).map(provider => (
              <div key={provider.name}>
                <Button onClick={() => signIn(provider.id)}>Sign in with {provider.name}</Button>
              </div>
            ))}
            <p>By logging in with GitHub, you agree to our <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Terms and Conditions</a></p>
          </div>
        </div>
      </main>
      <style jsx>
        {`
            .splash-container {
              display: flex;
              flex-direction: row;
            }
            
            .splash-container {
              flex: 0 0 50%;
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