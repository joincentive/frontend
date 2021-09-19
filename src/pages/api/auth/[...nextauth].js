import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default NextAuth({
	adapter: PrismaAdapter(prisma),
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
			scope: 'write:repo_hook,read:user',
		}),
	],
	callbacks: {
		redirect() {
			return '/dashboard'
		},
		async session({ session}) {
			// Send properties to the client, like an access_token from a provider.
			const user = await prisma.user.findUnique({
				where: {
					email: session.user.email,
				},
				include: {
					accounts: true,
				},
			})
			session.accessToken = user.accounts[0].access_token
			return session
		}
	},
	pages: {
		signIn: '/auth/gh',
		signOut: '/',
		newUser: '/onboarding'
	}
})
