import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import connectDB from "@/lib/mongodb";
import User from "@/models/usersModel";

export const authOptions = {
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        connectDB();

        const user = await User.findOne({
          loginInfo: credentials.loginInfo,
        });

        if (
          !user ||
          !(await bcrypt.compare(credentials.password, user.password))
        ) {
          throw new Error("Invalid credentials.");
        }

        return {
          id: user.id,
          loginInfo: user.loginInfo,
          role: user.role,
          isPaid: user.isPaid,
        };
      },
    }),
  ],

  session: { stratagy: "jwt" },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.isPaid = user.isPaid;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.role = token.role;
      session.user.isPaid = token.isPaid;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
