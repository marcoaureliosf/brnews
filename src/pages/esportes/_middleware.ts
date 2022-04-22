import { withAuth } from 'next-auth/middleware'

export default withAuth({
  pages: {
    signIn: '/esportes',
    // error: '/unauthorized'
  }
})