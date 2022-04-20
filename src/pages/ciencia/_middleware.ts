import { withAuth } from 'next-auth/middleware'

export default withAuth({
  pages: {
    signIn: '/unauthorized',
    error: '/unauthorized'
  }
})