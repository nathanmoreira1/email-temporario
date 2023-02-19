function useNotification() {
  const askNotificationPermission = async () => {
    if (!("Notification" in window)) {
      return false;
    }
    const permission = await Notification.requestPermission();
    if (permission !== "granted") {
      return false;
    }
    return true;
  };

  const sendNotification = async (title, options) => {
    if (
      !("Notification" in window) ||
      Notification.permission !== "granted" ||
      document.hasFocus()
    ) {
      return;
    }
    const notification = new Notification(title, options);
    setTimeout(notification.close.bind(notification), 5000);
  };

  return { askNotificationPermission, sendNotification };
}

export default useNotification;
