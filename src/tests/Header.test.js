import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../screens/Home/components/Header";

describe("Header component", () => {
  test("renders correctly", () => {
    const handleLoadNewEmails = jest.fn();
    const askNotificationPermission = jest.fn();
    const setNotificationGranted = jest.fn();
    render(
      <Header
        currentEmail="test@test.com"
        handleLoadNewEmails={handleLoadNewEmails}
        askNotificationPermission={askNotificationPermission}
        setNotificationGranted={setNotificationGranted}
        notificationGranted={true}
      />
    );
    const headerTitle = screen.getByText(/Temporary Email/i);
    const userEmail = screen.getByText(/test@test\.com/i);
    const copyButton = screen.getByRole("button", { name: "COPY" });
    const refreshButton = screen.getByRole("button", { name: "REFRESH" });
    const notificationButton = screen.getByRole("button", {
      name: "NOTIFICATIONS ON",
    });

    expect(headerTitle).toBeInTheDocument();
    expect(userEmail).toBeInTheDocument();
    expect(copyButton).toBeInTheDocument();
    expect(refreshButton).toBeInTheDocument();
    expect(notificationButton).toBeInTheDocument();
  });
});
