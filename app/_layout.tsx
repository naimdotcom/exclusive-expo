import { Stack } from "expo-router";
import "../global.css";
import { SafeAreaProvider } from "react-native-safe-area-context";
export default function RootLayout() {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        {/* <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="(tabs)/home"
          options={{
            headerShown: true,
            title: "Home",
            contentStyle: { paddingHorizontal: 8 },
            headerTitleStyle: { color: "#FE7743" },
          }}
        /> */}
      </Stack>
    </>
  );
}
