import { Stack } from "expo-router";
import "../global.css";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Platform } from "react-native";
import { useIsIosStore } from "@/store/isIosStore";
import { useEffect } from "react";
export default function RootLayout() {
  const { setIsIos } = useIsIosStore((state) => state);
  useEffect(() => {
    setIsIos(Platform.OS === "ios");
  }, []);
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
    </>
  );
}
