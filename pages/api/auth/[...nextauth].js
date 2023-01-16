import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"; 
import GithubProvider from "next-auth/providers/github";
export default NextAuth({
    providers: [
    //google provider
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRETE
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRETE
        })
]
})