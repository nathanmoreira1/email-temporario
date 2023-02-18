import { Grid, Button, Typography, Box } from '@mui/material'
import RestartAltIcon from '@mui/icons-material/RestartAlt'

const Header = ({ currentEmail, resetCurrentEmail, handleLoadNewEmails }) => {
  const handleCopyClick = () => {
    navigator.clipboard.writeText(currentEmail) // Copia o texto para a área de transferência
  }

  return (
    <Grid container mt={5} p={2} flexDirection='column'>
      <Grid container justifyContent='center' mb={2}>
        <Typography variant='h4' component='h4' style={{ opacity: 0.75 }}>
          Temporary Email
        </Typography>
      </Grid>
      <Grid
        container
        justifyContent='center'
        alignItems='center'
        flexDirection='column'
      >
        <Grid item style={{ width: '100%' }} p={2}>
          <Box border={1} p={2} borderColor='rgba(0, 0, 0, .6)'>
            {currentEmail}
          </Box>
        </Grid>
        <Grid justifyContent='center' alignItems='center'>
          <Button variant='contained' color='primary' onClick={handleCopyClick}>
            COPY
          </Button>
          <Button
            variant='contained'
            color='primary'
            sx={{ marginLeft: 2, marginRight: 2 }}
            onClick={() => handleLoadNewEmails()}
          >
            RELOAD
          </Button>
          <Button variant='contained' color='primary'>
            NOTIFICATIONS
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Header
