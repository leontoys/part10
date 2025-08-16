import 'dotenv/config'
  
  export default {
    name: "rate-repository-app-one",
    extra: {
      env: process.env.ENV,
      uri: process.env.APOLLO_URI,
    },
    slug: "rate-repository-app-one",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    newArchEnabled: true,
    splash: {
      image: "./assets/splash-icon.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      edgeToEdgeEnabled: true,
    },
    web: {
      favicon: "./assets/favicon.png",
    },
  };
