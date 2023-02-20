import React from "react";
import { render } from "@testing-library/react";
import EmailDetails from "../screens/Home/components/EmailDetails";
import "@testing-library/jest-dom/extend-expect";

describe("EmailDetails component", () => {
  const selectedEmail = {
    email: "sender@test.com",
    title: "Test email",
    description: "This is a test email",
  };

  test("renders correctly with email data", () => {
    const { getByText, queryByText } = render(
      <EmailDetails selectedEmail={selectedEmail} />
    );
    expect(queryByText("sender@test.com")).toBeInTheDocument();
    expect(getByText("Test email")).toBeInTheDocument();
    expect(getByText("This is a test email")).toBeInTheDocument();
  });
});
