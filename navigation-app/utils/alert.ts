import { Alert, Platform } from "react-native";

type AlertButton = {
  text: string;
  style?: "cancel" | "default" | "destructive";
  onPress?: () => void;
};

export function showAlert(
  title: string,
  message?: string,
  buttons?: AlertButton[]
) {
  if (Platform.OS === "web") {
    const fullMessage = message ? `${title}\n\n${message}` : title;

    if (!buttons || buttons.length <= 1) {
      // Simple informational alert — just show it and fire the single button's callback
      window.alert(fullMessage);
      buttons?.[0]?.onPress?.();
    } else {
      // Multi-button alert — use confirm() so the user can accept or cancel
      // The non-cancel button is treated as the "confirm" action
      const confirmed = window.confirm(fullMessage);
      if (confirmed) {
        const confirmButton = buttons.find((b) => b.style !== "cancel");
        confirmButton?.onPress?.();
      } else {
        const cancelButton = buttons.find((b) => b.style === "cancel");
        cancelButton?.onPress?.();
      }
    }
  } else {
    Alert.alert(title, message, buttons);
  }
}
