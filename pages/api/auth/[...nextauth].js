import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import MongoConnect from '../../../database/connect'
const jwt_decode = require('jwt-decode')

const providers = [
  CredentialsProvider({
    // The name to display on the sign in form (e.g. 'Sign in with...')
    name: 'credentials',
    // The credentials is used to generate a suitable form on the sign in page.
    // You can specify whatever fields you are expecting to be submitted.
    // e.g. domain, username, password, 2FA token, etc.
    // You can pass any HTML attribute to the <input> tag through the object.
    // credentials: {
    //   email: {
    //     label: 'Email',
    //     type: 'email',
    //     placeholder: 'example@example.org'
    //   },
    //   password: { label: 'Password', type: 'password' }
    // },
    async authorize(credentials, req) {

      // You need to provide your own logic here that takes the credentials
      // submitted and returns either a object representing a user or value
      // that is false/null if the credentials are invalid.
      // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
      // You can also use the `req` object to obtain additional parameters
      // (i.e., the request IP address)
      const res = await fetch(
        'https://backend-api-2022.onrender.com/api/auth/authorize',
        {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { 'Content-Type': 'application/json' }
        }
      )
      const user = await res.json()
      console.log(user)
      console.log(res.ok)

      // If no error and we have user data, return it
      if (res.ok && user) {
        return user
      }
      // Return null if user data could not be retrieved
      return null
    }
  })


]

// const providers = [
//   CredentialsProvider({
//     name: 'credentials',
//     authorize: async (credentials) => {
//       console.log('function called')
//       const user = await axios.post(
//         'http://localhost:4000/api/auth/login',
//         {
//           name: credentials.name || '',
//           password: credentials.password,
//           email: credentials.email,
//           college: credentials.college || '',
//           phoneNumber: credentials.phoneNumber || ''
//         },
//         {
//           headers: {
//             accept: '*/*',
//             'Content-Type': 'application/json'
//           }
//         }
//       )

//       if (user) {
//         return user
//       } else {
//         return null
//       }
//     }
//   })
// ]

const callbacks = {
  // Getting the JWT token from API response
  // async jwt(token, user) {
  //   console.log('rx', token, user)
  //   if (user) {
  //     token.accessToken = user.data.token
  //     console.log(token.accessToken)
  //     console.log(user.data.token)
  //   } else {
  //     console.log('else')
  //   }

  //   return token
  // },
  async jwt(x) {
    console.log('rx', x)
    // Persist the OAuth access_token to the token right after signin
    console.log('298386721', x.user)
    if (x.user) {
      x.token.accessToken = x.user.data.token
    }
    console.log('djsffhb', x.token)
    return x.token
  },

  async session({ session, token }) {
    console.log('sess', session, token)
    session.accessToken = token.accessToken
    var decoded = jwt_decode(token.accessToken)
    session.user.email = decoded.email
    session.user._id = decoded._id
    console.log('sess1', session)
    return session
  }
}

const options = {
  providers,
  secret : "2XSGSBWi3kGuefo4vuyGA7fkpXqwL1mDTXmaMo1hn8c=",
  callbacks,
  // pages: {
  //   signIn: "/id/signIn",
  //   signUp: "/id/signUp"
  //   },
}

export default (req, res) => NextAuth(req, res, options)
