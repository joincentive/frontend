import { useSession, signIn, signOut } from 'next-auth/react'
import Button from '../Button'

export default function AuthButton() {
	const { data: session } = useSession()
	if (session) {
		return (
			<>
				{session.user.name} <br />
				<Button onClick={() => signOut()}>Sign out</Button>
			</>
		)
	}
	return (
		<>
			<Button onClick={() => signIn()}>Sign in with Github</Button>
		</>
	)
}
