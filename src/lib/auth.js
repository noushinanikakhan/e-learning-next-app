// src/lib/auth.js
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import clientPromise from "./mongodb";

const providers = [
  CredentialsProvider({
    name: "Credentials",
    credentials: {
      email: { label: "Email", type: "email" },
      password: { label: "Password", type: "password" },
    },
    async authorize(credentials) {
      if (!credentials?.email || !credentials?.password) {
        return null;
      }

      const client = await clientPromise;
      const db = client.db("ocean-academy");
      const usersCollection = db.collection("users");

      // ⚠️ Plain-text password – ONLY for exam/demo
      const user = await usersCollection.findOne({
        email: credentials.email,
        password: credentials.password,
      });

      if (!user) return null;

      return {
        id: user._id.toString(),
        name: user.name,
        email: user.email,
      };
    },
  }),
];

// Add Google only if keys exist (optional)
if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
  providers.push(
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  );
}

export const authOptions = {
  providers,
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      if (token?.id) {
        session.user.id = token.id;
        session.user.name = token.name || session.user.name;
      }
      return session;
    },
  },
};

// ✅ This creates GET/POST handlers directly
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
