import { Container, Grid } from "@mui/material";

import EmailList from "./components/EmailList";
import EmailDetails from "./components/EmailDetails";
import Header from "./components/Header";
import ErrorScreen from "./components/ErrorScreen";
import useMail from "../../hooks/useMail";
import { useEffect, useState, useRef } from "react";
import Loading from "../../components/Loading";
import useNotification from "../../hooks/useNotification";

import "./styles.css";

const Home = () => {
  const { introduceSession, querySession } = useMail();
  const { askNotificationPermission, sendNotification } = useNotification();
  const [notificationGranted, setNotificationGranted] = useState(
    Notification.permission === "granted"
  );
  const [sessionInformation, setSessionInformation] = useState();
  const [loading, setLoading] = useState(true);
  const [emailsLoading, setEmailsLoading] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState();

  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(null);

  useEffect(() => {
    const initializeSession = async () => {
      try {
        setLoading(true);
        const session_in_local_storage = localStorage.getItem(
          "session_informations"
        );
        if (!session_in_local_storage) {
          const session = await introduceSession();
          if (session.error) {
            setLoading(false);
            return;
          }
          localStorage.setItem("session_informations", JSON.stringify(session));
          setSessionInformation(session);
          setLoading(false);
          return;
        }
        const session = await querySession(
          JSON.parse(session_in_local_storage).session_id
        );
        if (!session || session.error) {
          localStorage.clear();
          const session = await introduceSession();
          if (session.error) {
            setLoading(false);
            return;
          }
          localStorage.setItem("session_informations", JSON.stringify(session));
          setSessionInformation(session);
          setLoading(false);
          return;
        }
        setSessionInformation(session);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    initializeSession();
  }, []);

  useEffect(() => {
    const header = headerRef.current;
    if (header) {
      const observer = new ResizeObserver((entries) => {
        const height = entries[0].target.getBoundingClientRect().height;
        setHeaderHeight(height);
      });
      observer.observe(header);
      return () => observer.disconnect();
    }
  }, [headerRef.current]);

  const handleLoadNewEmails = async () => {
    setEmailsLoading(true);
    const { emails } = await querySession(sessionInformation.session_id);
    setEmailsLoading(false);
    if (
      sessionInformation &&
      emails &&
      emails.length > sessionInformation.emails.length
    ) {
      setSessionInformation({ ...sessionInformation, emails: emails });
      sendNotification("Você possui novas mensagens.");
    }
  };

  return (
    <Container maxWidth="xl">
      {loading && <Loading />}
      {!loading && !sessionInformation && <ErrorScreen />}
      {!loading &&
        sessionInformation !== undefined &&
        !sessionInformation.error && (
          <>
            <Grid ref={headerRef}>
              <Header
                currentEmail={sessionInformation.address}
                handleLoadNewEmails={handleLoadNewEmails}
                askNotificationPermission={askNotificationPermission}
                setNotificationGranted={setNotificationGranted}
                notificationGranted={notificationGranted}
              />
            </Grid>
            {headerHeight ? (
              <Grid
                mt={1}
                direction="row"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  height: `calc(100vh - ${headerHeight + 40}px)`,
                  width: "100%",
                }}
                className="email-grid"
                border={1}
                borderColor="rgba(0, 0, 0, .4)"
                borderRadius={2}
              >
                <EmailList
                  emails={sessionInformation.emails}
                  selectedEmail={selectedEmail}
                  setSelectedEmail={setSelectedEmail}
                  emailsLoading={emailsLoading}
                />
                <EmailDetails
                  selectedEmail={selectedEmail}
                  setSelectedEmail={setSelectedEmail}
                />
              </Grid>
            ) : (
              <Loading />
            )}
          </>
        )}
    </Container>
  );
};

export default Home;
