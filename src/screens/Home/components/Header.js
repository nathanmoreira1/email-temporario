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
      if (count === 1) {
        handleLoadNewEmails();
      }
      if (count >= 1) {
        setCount(count - 1);
      } else {
        setCount(15);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [count, handleLoadNewEmails]);

  return (
    <Grid container p={4} flexDirection="column">
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
        <Grid maxWidth="lg" item style={{ width: "100%" }} p={2}>
          <Box
            border={1}
            p={2}
            borderColor="rgba(0, 0, 0, .3)"
            borderRadius={2}
          >
            <Typography variant="body2" component="p" noWrap>
              {currentEmail}
            </Typography>
          </Box>
        </Grid>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={6} sm={4} md={3} lg={2} xl={2}>
            <Button
              variant="contained"
              color="primary"
              sx={{ width: "100%" }}
              onClick={handleCopyClick}
            >
              {isCopied ? "COPIED!" : "COPY"}
            </Button>
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2} xl={2}>
            <Button
              variant="contained"
              color="primary"
              sx={{ width: "100%" }}
              onClick={() => handleLoadNewEmails()}
            >
              REFRESH
            </Button>
          </Grid>
          <Grid item xs={12} sm={4} md={3} lg={2} xl={2}>
            <Button
              variant="contained"
              sx={{
                width: "100%",
                backgroundColor: notificationGranted ? "green" : "#888",
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
