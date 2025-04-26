import React from "react";
import { Tabs } from "expo-router";
import { Image, Platform, Text, View } from "react-native";
import TabIcon from "@/Helper/TabIcon";
import AntDesign from "@expo/vector-icons/AntDesign";
const homelogo = require("../../assets/images/icons/home-icon.png");
const TabLayout = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#000000",
          borderRadius: 50,
          marginHorizontal: 20,
          // marginBottom: Platform.OS === "ios" ? 25 : 10,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          height: Platform.OS === "ios" ? 70 : 60,
          position: "absolute",
          bottom: 20,
        },
        tabBarIconStyle: {
          width: "100%",
          height: "100%",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 50,
          position: Platform.OS === "ios" ? "absolute" : "relative",
          bottom: Platform.OS === "ios" ? "-50%" : 0,
        },
      }}
    >
      <Tabs.Screen
        name="(home)/index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => {
            return <TabIcon focused={focused} image={homelogo} text={"Home"} />;
          },
        }}
      />

      <Tabs.Screen
        name="(signup)/signup"
        options={{
          title: "Signup",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              text={"Signup"}
              icon={<AntDesign name="user" size={18} color="white" />}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="(login)/login"
        options={{
          title: "login",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              text={"login"}
              icon={<AntDesign name="login" size={18} color="white" />}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
