import { renderHook } from "@testing-library/react-hooks";
import useMail from "../hooks/useMail";

describe("useMail hook", () => {
  test("returns session information", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useMail());
    await waitForNextUpdate();
    expect(result.current.sessionInformation).toBeDefined();
    expect(result.current.sessionInformation.address).toBeDefined();
    expect(result.current.sessionInformation.emails).toBeDefined();
  });
});
