import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "email",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "Username"},
                password: { label: "Password", type: "password"}
            },
            async authorize(credentials, req) {
                const username = credentials?.username;
                const password= credentials?.password;

                const user = {
                    id: "24",
                    username: "sung",
                    password: "242424"
                }

                if (user) {
                    return user;
                } else {
                    return null;
                }
            }
        }),
        Google({
            clientId: "24242424",
            clientSecret: "secre..."
        }),
        Github({
            clientId: "24242424",
            clientSecret: "secre..."
        })
    ]
})

export { handler as GET, handler as POST }