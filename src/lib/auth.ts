import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { adminLoginSchema } from "@/domains/auth/dtos/AdminDto";
import { findByEmail } from "@/domains/auth/repositories/AdminRepository";

const { handlers, auth, signIn, signOut } = NextAuth({
  session: { strategy: "jwt" },
  pages: {
    signIn: "/admin/login",
  },
  providers: [
    Credentials({
      name: "Admin Login",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const parsed = adminLoginSchema.safeParse(credentials);
        if (!parsed.success) {
          return null;
        }

        const admin = await findByEmail(parsed.data.email);
        if (!admin) {
          return null;
        }

        const isValidPassword = await bcrypt.compare(parsed.data.password, admin.passwordHash);
        if (!isValidPassword) {
          return null;
        }

        return {
          id: admin.id,
          name: admin.name,
          email: admin.email,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
});

export { auth, handlers, signIn, signOut };
