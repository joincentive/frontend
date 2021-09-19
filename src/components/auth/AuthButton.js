import Image from 'next/image'
import { useSession, signIn, signOut } from 'next-auth/react'
import Button from '../Button'

export default function AuthButton() {
	const { data: session } = useSession()
	if (session) {
		return <>
			<div>
				<Image src={session.user.image} width={36} height={36} onClick={() => signOut()}/>
			</div>
			<style jsx>
				{`
					div {
						border-radius: 50%;
						overflow: hidden;
						width: 36px;
						height: 36px;
						cursor: pointer;
					}
				`}
			</style>
		</>
	}
	return <Button onClick={() => signIn()}>Sign in</Button>
}
