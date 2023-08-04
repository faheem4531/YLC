import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
// import { signIn } from 'next-auth/react';

export default NextAuth({
  secret: 'D8Kj$%MnGh2@zLk9PqRs5rE7xTc6wYf4',
  providers: [
    GoogleProvider({
      clientId: "1010410160549-9f9cnkskvjlcmlpjubap7c5vl744vr7r.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
});