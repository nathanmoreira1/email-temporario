import env from "react-dotenv";

const AUTH_TOKEN = env.AUTH_TOKEN;
const API_URL = `http://localhost:8080/proxy/api/graphql/${AUTH_TOKEN}`;

const useMail = () => {
  const introduceSession = async () => {
    const query =
      "mutation {introduceSession {id, expiresAt, addresses {address}}}";
    const request = await fetch(
      `${API_URL}?query=${encodeURIComponent(query)}`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "x-requested-with": "XMLHttpRequest",
          Origin: window.location.origin,
        },
        method: "GET",
      }
    );
    if (request.ok) {
      const response = await request.json();
      const created_session = {
        session_id: response.data.introduceSession.id,
        address: response.data.introduceSession.addresses[0].address,
        emails: [],
      };
      return created_session;
    } else {
      return { error: "Problem generating your email. Try again later." };
    }
  };

  const querySession = async (session_id) => {
    const query = `query%20(%24id%3A%20ID!)%20%7Bsession(id%3A%24id)%20%7B%20addresses%20%7Baddress%7D%2C%20mails%7BrawSize%2C%20fromAddr%2C%20toAddr%2C%20downloadUrl%2C%20text%2C%20headerSubject%7D%7D%20%7D&variables=%7B%22id%22%3A%22${session_id}%22%7D`;
    const request = await fetch(`${API_URL}?query=${query}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Origin: window.location.origin,
        "x-requested-with": "XMLHttpRequest",
      },
      method: "GET",
    });
    if (request.ok) {
      const response = await request.json();
      if (!response || !response.data.session) {
        return { error: "Problem generating your email. Try again later." };
      }
      const session_informations = {
        address: response.data.session.addresses[0].address,
        emails: response.data.session.mails,
        session_id: session_id,
      };
      return session_informations;
    } else {
      return { error: "Problem generating your email. Try again later." };
    }
  };

  return { introduceSession, querySession };
};

export default useMail;
