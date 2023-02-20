import { renderHook } from "@testing-library/react-hooks";
import useNotification from "../hooks/useNotification";

describe("useNotification hook", () => {
  test("askNotificationPermission returns a promise", async () => {
    const { result } = renderHook(() => useNotification());
    expect(result.current.askNotificationPermission()).toBeInstanceOf(Promise);
  });
});
