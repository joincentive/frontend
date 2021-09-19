import { useSession, signIn, signOut } from 'next-auth/react'
import { Button } from '../reusable/Button'

export default function AuthButton() {
	const { data: session } = useSession()
	if (session) {
		return (
			<>
				<p>{session.user.name}</p>
				<Button onClick={() => signOut()}>Sign out</Button>
			</>
		)
	}
	return <Button onClick={() => signIn()}>Sign in</Button>
}
