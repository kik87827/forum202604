import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: 'Ov23li0sWVxwp2DrHovG',
      clientSecret: '15da6faa7916cf78302bd2e369730c4ee553c400',
    }),
  ],
  secret: 'kiki4426',
};
export default NextAuth(authOptions);
