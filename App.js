import React, { useState } from "react";
import * as Font from "expo-font";
import { Text, Image } from "react-native";
import AppLoading from "expo-app-loading";
import { Ionicons } from "@expo/vector-icons";
import { Asset, useAssets } from "expo-asset";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import Tabs from "./navigation/Tabs";
import useColorScheme from "react-native/Libraries/Utilities/useColorScheme";
import Stack from "./navigation/Stack";
import Root from "./navigation/Root";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styled";

const loadFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));
const loadImages = (images) =>
  images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.loadAsync(image);
    }
  });
export default function App() {
  // const [ready, setReady] = useState(false);
  // const onFinish = () => setReady(true);
  // const startLoading = async () => {
  //   // 여기에 로딩하고 싶은 것을을 전부 담는 부분 이게 다 담아져야 다음 작업으로 실행하기 때문
  //   const fonts = loadFonts([Ionicons.font]);
  //   const images = loadImages([
  //     require("./user.png"),
  //     "https://reactnative.dev/img/oss_logo.png",
  //   ]);
  //   await Promise.all([...fonts, ...images]);
  // await Font.loadAsync(Ionicons.font);
  // await Asset.loadAsync(require("./user.png"));
  // };
  const [assets] = useAssets([require("./user.png")]); //이미 expo 에서 hook으로 되어있어서 이용하면 편함
  const [loaded] = Font.useFonts(Ionicons.font); //하지만 로컬 이미지와 폰트만 제공하므로 db나 다른 작업은 위의 방식으로 만들어야함
  const isDark = useColorScheme() === "dark";
  if (!assets || !loaded) {
    return (
      <AppLoading
      // startAsync={startLoading}
      // onFinish={onFinish}
      // onError={console.error}
      />
    );
  }
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </ThemeProvider>
  );
}
