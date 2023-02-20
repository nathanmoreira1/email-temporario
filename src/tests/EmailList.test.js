import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import EmailList from "../screens/Home/components/EmailList";

const emails = [
  {
    fromAddr: "test@test.com",
    headerSubject: "Test email",
    text: "This is a test email.",
  },
  {
    fromAddr: "test2@test.com",
    headerSubject: "Test email 2",
    text: "This is another test email.",
  },
];

test("renders emails correctly", () => {
  const { queryAllByText } = render(<EmailList emails={emails} />);

  const emailTitles = queryAllByText(/Test email/i);
  expect(emailTitles).toHaveLength(2);
  emailTitles.forEach((title) => expect(title).toBeInTheDocument());

  const emailBodies = queryAllByText(/This is a test email./i);
  expect(emailBodies).toHaveLength(1);
  expect(emailBodies[0]).toBeInTheDocument();
});

test("displays message when there are no emails", () => {
  const { getByText } = render(<EmailList emails={[]} />);
  expect(getByText(/você não possui emails no momento/i)).toBeInTheDocument();
});
