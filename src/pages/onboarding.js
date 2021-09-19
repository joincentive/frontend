import {useSession} from "next-auth/react";
import {useRouter} from "next/router";
import {useEffect} from 'react'
import Loader from '../components/reusable/Loader'

export default function Onboarding() {
  const {data: session, status} = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push('/')
    }
  }, [session, status])

  if (!session) {
    return <Loader/>
  }

  return (<>
    <h1>{session.accessToken || "None"}</h1>
  </>)
}