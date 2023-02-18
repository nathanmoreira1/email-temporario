import { List, Typography } from '@mui/material'
import EmailPreview from './EmailPreview'

const EmailList = ({ emails, selectedEmail, setSelectedEmail }) => {
  return (
    <List
      sx={{
        height: '100%',
        overflowY: 'auto',
        width: '30%',
        borderRight: '1px solid rgba(0, 0, 0, .4)'
      }}
    >
      <Typography variant='h5' component='h2' sx={{ m: 2 }}>
        Inbox
      </Typography>
      {emails.map((email, i) => (
        <EmailPreview
          key={i}
          id={i}
          selected={email.selectedEmail}
          email={email.fromAddr}
          title={email.headerSubject}
          description={email.text}
          selectedEmail={selectedEmail}
          setSelectedEmail={setSelectedEmail}
        />
      ))}
    </List>
  )
}

export default EmailList
