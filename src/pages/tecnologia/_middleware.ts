import { withAuth } from 'next-auth/middleware'

export default withAuth({
  pages: {
    signIn: '/tecnologia',
    // error: '/unauthorized'
  }
})