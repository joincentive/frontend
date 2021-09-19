import {useSession} from "next-auth/react";
import {useRouter} from "next/router";
import {useEffect} from 'react'
import Loader from '../components/reusable/Loader'
import useSWR from 'swr'
import {useState} from 'react'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Onboarding() {
  const {data: session, status} = useSession()
  const router = useRouter()
  const [recs, setRecs] = useState()

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push('/')
      return
    }

    if (session?.accessToken) {
      console.log(JSON.stringify({
        token: session.accessToken,
        lf: "Cool open source projects"
      }))
      fetch('http://localhost:8080/api/recs', {
        method: 'POST',
        body: JSON.stringify({
          token: session.accessToken,
          lf: "Cool open source projects"
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
    }
  }, [session, status])

  if (!session) return <Loader/>
  if (!recs) return <Loader msg="Finding mind-blowingly cool projects just for you..."/>

  return (<>
    <h1>wtf it works sick</h1>
  </>)
}