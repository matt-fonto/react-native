import { Alert } from "react-native";

export const handleError = (error: unknown) => {
  if (error instanceof Error) {
    Alert.alert("Error", error.message);
  } else {
    Alert.alert("Error", "An unknown error occurred");
  }
};
