import { Grid, Button, Typography, Box } from "@mui/material";
import { useState, useEffect } from "react";

const Header = ({
  currentEmail,
  askNotificationPermission,
  handleLoadNewEmails,
  notificationGranted,
  setNotificationGranted,
}) => {
  const [isCopied, setIsCopied] = useState(false);
  const [count, setCount] = useState(15);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(currentEmail).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1500);
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (count == 1) {
        handleLoadNewEmails();
      }
      if (count >= 1) {
        setCount(count - 1);
      } else {
        setCount(15);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <Grid container mt={5} p={2} flexDirection="column">
      <Grid container justifyContent="center" mb={2}>
        <Typography variant="h4" component="h4" style={{ opacity: 0.75 }}>
          Temporary Email
        </Typography>
      </Grid>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Grid item style={{ width: "100%" }} p={2}>
          <Box border={1} p={2} borderColor="rgba(0, 0, 0, .6)">
            {currentEmail}
          </Box>
        </Grid>
        <Grid justifyContent="center" alignItems="center">
          <Button variant="contained" color="primary" onClick={handleCopyClick}>
            {isCopied ? "COPIED!" : "COPY"}
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{ marginLeft: 2, marginRight: 2 }}
            onClick={() => handleLoadNewEmails()}
          >
            REFRESH
          </Button>
          <Button
            variant="contained"
            style={{
              backgroundColor: notificationGranted ? "green" : "888",
            }}
            onClick={async () => {
              const granted = await askNotificationPermission();
              granted
                ? setNotificationGranted(true)
                : setNotificationGranted(false);
            }}
          >
            {notificationGranted ? "NOTIFICATIONS ON" : "NOTIFICATIONS OFF"}
          </Button>
        </Grid>
        <Typography
          variant="body2"
          component="p"
          style={{ opacity: 0.75, marginTop: 15 }}
        >
          Autorefresh in {count} seconds
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Header;
