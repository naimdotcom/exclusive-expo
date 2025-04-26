import React from "react";
import { Tabs } from "expo-router";

const TabLayout = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#FE7743" },
      }}
    >
      <Tabs.Screen name="(home)/index" options={{ title: "Home" }} />

      <Tabs.Screen name="(signup)/signup" options={{ title: "Signup" }} />
    </Tabs>
  );
};

export default TabLayout;
