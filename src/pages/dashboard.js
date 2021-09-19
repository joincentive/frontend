import Portal from "../components/Portal";
import {useSession} from "next-auth/react";
import {useRouter} from "next/router";
import {useEffect} from 'react'

export default function Dashboard() {
  const {data: session, status} = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "unauthenticated" || session === null) {
      router.push('/')
    }
  }, [session, status])

  return <Portal n={100} />
}
