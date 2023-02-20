import { Grid, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
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
      <Grid p={4} style={{ position: "relative" }}>
        {selectedEmail && (
          <>
            <Typography variant="body2" component="h4">
              From: {selectedEmail.email}
            </Typography>
            <Typography variant="h5" component="h2" sx={{ m: 2 }}>
              {selectedEmail.title}
            </Typography>
            <pre>
              <Typography variant="body1" sx={{ m: 2 }}>
                {selectedEmail.description}
              </Typography>
            </pre>
            <IconButton
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
              }}
              size="large"
              onClick={handleBackButtonClick}
            >
              <CloseIcon />
            </IconButton>
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default EmailDetails;
