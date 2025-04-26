import React from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";

type Props = {
  focused: boolean;
  image?: ImageSourcePropType;
  text: string;
  icon?: React.ReactNode;
};

const TabIcon = ({ focused, image, text, icon }: Props) => {
  return (
    <View
      className={`flex flex-col items-center justify-between h-full gap-y-1`}
    >
      {image && <Image source={image} className="w-6 h-6 aspect-square" />}
      {icon && icon}
      <Text
        className={`text-sm text-white w-fit px-2 py-0.5 ${
          focused ? "bg-[#273F4F] rounded-full " : ""
        }`}
      >
        {text}
      </Text>
    </View>
  );
};

export default TabIcon;
