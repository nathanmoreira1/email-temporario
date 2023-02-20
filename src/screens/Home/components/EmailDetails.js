import { Grid, Typography, IconButton, Box } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "../styles.css";

const EmailDetails = ({ selectedEmail, setSelectedEmail }) => {
  const handleBackButtonClick = () => {
    setSelectedEmail(null);
  };
  return (
    <Grid
      className={
        selectedEmail ? "emails-details emails-details-open" : "emails-details"
      }
    >
      <Grid style={{ position: "relative" }}>
        {selectedEmail && (
          <>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                backgroundColor: "#ccc",
                alignItems: "center",
              }}
              p={2}
            >
              <IconButton onClick={handleBackButtonClick}>
                <ArrowBackIosIcon />
              </IconButton>
              <AccountCircleIcon sx={{ fontSize: 24, marginLeft: 2 }} />
              <Typography
                variant="body2"
                component="h3"
                sx={{ marginLeft: 2 }}
                noWrap
              >
                {selectedEmail.email}
              </Typography>
            </Box>
            <Box pr={2} pb={2}>
              <Typography
                variant="h5"
                sx={{ fontWeight: 600 }}
                component="h2"
                ml={2}
                mt={2}
              >
                {selectedEmail.title}
              </Typography>
              <Typography
                variant="body1"
                ml={4}
                mt={2}
                sx={{ whiteSpace: "pre-line" }}
              >
                {selectedEmail.description}
              </Typography>
            </Box>
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default EmailDetails;
