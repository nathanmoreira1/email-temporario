import env from 'react-dotenv'

const AUTH_TOKEN = env.AUTH_TOKEN
const API_URL = `https://dropmail.me/api/graphql/${AUTH_TOKEN}`
const PROXY_URL = 'https://cors-anywhere.herokuapp.com'

const useMail = () => {
  const introduceSession = async () => {
    const query =
      'mutation {introduceSession {id, expiresAt, addresses {address}}}'
    const request = await fetch(
      `${PROXY_URL}/${API_URL}?query=${encodeURIComponent(query)}`,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Origin: window.location.origin,
          'x-requested-with': 'XMLHttpRequest'
        },
        method: 'GET'
      }
    )
    if (request.ok) {
      const response = await request.json()
      const created_session = {
        session_id: response.data.introduceSession.id,
        address: response.data.introduceSession.addresses[0].address,
        emails: []
      }
      return created_session
    } else {
      return { error: 'Problem generating your email. Try again later.' }
    }
  }

  const querySession = async (session_id, variables) => {
    const query = encodeURIComponent(`
      query ($id: ID!) {
        session(id:$id) { 
          addresses {address}, 
          mails {
            rawSize, 
            fromAddr, 
            toAddr, 
            downloadUrl, 
            text, 
            headerSubject
          }
        }
      }`)

    const request = await fetch(
      `${PROXY_URL}/${API_URL}?query=${query}&variables=${variables}`,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Origin: window.location.origin,
          'x-requested-with': 'XMLHttpRequest'
        },
        method: 'GET'
      }
    )
    if (request.ok) {
      const response = await request.json()
      const session_informations = {
        address: response.data.session.addresses[0].address,
        emails: response.data.session.mails,
        session_id: session_id
      }
      return session_informations
    } else {
      return { error: 'Problem generating your email. Try again later.' }
    }
  }

  const loadNewEmails = async session_id => {
    const query = encodeURIComponent(
      `query {
        session(id: "${session_id}") {
          mails{
            rawSize,
            fromAddr,
            toAddr,
            downloadUrl,
            text,
            headerSubject
          }
        }
      }`
    )

    const request = await fetch(`${PROXY_URL}/${API_URL}?query=${query}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Origin: window.location.origin,
        'x-requested-with': 'XMLHttpRequest'
      },
      method: 'GET'
    })

    if (request.ok) {
      const response = await request.json()
      return response.data.session.mails
    } else {
      return { error: 'Problem loading new emails. Try again later.' }
    }
  }

  return { introduceSession, querySession, loadNewEmails }
}

export default useMail
