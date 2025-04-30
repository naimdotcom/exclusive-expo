import React from "react";
import { Tabs } from "expo-router";
import { Platform } from "react-native";
import TabIcon from "@/Helper/TabIcon";
import AntDesign from "@expo/vector-icons/AntDesign";
import Foundation from "@expo/vector-icons/Foundation";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { UserIcon } from "react-native-heroicons/solid";
import { useIsIosStore } from "@/store/isIosStore";
import { useAuthStore } from "@/store/AuthStore";
const homelogo = require("../../assets/images/icons/home-icon.png");

const TabLayout = () => {
  const isAuth = useAuthStore((state) => state.isAuth);
  const isIos = useIsIosStore((state) => state.isIos);
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
          height: isIos ? 70 : 60,
          position: "absolute",
          bottom: isIos ? 25 : 10,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8,
          shadowRadius: 2,
          paddingHorizontal: 5,
        },
        tabBarIconStyle: {
          width: "100%",
          height: "100%",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 50,
          position: isIos ? "absolute" : "relative",
          bottom: isIos ? "-50%" : 0,
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
        name="(product)/product"
        options={{
          title: "Product",
          tabBarIcon: ({ focused }) => {
            return (
              <TabIcon
                focused={focused}
                icon={
                  <Foundation name="shopping-cart" size={20} color="white" />
                }
                text={"product"}
              />
            );
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
              icon={<FontAwesome name="user" size={20} color="white" />}
            />
          ),
          href: isAuth ? null : "/signup",
        }}
      />
      <Tabs.Screen
        name="(login)/login"
        options={{
          title: "Login",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              text={"Login"}
              icon={<AntDesign name="login" size={18} color="white" />}
            />
          ),
          href: isAuth ? null : "/login",
        }}
      />

      <Tabs.Screen
        name="(profile)/profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              text={"Profile"}
              icon={<UserIcon size={18} color="white" />}
            />
          ),
          href: !isAuth ? null : "/profile",
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
