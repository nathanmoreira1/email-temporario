import {
  Grid,
  Typography,
  ListItemIcon,
  ListItem,
  ListItemButton,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

const EmailPreview = ({ id, email, title, description, setSelectedEmail }) => {
  return (
    <ListItem
      id={id}
      disablePadding
      sx={[{ marginBottom: 1, backgroundColor: "#eee" }]}
      onClick={() =>
        setSelectedEmail({
          email: email,
          title: title,
          description: description,
          id: id,
        })
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <MailIcon />
        </ListItemIcon>
        <Grid>
          <Typography
            variant="body2"
            component="h3"
            mb={0.5}
            fontSize={16}
            noWrap
            fontWeight={600}
          >
            {email}
          </Typography>
          <Typography
            variant="body2"
            component="p"
            mb={0.2}
            noWrap
            fontWeight={600}
          >
            {title}
          </Typography>
          <Typography variant="body2" component="p" noWrap>
            {description}
          </Typography>
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};

export default EmailPreview;
