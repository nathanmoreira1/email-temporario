import { Container, Grid } from '@mui/material'

import EmailList from './components/EmailList'
import EmailDetails from './components/EmailDetails'
import Header from './components/Header'
import ErrorScreen from './components/ErrorScreen'
import useMail from '../../hooks/useMail'
import { useEffect, useState } from 'react'

const Home = () => {
  const { introduceSession, querySession, loadNewEmails } = useMail()
  const [sessionInformation, setSessionInformation] = useState()
  const [loading, setLoading] = useState(true)
  const [selectedEmail, setSelectedEmail] = useState()

  useEffect(() => {
    const initializeSession = async () => {
      setLoading(true)
      const sessionInLocalStorage = localStorage.getItem('session_informations')
      if (sessionInLocalStorage) {
        const { session_id } = JSON.parse(sessionInLocalStorage)
        const session = querySession(
          session_id,
          JSON.stringify({ id: session_id })
        )
        if (session && !session.error) {
          setSessionInformation(session)
          setLoading(false)
          return
        } else {
          localStorage.removeItem('session_informations')
        }
      }
      const session = await introduceSession()
      if (session && !session.error) {
        localStorage.setItem('session_informations', JSON.stringify(session))
        setSessionInformation(session)
        setLoading(false)
      } else {
        setLoading(false)
      }
    }
    initializeSession()
  }, [])

  const handleLoadNewEmails = async () => {
    const newEmails = await loadNewEmails(sessionInformation.session_id)
    setSessionInformation({ ...sessionInformation, emails: newEmails })
  }

  return (
    <Container maxWidth='xl'>
      {loading && <p>Carregando...</p>}
      {!loading && !sessionInformation && <ErrorScreen />}
      {!loading && sessionInformation && (
        <>
          <Header
            currentEmail={sessionInformation.address}
            handleLoadNewEmails={handleLoadNewEmails}
          />
          <Grid
            mt={2}
            direction='row'
            sx={{
              display: 'flex',
              flexDirection: 'row',
              height: 'calc(100vh - 350px)',
              width: '100%'
            }}
            border={1}
          >
            <EmailList
              emails={sessionInformation.emails}
              selectedEmail={selectedEmail}
              setSelectedEmail={setSelectedEmail}
            />
            <EmailDetails selectedEmail={selectedEmail} />
          </Grid>
        </>
      )}
    </Container>
  )
}

export default Home
