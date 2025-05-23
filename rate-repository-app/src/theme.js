// theme.js
import Constants from "expo-constants";
import { Platform } from "react-native";

const theme = {
  colors: {
    appBarBackground: "#24292e",
    textPrimary: "#ffffff",
    backgroundPrimary: "#ffffff",
    languageTag: "#0366d6",
    borderColor: "#000000",
    shadowColor: "#000000",
    mainBackground: "#e1e4e8",
  },
  fonts: {
    main:
      Platform.OS === "android"
        ? "Roboto"
        : Platform.OS === "android"
        ? "Arial"
        : "System", //default
  },
  fontSizes: {
    heading: 20,
    body: 16,
    small: 14,
  },
  spacing: {
    padding: 10,
    margin: 10,
  },
  appBar: {
    paddingTop: Constants.statusBarHeight,
  },
  borderRadius: {
    normal: 5,
  },
  shadows: {
    offset: {
      width: 0,
      height: 1,
    },
    opacity: 0.22,
    radius: 2.22,
    elevation: 3,
  },
};

export default theme;
