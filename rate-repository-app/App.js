import Main from "./src/components/Main";
import { NativeRouter } from "react-router-native";

import React from "react";
import { StatusBar } from "react-native-web";

const App = () => {
  return (
    <>
      <NativeRouter>
        <Main />
      </NativeRouter>
      <StatusBar barStyle="auto" />
    </>
  );
};

export default App;
