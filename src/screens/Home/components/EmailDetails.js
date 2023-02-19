import { Grid, Typography } from "@mui/material";

const EmailDetails = ({ selectedEmail }) => {
  return (
    <Grid sx={{ height: "100%", overflowY: "auto", width: "70%" }} p={4}>
      {selectedEmail && (
        <>
          <Typography variant="body2" component="h4">
            From: {selectedEmail.email}
          </Typography>
          <Typography variant="h5" component="h2" sx={{ m: 2 }}>
            {selectedEmail.title}
          </Typography>
          <Typography variant="body1" sx={{ m: 2 }}>
            {selectedEmail.description}
          </Typography>
        </>
      )}
    </Grid>
  );
};

export default EmailDetails;
