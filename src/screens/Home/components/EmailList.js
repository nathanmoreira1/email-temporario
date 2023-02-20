import { List, Typography, Box, Icon } from "@mui/material";
import EmailPreview from "./EmailPreview";
import MailIcon from "@mui/icons-material/Mail";
import Loading from "../../../components/Loading";
import "../styles.css";

const EmailList = ({
  emails,
  emailsLoading,
  selectedEmail,
  setSelectedEmail,
}) => {
  return (
    <Box
      className={
        selectedEmail ? "emails-list emails-list-hidden" : "emails-list"
      }
      position="relative"
      sx={emailsLoading ? { opacity: 0.5 } : {}}
    >
      <List>
        <Typography variant="h5" component="h2" sx={{ m: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Icon sx={{ mr: 1 }}>
              <MailIcon />
            </Icon>
            Inbox
          </Box>
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
      {emailsLoading && <Loading />}
      {!emails.length && (
        <Typography
          variant="body2"
          component="p"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            whiteSpace: "nowrap",
            color: "rgba(0, 0, 0, .7)",
          }}
        >
          Você não possui emails no momento.
        </Typography>
      )}
    </Box>
  );
};

export default EmailList;
