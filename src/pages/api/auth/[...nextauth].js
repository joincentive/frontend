<<<<<<< HEAD
import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'
=======
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
>>>>>>> 17ebd4abc27e812aa26a0e76665870aee68aa431

const prisma = new PrismaClient()

export default NextAuth({
<<<<<<< HEAD
	adapter: PrismaAdapter(prisma),
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
			scope: 'write:repo_hook,read:user',
		}),
	],
})
=======
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      scope: "write:repo_hook,read:user"
    }),
  ],
})
>>>>>>> 17ebd4abc27e812aa26a0e76665870aee68aa431
