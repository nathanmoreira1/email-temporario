import React from "react";
import { Box, Typography } from "@mui/material";

const ErrorScreen = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="80vh"
    >
      <Typography variant="h5" component="h2" gutterBottom>
        Oops, something went wrong!
      </Typography>
      <Typography variant="body1" gutterBottom>
        We're sorry, but it seems that our service is temporarily unavailable.
        Please try again later.
      </Typography>
    </Box>
  );
};

export default ErrorScreen;
